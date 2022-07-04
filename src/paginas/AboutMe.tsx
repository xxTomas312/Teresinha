import React from 'react';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import '../css/AboutMe.css';
import BgImg2 from '../Img/background2.jpeg';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <>
      <Nav paginaAtual="/AboutMe"></Nav>
      <section className="about_body ">
        <div className="about_Container">
          <h1 className="about_titulo">Olá!</h1>
          <h1 className="about_titulo">O meu nome é Teresa Gonçalves</h1>
          <p className="about_p">
            Sou uma cabeleireira profissional procurando ser melhor dia após
            dia, melhorando as minhas habilidades para deixar minhas clientes
            mais bonitas e estilosas.
          </p>
          <p className="about_p_2">
            Se quiseres ver alguns dos meus trabalhos clica em "Galeria".
          </p>
          <Link to="/Services">
            <button className="btn">Galeria</button>
          </Link>
        </div>
        <img src={BgImg2} className="aboutMe_img" />
      </section>
      <Footer></Footer>
    </>
  );
}

export default AboutMe;
