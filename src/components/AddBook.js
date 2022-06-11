import React from "react";
import './CSS/AddBook.css'
const AddBook = () => {
    return (
        <section className="addbook-section flex flex-column">
            <h1>Add new book</h1>
        <form className="form">
            <label>
                <input className="title" placeholder="title" />
            </label>
            <label>
                <input className="author" placeholder="author" />
            </label>
            <button type="submit">Add book</button>
        </form>
        </section>
    )
}

export default AddBook;