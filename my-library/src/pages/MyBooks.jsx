import React from "react";
import { useSelector } from "react-redux";
import MyBookCard from "../components/MyBookCard";

const MyBooks = () => {
  const myBooks = useSelector((state) => state.books.myBooks);

  return (
    <div>
      <h2>My Books</h2>
      <div className="book-container">
        {myBooks.map((book) => (
          <MyBookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
