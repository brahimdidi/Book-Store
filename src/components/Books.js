import React from 'react';
import Book from './Book';
import AddBook from './AddBook';
import './CSS/Books.css';

const Books = () => (
  <section className="books">
    <Book />
    <AddBook />
  </section>
);
export default Books;
