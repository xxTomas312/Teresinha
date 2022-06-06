import React from "react";
import Nav from '../componentes/Nav'
import Footer from '../componentes/Footer'


function Contact(){
    return(
        <>
        <Nav paginaAtual="/Contact"></Nav>
        <section className="contact_container">
                <div className="flex flex-col items-center border-l-2 border-r-2 border-black w-1/2 h-full">
                    <h1 className="text-4xl mt-24 mb-6">Contact Me</h1>
                    <input placeholder="Name"className="border-2 border-black w-4/5 h-12 mb-8 pl-2" type="text"/>
                    <input placeholder="Email"className="border-2 border-black w-4/5 h-12 mb-8 pl-2" type="email"/>
                    <textarea placeholder="Message"className="border-2 border-black w-4/5 h-52 mb-8 pl-2"></textarea>
                    <button className="">SEND</button>
                </div>
        </section>
        <Footer></Footer>
        </>
        
    )
}

export default Contact;