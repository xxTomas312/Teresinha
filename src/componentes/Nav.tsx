import React, { useState } from 'react';
import Logo from '../Img/Logo.jpeg';
import '../css/Nav.css';
import { Routes, Route, Link } from 'react-router-dom';

function Nav({ paginaAtual }: any) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      {/*Main COntainer*/}
      <nav className="nav_body">
        {/* Logo Conatiner */}
        <section className="ml-8 flex justify-center items-center ">
          <Link className="underline decoration-3 text-2xl" to="/">
            <img src={Logo} className="h-20" />
          </Link>
        </section>
        <div className="menu_600px" onClick={() => setAberto(true)}>
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
        </div>
      </nav>

      {aberto ? (
        <>
          <section className="buttonsContainerMobile">
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
          <a
            className="menu_600px_closeButton"
            onClick={() => setAberto(false)}
          >
            <h1>X</h1>
          </a>
        </>
      ) : null}
    </>
  );
}

const style = {
  fontWeight: '600',
};
export default Nav;
