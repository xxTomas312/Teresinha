import React from 'react';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import BgImg2 from '../Img/background2.jpeg';
import { Routes, Route, Link } from 'react-router-dom';

function AboutMe() {
  return (
    <>
      <Nav paginaAtual="/AboutMe"></Nav>
      <section className="about_body ">
        <div className="about_Container">
          <h1 className="about_titulo">Hello!</h1>
          <h1 className="about_titulo">My Name is Teresa Gonçalves</h1>
          <p className="about_p">
            I'm a professionally trained hairdresser, looking to be better day
            by day, improving my skills to make my clients more beautiful and
            stylish.
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
