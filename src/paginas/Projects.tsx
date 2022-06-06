import React from "react";
import Nav from '../componentes/Nav'
import Footer from '../componentes/Footer'

function Projects(){
    return(
        <>
            <Nav paginaAtual="/Projects"></Nav>
            <section className="flex justify-center items-center w-full border-2 border-black">
                    <div className="grid_container">
                        <div className="grid_item"></div>
                        <div className="grid_item"></div>
                        <div className="grid_item"></div>
                        <div className="grid_item"></div>
                        <div className="grid_item"></div>
                        <div className="grid_item"></div>
                        <div className="grid_item"></div>
                        <div className="grid_item"></div>
                    </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Projects;