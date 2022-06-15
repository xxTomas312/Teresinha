import React from 'react';
import Logo from '../Img/Logo.jpeg'
import { Routes, Route, Link } from "react-router-dom";

function Nav({paginaAtual}:any){
    return(
        <>
            {/*Main COntainer*/}
            <nav className="z-40 bg-[#241E20] flex justify-between items-center w-100 h-28 border-black border-2 ">
                {/* Logo Conatiner */}
                <section className="ml-8 flex justify-center items-center ">
                    <Link className="underline decoration-3 text-2xl"to="/">
                        <img src={Logo} className="h-20"/>
                    </Link>
                </section>
                <section className="buttonsContainer">
                        <Link className="navButton" to="/Contact">
                            <h1 className="navTitulo" style={paginaAtual === '/Contact' ? style : undefined}>Contact</h1>
                        </Link>
                        <Link className="navButton" to="/AboutMe">
                            <h1 className="navTitulo" style={paginaAtual === '/AboutMe' ? style : undefined}>About</h1>
                        </Link>
                        <Link className="navButton" to="/Projects">
                            <h1 className="navTitulo" style={paginaAtual === '/Projects' ? style : undefined}>Services</h1>
                        </Link>
                        <Link className="navButton" to="/Blog">
                            <h1 className="navTitulo" style={paginaAtual === '/Blog' ? style : undefined}>Blogs</h1>
                        </Link>
                </section>
            </nav>
        </>
    )
}

const style = {
    fontWeight: '600'
}
export default Nav; 