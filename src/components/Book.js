import React from 'react';

const Book = () => (
  <div className="book-container flex">
    <section className="book-infos flex flex-column">
      <span className="book-categories">categories</span>
      <span className="book-title"> title</span>
      <span className="book-author">author </span>
      <div className="book-buttons">
        <button type="button" className="comment">comment</button>
        <button type="button" className="remove">remove</button>
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
);

export default Book;
