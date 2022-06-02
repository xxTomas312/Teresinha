import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from '../componentes/Nav'
import Footer from '../componentes/Footer'
import Img1 from '../Img/img1.jpeg'
import Img2 from '../Img/img2.jpeg'
import Img3 from '../Img/img3.jpeg'

function Home(){
    return(
        <>
        <Nav paginaAtual="/"></Nav>
        <section className="text-center h-1/1">
                <div className="bg-white w-full h-24 border-t-2 border-b-2 border-black">
                    <h1 className='mt-8 text-3xl t'>True Hard Work Always Pays Off</h1>
                </div>
                {/*Img Container*/}
                <section className="flex justify-end align-center h-4/6">
                    <img src={Img3} className="home_img_1"/>
                    <img src={Img1} className="home_img_2"/>
                    <img src={Img2} className="home_img_3"/>
                    <div className="home_AboutMe_Container">
                        <div className="flex flex-col justify-between align-center">
                            <h1 className="text-4xl w-1/2">Natural Products</h1>
                            <h1 className="text-4xl">Stronger Hair</h1>
                            <Link className="flex text-2xl justify-center items-center underline decoration-1 w-32 border-2" to="/Store">About Me</Link>
                        </div>
                    </div>
                </section>
        </section>
        <Footer></Footer>
        </>
    );
  }
export default Home;