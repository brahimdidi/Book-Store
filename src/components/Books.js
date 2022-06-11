import React from "react";

import Book from "./Book";
import AddBook from "./AddBook";
import './CSS/Books.css'
const Books = () => {
    return (
  <section className="books">
    <div className="books-list flex flex-column">
      <Book />
      <Book />
      <Book />
    </div>
    <AddBook />
  </section>
    )
}

export default Books;