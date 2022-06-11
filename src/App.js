import React from "react";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Books from "./components/Books";
import './App.css'

const App = () =>  (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/Categories" element={<Categories/>}/>
      </Routes>
    </Router>
  );


export default App;
