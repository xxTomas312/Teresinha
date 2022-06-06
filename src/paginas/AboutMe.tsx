import React from "react";
import Nav from '../componentes/Nav'
import Footer from '../componentes/Footer'
import BgImg2 from '../Img/background2.jpeg'

function AboutMe(){
    return(
        <>
        <Nav paginaAtual="/AboutMe" ></Nav>
        <section className="flex border-t-2 border-black">
                <div className="flex flex-col ml-6 mt-16 w-1/2">
                    <h1 className="About_titulo">Hello!</h1>
                    <h1 className="About_titulo">My Name is Teresa Gonçalves</h1>
                    <p className="w-4/6 mt-4 w-1/2">bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
                </div>
                <img src={BgImg2} className="aboutMe_img"/>
        </section>
        <Footer></Footer>
        </>
    )
}

export default AboutMe;