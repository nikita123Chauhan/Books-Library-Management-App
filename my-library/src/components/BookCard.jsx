import React from "react";
import { useDispatch } from "react-redux";
import { addUserBook } from "../redux/slices/bookSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addUserBook(book));
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={handleAddBook}>Add to My Books</button>
    </div>
  );
};

export default BookCard;
