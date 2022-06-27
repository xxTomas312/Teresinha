import React from 'react';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import '../css/AboutMe.css';
import BgImg2 from '../Img/background2.jpeg';
import { Routes, Route, Link } from 'react-router-dom';

function AboutMe() {
  return (
    <>
      <Nav paginaAtual="/AboutMe"></Nav>
      <section className="about_body ">
        <div className="about_Container">
          <h1 className="about_titulo">Olá!</h1>
          <h1 className="about_titulo">O meu nome é Teresa Gonçalves</h1>
          <p className="about_p">
            Sou uma cabeleireira procurando ser um dia melhor a cada dia,
            aprimorando minhas habilidades para deixar minhas clientes mais
            bonitas e à moda.
          </p>
          <p className="about_p_2">
            If you want to see some of my services, click the button below.
          </p>
          <button className="mt-4">
            <Link to="/Services">Services</Link>
          </button>
        </div>
        <img src={BgImg2} className="aboutMe_img" />
      </section>
      <Footer></Footer>
    </>
  );
}

export default AboutMe;
