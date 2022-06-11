import React from 'react';
import './CSS/AddBook.css';

const AddBook = () => (
  <section className="addbook-section flex flex-column">
    <h1>Add new book</h1>
    <form className="form">
      {/* <label id="title"> */}
      <input className="title" placeholder="title" name="title" />
      {/* </label> */}
      {/* <label id="author"> */}
      <input className="author" placeholder="author" name="author" />
      {/* </label> */}
      <button type="submit">Add book</button>
    </form>
  </section>
);

export default AddBook;
