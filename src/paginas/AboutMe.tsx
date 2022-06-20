import React from 'react';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import BgImg2 from '../Img/background2.jpeg';

function AboutMe() {
  return (
    <>
      <Nav paginaAtual="/AboutMe"></Nav>
      <section className="about_body ">
        <div className="about_Container">
          <h1 className="About_titulo">Hello!</h1>
          <h1 className="About_titulo">My Name is Teresa Gonçalves</h1>
          <p className="About_p"></p>
        </div>
        <img src={BgImg2} className="aboutMe_img" />
      </section>
      <Footer></Footer>
    </>
  );
}

export default AboutMe;
