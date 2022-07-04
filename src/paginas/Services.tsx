import React from 'react';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import '../css/Services.css';

function Services() {
  return (
    <>
      <Nav paginaAtual="/Services"></Nav>
      <section className="services_body">
        <div className="main_container">
          <h1 className="titulos">Galeria</h1>
          <div className="grid_container">
            <div className="grid_item" id="plasticaCapilar">
              <h1 className="grid_text_hover">Plástica Capilar</h1>
            </div>
            <div className="grid_item" id="BrushingOndas">
              <h1 className="grid_text_hover">Brushing de Ondas</h1>
            </div>
            <div className="grid_item" id="BrushingSteampod">
              <h1 className="grid_text_hover">Brushing Com Steampod</h1>
            </div>
            <div className="grid_item" id="californianasOmbre">
              <h1 className="grid_text_hover">Californianas Ombré </h1>
            </div>
            <div className="grid_item" id="alteracaoCor">
              <h1 className="grid_text_hover">Alteração De Côr</h1>
            </div>
            <div className="grid_item" id="blocosCor">
              <h1 className="grid_text_hover">Blocos De Côr</h1>
            </div>
            <div className="grid_item" id="cortemulher">
              <h1 className="grid_text_hover">Corte De Mulher</h1>
            </div>
            <div className="grid_item" id="cortehomem">
              <h1 className="grid_text_hover">Corte De Homem</h1>
            </div>
            <div className="grid_item" id="corteCriança">
              <h1 className="grid_text_hover">Corte de criança</h1>
            </div>
            <div className="grid_item" id="alisamento">
              <h1 className="grid_text_hover">Alisamento</h1>
            </div>
            <div className="grid_item" id="penteadosNoiva">
              <h1 className="grid_text_hover">Penteados de noiva</h1>
            </div>
            <div className="grid_item" id="madeixas">
              <h1 className="grid_text_hover">Madeixas</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Services;
