import React from "react";
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer'


function Blog(){
    return(
        <>
        <Nav paginaAtual="/Contact"></Nav>
        <body className="border-t-2 border-black flex justify-center items-center ">
           <section className="blog_container">
               <div>
                   <h1 className="mt-8 mb-4 text-4xl">Write your Opinion</h1>
               </div>
               <textarea placeholder="Message"className="border-2 border-black w-4/5 h-52 mb-8 pl-2"></textarea>
               <button className="mb-8 w-52 h-24">Submit</button>
               <h1 className="text-4xl mt-8 mb-4">Clients Opinion</h1>
               <section className="post_container"></section>
           </section>
        </body>
        <Footer></Footer>
        </>
    )
}

export default Blog;