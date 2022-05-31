import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home(){
    return(
        <>
        <section className="text-center w-full h-screen border-2 border-black">
                <h1 className='mt-8 mb-8 text-3xl t'>True Hard Work Always Pays Off</h1>
                {/*Img Container*/}
                <section className="flex h-4/6 w-full border-2 border-black">
                    <img className=""></img>
                    <img src="" alt=""/>
                    <div className="items-center w-2/6 border-2 border-black">
                        <div className="flex flex-col justify-between align-center">
                            <h1 className="text-4xl w-1/2">Natural Products</h1>
                            <h1 className="text-4xl">Stronger Hair</h1>
                            <Link className="flex text-2xl justify-center items-center underline decoration-1 w-32 border-2" to="/Store">Store</Link>
                        </div>
                    </div>
                </section>
        </section>
        
        </>
    );
  }
export default Home;