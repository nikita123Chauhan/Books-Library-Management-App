import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

// Async thunk to fetch books from Firestore
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const booksCollection = collection(db, "books");
  const booksSnapshot = await getDocs(booksCollection);
  return booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
});

// Initial state
const initialState = {
  books: [],
  myBooks: [],
  status: "idle",
  error: null,
};

// Redux slice
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addUserBook: (state, action) => {
      state.myBooks.push({ ...action.payload, status: "Not Read" });
    },
    updateBookStatus: (state, action) => {
      const { bookId, status } = action.payload;
      const book = state.myBooks.find((book) => book.id === bookId);
      if (book) {
        book.status = status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { addUserBook, updateBookStatus } = bookSlice.actions;
export default bookSlice.reducer;
