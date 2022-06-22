import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import Swiper from '../componentes/Swiper';
import { SwiperItemType } from '../types';
import pic1 from '../Img/pic1.jpg';
import pic2 from '../Img/pic2.jpg';
import pic3 from '../Img/pic3.jpg';
import pic4 from '../Img/pic4.jpg';
import pic5 from '../Img/pic5.jpg';
const Home = () => {
  const items: SwiperItemType[] = [
    {
      imageSrc: pic1,
      imageAlt: 'First Background',
      elements: (
        <div className="home_element_container">
          <h1 className="home_element_container_title">
            Let Your Hair Do THe Talking
          </h1>
        </div>
      ),
    },
    {
      imageSrc: pic2,
      imageAlt: 'Second Background',
      elements: <></>,
    },
    {
      imageSrc: pic3,
      imageAlt: 'Third Background',
      elements: <></>,
    },
    {
      imageSrc: pic4,
      imageAlt: 'Fourth Background',
      elements: <></>,
    },
    {
      imageSrc: pic5,
      imageAlt: 'Fifth Background',
      elements: <></>,
    },
  ];

  return (
    <>
      <Nav paginaAtual="/"></Nav>
      <section className="home_body">
        <div className="container">
          <Swiper items={items} />
        </div>
      </section>
    </>
  );
};
export default Home;
