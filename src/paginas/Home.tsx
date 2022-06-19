import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import HomeButtons from '../componentes/HomeButtons';
import Swiper from '../componentes/Swiper';

const Home = () => {
  const items = [
    {
      imageSrc: '/pic1.jpeg',
      imageAlt: 'First Background',
    },
    {
      imageSrc: '/pic2.jpg',
      imageAlt: 'Second Background',
    },
    {
      imageSrc: '/pic3.jpg',
      imageAlt: 'Third Background',
    },
    {
      imageSrc: '/pic4.jpg',
      imageAlt: 'Fourth Background',
    },
    {
      imageSrc: '/pic5.jpg',
      imageAlt: 'Fifth Background',
    },
  ];

  return (
    <>
      <Nav paginaAtual="/"></Nav>
      <section className="home_body">
        <div className="container">
          <Swiper items={items} />
        </div>
        <div></div>
      </section>
      <Footer></Footer>
    </>
  );
};
export default Home;
