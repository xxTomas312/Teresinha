import React, { useState } from 'react';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';
import '../css/Review.css';
import { OpenDirOptions } from 'fs';

interface OpinionModel {
  name: string;
  message: string;
}

function Review() {
  const [opinion, setOpinion] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [allOpinions, setAllOpinions] = useState<OpinionModel[]>([]);

  function addOpinion() {
    let x = { name: name, message: opinion };
    setOpinion('');
    setAllOpinions([...allOpinions, x]);
  }

  return (
    <>
      <Nav paginaAtual="/Review"></Nav>
      <section className="review_body">
        <section className="review_MainContainer">
          <section className="review_Container_1">
            <h1 className="titulos">Write your Opinion</h1>
            <input
              placeholder="Name"
              className="border-2 border-black w-4/5 h-16 mb-8 pl-2"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <textarea
              placeholder="Message"
              className="border-2 border-black w-4/5 h-64 mb-8 pl-2"
              onChange={(e) => setOpinion(e.target.value)}
            ></textarea>
            <button className="mb-8 w-52" onClick={() => addOpinion()}>
              Submit
            </button>
          </section>

          <section className="review_Container_2">
            <h1 className="titulos">Clients Opinion</h1>
            <section className="post_container">
              <div className="test">
                {allOpinions.map((opinionModel: OpinionModel) => (
                  <div className="review_box">
                    <h1 className="review_name">{opinionModel.name}</h1>
                    <h2 className="review_message">{opinionModel.message}</h2>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </section>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Review;
