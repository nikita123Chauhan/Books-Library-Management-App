import React from "react";
import { useDispatch } from "react-redux";
import { updateBookStatus } from "../redux/slices/bookSlice";

const MyBookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleMarkAsRead = () => {
    dispatch(updateBookStatus({ bookId: book.id, status: "Read" }));
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>Status: {book.status}</p>
      <button onClick={handleMarkAsRead}>Mark as Read</button>
    </div>
  );
};

export default MyBookCard;
