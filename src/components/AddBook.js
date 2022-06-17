import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, ID } from '../store/books/bookRedux';
import './CSS/AddBook.css';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const { title, author } = book;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: ID(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setBook({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="addbook-section flex flex-column">
      <h1 className="add-new-book">Add new book</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="title"
          placeholder="title"
          value={title}
          name="title"
          onChange={handleChange}
          required
        />
        <input
          className="author"
          placeholder="author"
          value={author}
          name="author"
          onChange={handleChange}
          required
        />
        <button type="submit">add book</button>
      </form>
    </section>
  );
};

export default AddBook;
