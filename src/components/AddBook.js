import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/books/bookSlice';
import './CSS/AddBook.css';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const { title, author, category } = book;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({
      title: '',
      author: '',
      category: '',
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setBook({
      ...book,
      [name]: value,
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
        <input
          className="category"
          placeholder="category"
          value={category}
          name="category"
          onChange={handleChange}
          required
        />
        <button type="submit">add book</button>
      </form>
    </section>
  );
};

export default AddBook;
