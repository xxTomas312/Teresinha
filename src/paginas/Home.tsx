import React from 'react';
import '../css/Home.css';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import Swiper from '../componentes/Swiper';
import { SwiperItemType } from '../types';

import pic1 from '../Img/pic1.jpg';
import pic2 from '../Img/pic2.jpg';
import pic3 from '../Img/pic3.jpeg';
import pic4 from '../Img/pic4.jpg';
import pic5 from '../Img/pic5.jpg';

import pic1Mobile from '../Img/pic1Mobile.jpg';
import pic2Mobile from '../Img/pic2Mobile.jpg';
import pic3Mobile from '../Img/pic3Mobile.jpeg';
import pic4Mobile from '../Img/pic4Mobile.jpg';
import pic5Mobile from '../Img/pic5Mobile.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
  /* Desktop Version */
  const items: SwiperItemType[] = [
    {
      imageSrc: pic1,
      imageAlt: 'First Background',
      elements: (
        <>
          <div className="home_element_container_1">
            <div className="home_element_title_container_1">
              <h1 className="home_element_title_1">Don't Talk too much</h1>
              <h1 className="home_element_title_1">
                Let Your Hair Do The Talking
              </h1>
              <h2 className="home_element_h2_1">
                Clique com o butão direito do seu rato e deslize para a
                esquerda.
              </h2>
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
            <div className="home_element_title_container_2">
              <a href="#" className="home_element_title_2">
                Love is in the hair
              </a>
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
            <div className="home_element_title_container_3">
              <h1 className="home_element_title_3">
                "The best colour in the world
              </h1>
              <h1 className="home_element_title_3"> is the one that looks</h1>
              <h1 className="home_element_title_3"> good on you."</h1>
              <br />
              <h2 className="home_element_title_3">- Coco Chanel</h2>
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
            <div className="home_element_title_container_4">
              <a href="#" className="home_element_title_4">
                A woman who cuts her Hair is about to change her life.
              </a>
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
            <div className="home_element_title_container_5">
              <h1 className="home_element_title_5">
                Se queres saber mais sobre mim, clica em "Sobre Mim"
              </h1>
              <Link to="/AboutMe">
                <button className="home_element_button">Sobre Mim</button>
              </Link>
            </div>
          </div>
        </>
      ),
    },
  ];

  /* Mobile Version */
  const items_mobile: SwiperItemType[] = [
    {
      imageSrc: pic1Mobile,
      imageAlt: 'First Background Mobile',
      elements: (
        <>
          <div className="home_element_container_1">
            <div className="home_element_title_container_1">
              <h1 className="home_element_title_1">Don't Talk too much</h1>
              <h1 className="home_element_title_1">
                Let Your Hair Do The Talking
              </h1>
              <h2 className="home_element_h2_1">Desliza para a esquerda.</h2>
            </div>
          </div>
        </>
      ),
    },
    {
      imageSrc: pic2Mobile,
      imageAlt: 'Second Background Mobile',
      elements: (
        <>
          <div className="home_element_container_2">
            <div className="home_element_title_container_2">
              <a href="#" className="home_element_title_2">
                Love is in the hair
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      imageSrc: pic3Mobile,
      imageAlt: 'Third Background Mobile',
      elements: (
        <>
          <div className="home_element_container_3">
            <div className="home_element_title_container_3">
              <h1 className="home_element_title_3">
                "The best colour in the world
              </h1>
              <h1 className="home_element_title_3"> is the one that looks</h1>
              <h1 className="home_element_title_3"> good on you."</h1>
              <br />
              <h2 className="home_element_title_3">- Coco Chanel</h2>
            </div>
          </div>
        </>
      ),
    },
    {
      imageSrc: pic4Mobile,
      imageAlt: 'Fourth Background',
      elements: (
        <>
          <div className="home_element_container_4">
            <div className="home_element_title_container_4">
              <a href="#" className="home_element_title_4">
                A woman who cuts her Hair is about to change her life.
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      imageSrc: pic5Mobile,
      imageAlt: 'Fifth Background',
      elements: (
        <>
          <div className="home_element_container_5">
            <div className="home_element_title_container_5">
              <h1 className="home_element_title_5">
                Se queres saber mais sobre mim, clica em "Sobre Mim"
              </h1>
              <Link to="/AboutMe">
                <button className="home_element_button">Sobre Mim</button>
              </Link>
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
        <div className="container_mobile">
          <Swiper items={items_mobile} />
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
export default Home;
