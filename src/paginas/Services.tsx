import React from "react";
import Nav from "../componentes/Nav";
import Footer from "../componentes/Footer";

function Services() {
  return (
    <>
      <Nav paginaAtual="/Services"></Nav>
      <section className="services_body">
        <div className="grid_container">
          <div className="grid_item" id="1"></div>
          <div className="grid_item" id="2"></div>
          <div className="grid_item" id="3"></div>
          <div className="grid_item" id="4"></div>
          <div className="grid_item" id="5"></div>
          <div className="grid_item" id="6"></div>
          <div className="grid_item" id="7"></div>
          <div className="grid_item" id="8"></div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Services;
