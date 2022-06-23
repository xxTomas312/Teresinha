import React, { useState } from 'react';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import '../css/Services.css';
import Img1 from '../Img/plasticaCapilar.jpeg';
import Img2 from '../Img/brushingSteampod.jpeg';
import Img3 from '../Img/CalifornianasOmbré.jpeg';
import Img4 from '../Img/cortehomem.jpeg';
import Img5 from '../Img/corteMulher.jpeg';

function Services() {
  return (
    <>
      <Nav paginaAtual="/Services"></Nav>
      <section className="services_body"></section>
      <Footer></Footer>
    </>
  );
}

export default Services;
