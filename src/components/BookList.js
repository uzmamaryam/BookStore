import React from "react";
import  { useSelector } from 'react-redux'

const BookList = () => {
  const Book = useSelector((state) => state.Book);
  return (
    <div>
       { Book && Book.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <p>{item.Author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;