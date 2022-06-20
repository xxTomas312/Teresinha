import React from 'react';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import Img1 from '../Img/brushingOndas.jpeg';
import Img2 from '../Img/brushingSteampod.jpeg';
import Img3 from '../Img/CalifornianasOmbré.jpeg';
import Img4 from '../Img/cortehomem.jpeg';
import Img5 from '../Img/corteMulher.jpeg';

function Services() {
  return (
    <>
      <Nav paginaAtual="/Services"></Nav>
      <section className="services_body">
        <div className="grid_container">
          <div className="grid_item">
            <img src={Img1} className="grid_img_1" />
          </div>
          <div className="grid_item">
            <img src={Img2} className="grid_img_2" />
          </div>
          <div className="grid_item">
            <img src={Img3} className="grid_img_3" />
          </div>
          <div className="grid_item">
            <img src={Img4} className="grid_img_4" />
          </div>
          <div className="grid_item">
            <img src={Img5} className="grid_img_5" />
          </div>
          <div className="grid_item">
            <img src="" className="grid_img_6" />
          </div>
          <div className="grid_item">
            <img src="" className="grid_img_7" />
          </div>
          <div className="grid_item">
            <img src="" className="grid_img_8" />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Services;
