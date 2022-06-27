import React from 'react';
import Logo from '../Img/Logo.jpeg';
import '../css/Nav.css';
import { Routes, Route, Link } from 'react-router-dom';

function Nav({ paginaAtual }: any) {
  return (
    <>
      {/*Main COntainer*/}
      <nav className="z-40 bg-[#241E20] flex justify-between items-center w-100 h-28 border-black border-2 ">
        {/* Logo Conatiner */}
        <section className="ml-8 flex justify-center items-center ">
          <Link className="underline decoration-3 text-2xl" to="/">
            <img src={Logo} className="h-20" />
          </Link>
        </section>
        <section className="buttonsContainer">
          <Link className="navButton" to="/Contact">
            <h1
              className="navTitulo"
              style={paginaAtual === '/Contact' ? style : undefined}
            >
              Contacta-me
            </h1>
          </Link>
          <Link className="navButton" to="/AboutMe">
            <h1
              className="navTitulo"
              style={paginaAtual === '/AboutMe' ? style : undefined}
            >
              Sobre mim
            </h1>
          </Link>
          <Link className="navButton" to="/Services">
            <h1
              className="navTitulo"
              style={paginaAtual === '/Services' ? style : undefined}
            >
              Galeria
            </h1>
          </Link>
          <Link className="navButton" to="/Review">
            <h1
              className="navTitulo"
              style={paginaAtual === '/Review' ? style : undefined}
            >
              Dá uma Opnião
            </h1>
          </Link>
        </section>
      </nav>
    </>
  );
}

const style = {
  fontWeight: '600',
};
export default Nav;
