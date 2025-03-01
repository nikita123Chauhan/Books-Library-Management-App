import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./redux/slices/bookSlice"; 

const store = configureStore({
  reducer: {
    books: bookSlice, // Ensure this matches your slice name
  },
});

export default store;
