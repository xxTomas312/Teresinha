import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from '../componentes/Nav'
import Footer from '../componentes/Footer'
import Img1 from '../Img/img1.jpeg'
import Img2 from '../Img/img2.jpeg'
import Img3 from '../Img/img3.jpeg'
import Img4 from '../Img/background3.jpeg'

function Home(){
    return(
        <>
        <Nav paginaAtual="/"></Nav>
        <section>
            <div className="home_titleContainer">
                <h1>True Hard Work Always Pays Off In The End</h1>
            </div>
            <section className="home_mainContiner">
                <div className="home_imgContainer_1">
                    <img src={Img1} className="home_img_1" />
                    <img src={Img2} className="home_img_2"/>
                    <img src={Img3} className="home_img_3"/>
                </div>
                {/*<div className="home_imgContainer_2">
                    <img src={Img4} className="home_img_4"/>
                </div>/*}
                {/*-BTTNS TO CHANGE BACKGROUND-*/}
                <div className="flex justify-center items-center mb-4 mt-4">
                    <div className="flex w-32 justify-between">
                        <button className="switch"></button>
                        <button className="switch"></button>
                        <button className="switch"></button>
                    </div>
                </div>
            </section>
        </section>
        <Footer></Footer>
        </>
    );
  }
export default Home;