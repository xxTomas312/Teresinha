import React, {useState} from "react";
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer'

function Review(){
    const [opinion, setOpinion] = useState<string>('')
    const [allOpinions, setAllOpinions] = useState<any>([])

    function addOpinion(){
        setAllOpinions([...allOpinions, opinion])
        setOpinion('')
    }

    return(
        <>
        <Nav paginaAtual="/Review"></Nav>
        <section className="review_body">
           <section className="review_MainContainer">
                <section className="review_Container_1">
                    <h1 className="titulos">Write your Opinion</h1>
                    <input placeholder="Name" className="border-2 border-black w-4/5 h-16     mb-8 pl-2" onChange={(e) => setOpinion(e.target.value)}></input>
                    <textarea placeholder="Message"className="border-2 border-black w-4/5 h-64 mb-8 pl-2" onChange={(e) => setOpinion(e.target.value)}></textarea>
                    <button className="mb-8 w-52" onClick={()=> addOpinion()}>Submit</button>
               </section>    
               <section className="review_Container_2">
                <h1 className="titulos">Clients Opinion</h1>
                <section className="post_container">
                        <div className="test">
                            {allOpinions.map((opinion:string, index : any) => (
                                <div className="flex justify-center border-2 border-black p-8 m-4">
                                    <h3 key={index}>{opinion}</h3>
                                </div>
                            ))}
                        </div>
                </section>
               </section>
           </section>
        </section>
        <Footer></Footer>
        </>
    )
}

export default Review;