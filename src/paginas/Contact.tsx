import React, { useState } from "react";
import Nav from "../componentes/Nav";
import Footer from "../componentes/Footer";
import { Console } from "console";

function Contact() {    
  const [aberto, setAberto] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  {/*const onSubmit = (event) => {
    event.preventDefault();
    console.log("Name: " + nome);
    console.log("Name: " + email);
    console.log("Name: " + message);
  }*/}

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
              <button onClick={()=> setAberto(true)}>SEND</button>
            </div>
          </section>

          {aberto ? <section className="contact_alert" id="contact_alert">
            <div className="contact_box">
              <h1 className="text-2xl">Your message was sent successfully</h1>
              <p className="mb-2 mt-4">Click "here" to go back</p>
              <button onClick={()=> setAberto(false)}>Here</button>
            </div>
          </section> : null}
        <Footer></Footer>
    </>
  );
}



export default Contact;
