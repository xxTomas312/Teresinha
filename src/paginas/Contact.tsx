import React from "react";
import Nav from "../componentes/Nav";
import Footer from "../componentes/Footer";

function Contact() {
    
    function Alert() {
        let name = document.getElementById('name')
        let email = document.getElementById('email')
        let message = document.getElementById('message')

        
        console.log("ola");
        alert("Message Was Send");
    }
  return (
    <>
      <Nav paginaAtual="/Contact"></Nav>
      <section className="contact_container">
        <div className="flex flex-col items-center border-l-2 border-r-2 border-black w-1/2 h-full">
          <h1 className="text-4xl mt-24 mb-6">Contact Me</h1>
          {/*-Name-*/}
          <input
            id="name"
            placeholder="Name"
            className="border-2 border-black w-4/5 h-12 mb-8 pl-2"
            type="text"
          />
          {/*-Email-*/}
          <input
            id="email"
            placeholder="Email"
            className="border-2 border-black w-4/5 h-12 mb-8 pl-2"
            type="email"
          />
          {/*-Message-*/}
          <textarea
            id="message"
            placeholder="Message"
            className="border-2 border-black w-4/5 h-52 mb-8 pl-2"
          ></textarea>
          <button onClick={Alert}>SEND</button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Contact;
