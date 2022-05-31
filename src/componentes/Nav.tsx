import React from 'react';
import Logo from '../Img/Logo.jpeg'
import { Routes, Route, Link } from "react-router-dom";

function Nav(){
    return(
        <>
            {/*Main COntainer*/}
            <nav className="z-40 bg-[#241E20] flex justify-between items-center w-100 h-28 border-black border-2 ">
                {/* Logo Conatiner */}
                <section className="ml-8 flex justify-center items-center">
                    <Link className="underline decoration-3 text-2xl"to="/">
                        <img src={Logo} className="h-20"/>
                    </Link>
                </section>
                <section className="buttonsContainer">
                        <Link className="navButton" to="/Contact">
                            <h1 className="text-white  -rotate-45">Contact</h1>
                        </Link>
                        <Link className="navButton" to="/AboutMe">
                            <h1 className="text-white  -rotate-45">About</h1>
                        </Link>
                        <Link className="navButton" to="/Projects">
                            <h1 className="text-white -rotate-45">Projects</h1>
                        </Link>
                        <Link className="flex text-2xl justify-center items-center ml-12 underline decoration-1" to="/Login">
                            <h1 className="text-white" >Login</h1>
                        </Link>
                </section>
            </nav>
        </>
    )
}

export default Nav; 