import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../css/Home.css';
import Nav from '../componentes/Nav';
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
        <>
          <div className="home_element_container_1">
            <div className="home_element_title_container">
              <h1 className="home_element_title_1">Don't Talk too much</h1>
              <h1>Let Your Hair Do The Talking</h1>
            </div>
          </div>
        </>
      ),
    },
    {
      imageSrc: pic2,
      imageAlt: 'Second Background',
      elements: (
        <>
          <div className="home_element_container_2">
            <div className="home_element_title_container">
              <h1 className="home_element_title">Don't Talk too much</h1>
              <h1 className="home_element_title">
                Let Your Hair Do The Talking
              </h1>
            </div>
          </div>
        </>
      ),
    },
    {
      imageSrc: pic3,
      imageAlt: 'Third Background',
      elements: (
        <>
          <div className="home_element_container_3">
            <div className="home_element_title_container">
              <h1 className="home_element_title">Don't Talk too much</h1>
              <h1 className="home_element_title">
                Let Your Hair Do The Talking
              </h1>
            </div>
          </div>
        </>
      ),
    },
    {
      imageSrc: pic4,
      imageAlt: 'Fourth Background',
      elements: (
        <>
          <div className="home_element_container_4">
            <div className="home_element_title_container">
              <h1 className="home_element_title">Don't Talk too much</h1>
              <h1 className="home_element_title">
                Let Your Hair Do The Talking
              </h1>
            </div>
          </div>
        </>
      ),
    },
    {
      imageSrc: pic5,
      imageAlt: 'Fifth Background',
      elements: (
        <>
          <div className="home_element_container_5">
            <div className="home_element_title_container">
              <h1 className="home_element_title">Don't Talk too much</h1>
              <h1 className="home_element_title">
                Let Your Hair Do The Talking
              </h1>
            </div>
          </div>
        </>
      ),
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
