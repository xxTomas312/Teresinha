import React from 'react';
import CheckOut from './paginas/CheckOut'
import './App.css';
import Nav from './componentes/Nav';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./paginas/Home"
import Projects from "./paginas/Projects"
import Contact from './paginas/Contact';
import AboutMe from './paginas/AboutMe';
import Login from './paginas/Login';



function App() {
  return (
    <>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/CheckOut" element={<CheckOut />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Store" element={<Contact />}/>
        <Route path="/AboutMe" element={<AboutMe />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
