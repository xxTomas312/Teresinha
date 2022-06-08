import React from 'react';
import CheckOut from './paginas/CheckOut'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./paginas/Home"
import Projects from "./paginas/Projects"
import Contact from './paginas/Contact';
import AboutMe from './paginas/AboutMe';
import Blog from './paginas/Blog';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/CheckOut" element={<CheckOut />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/AboutMe" element={<AboutMe />}/>
        <Route path="/Blog" element={<Blog />}/>
      </Routes>
    </>
  );
}

export default App;
