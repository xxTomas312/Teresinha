import React from "react";
import Nav from '../componentes/Nav'

function AboutMe(){
    return(
        <>
        <Nav paginaAtual="/Contact"></Nav>
        <section className="text-center w-full h-screen border-2 border-black">
                <h1 className='mt-8 text-3xl t'>About Me</h1>
        </section>
        </>
    )
}

export default AboutMe;