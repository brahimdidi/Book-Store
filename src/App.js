import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Books from './components/Books';
import './App.css';

const App = () => (
  <div className="App">
    <Nav />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
