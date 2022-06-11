import React from "react";
import {Link} from "react-router-dom";
import './CSS/Nav.css'
const Nav = () => {
    return (
        <div className="nav-container">
        <nav className="nav flex">
            <h1>Bookstore CMS</h1>
            <ul className="nav-ul flex">
                <li><Link to="/">Books</Link></li>
                <li><Link to="/Categories">Categories</Link></li>

            </ul>
        </nav>
        </div>
    )
}

export default Nav;