import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './paginas/Home';
import Services from './paginas/Services';
import Contact from './paginas/Contact';
import AboutMe from './paginas/AboutMe';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
