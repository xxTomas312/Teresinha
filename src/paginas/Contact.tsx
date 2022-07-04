import React, { useState } from 'react';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import '../css/Contact.css';

function Contact() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <Nav paginaAtual="/Contact"></Nav>
      <section className="contact_body">
        <div className="contact_container">
          <h1 className="titulos">Contact Me</h1>
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
          <button onClick={() => setAberto(true)}>SEND</button>
        </div>
      </section>

      {aberto ? (
        <section className="contact_alert" id="contact_alert">
          <div className="contact_box">
            <h1 className="text-2xl">Your message was sent successfully</h1>
            <p className="mb-2 mt-4">Click "here" to go back</p>
            <button className="mt-4" onClick={() => setAberto(false)}>
              Here
            </button>
          </div>
        </section>
      ) : null}
      <Footer></Footer>
    </>
  );
}

export default Contact;
