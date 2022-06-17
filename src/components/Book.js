import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../store/books/bookRedux';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleClick = (b) => {
    dispatch(removeBook(b));
  };

  useEffect(() => {
  }, []);
  return (
    <div className="books-list flex flex-column">
      { books.map((book) => (
        <div className="book-container flex" key={book.id} id={book.id}>
          <section className="book-infos flex flex-column">
            <span className="book-categories">categories</span>
            <span className="book-title">{book.title}</span>
            <span className="book-author">{book.author}</span>
            <div className="book-buttons">
              <button type="button" className="comment">comment</button>
              <button type="button" className="remove" onClick={() => handleClick(book)}>remove</button>
              <button type="button" className="edit">edit</button>
            </div>
          </section>
          <section className="book-status flex">
            <div className="Rectangle-3"><div className="completed-circle" /></div>
            <div className="completed-percentage flex flex-column">
              <span className="percentage-result">100%</span>
              <span className="completed">completed</span>
            </div>
          </section>
          <section className="book-chapter flex flex-column">
            <span className="current-chapter">current chapter</span>
            <span className="chapter">chapter 17</span>
            <button type="button" className="update-progress">update chapter</button>
          </section>
        </div>
      ))}
    </div>
  );
};
export default Book;
