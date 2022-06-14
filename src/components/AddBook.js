import React from 'react';
import './CSS/AddBook.css';

const AddBook = () => (
  <section className="addbook-section flex flex-column">
    <h1 className="add-new-book">Add new book</h1>
    <form className="form">
      <input className="title" placeholder="title" name="title" />
      <input className="author" placeholder="author" name="author" />
      <button type="submit">Add book</button>
    </form>
  </section>
);

export default AddBook;
