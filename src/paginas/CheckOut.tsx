import React from 'react'

function CheckOut(){
    return(
        <>
     {/*Main Container*/}
    <section className="block  w-full h-auto">   
         {/*Inner Main Conteiner*/}
        <div className="flex w-4/6">
            <div className="block w-full h-auto ml-8 mb-8">
                 {/*Title Sign Up*/}
                <h1 className="text-4xl ml-4 mt-8">Sign Up</h1>
                 {/*1º block element (login option)*/}
                <div className="mt-8 border-2 border-black w-auto h-auto mb-8">
                    <h1 className=" mt-4 text-3xl ml-4">Login</h1>
                    <hr className="ml-4 mr-4 mt-2 mb-2"></hr>   
                    <p className="ml-4 w-auto">Returning Customer?</p>
                    <p className="flex ml-4 mt-1 w-auto mb-8">Click<a className="ml-1 mr-1 underline text-black hover:text-red-600" href="">here</a> to sign. </p>
                </div>
                 {/*2º block element (creat acount*/}
                <h1 className="text-4xl ml-4 mt-8 mb-6">Creat Acount</h1>
                <div className="block border-2 border-black w-full h-80">
                     {/*Email*/}
                    <p className="ml-4 mt-4 mb-2">*Enter your Email Address</p>
                    <input className="border-2 border-black w-3/4 h-8 ml-4 mb-4"></input>
                    {/*Password*/}
                    <p className="ml-4 mt-4 mb-2">*Create a Password</p>
                    <input className="border-2 border-black w-3/4 h-8 ml-4 mb-4"></input>
                    {/*Privacy Statement*/}
                    <div className="flex">
                        <div className="bg-white ml-4 mb-4 w-4 h-4 border-2 border-black active:bg-black "></div><p className="text-xs ml-2 w-auto">I agree to the Terms Of Use and Privacy Statement</p>
                    </div>
                    <br></br>
                    {/*Button Container*/}
                    <div className="flex">
                        <button className="ml-8 mb-8 w-1/4 justify-center h-8 justify-left bg-sky-500 text-white hover:bg-sky-500/50">Creat Your Acount</button>
                    </div>
                </div>
                {/*Title Shipping Adress*/}
                <h2 className="text-4xl ml-4 mt-8">Shipping Address</h2>
                {/*3º block element (shipping Adress*/}
                <div className="mt-8 border-2 border-black h-auto">
                    {/*Country input*/}
                    <p className="ml-4 mt-4 mb-2 ">Country</p>
                    <input className="list border-2 border-black w-1/4 h-8 ml-4 mb-4"></input>
                    {/*Name input*/}
                    <p className="ml-4 mt-4 mb-2 ">Full Name (First and last name)</p>
                    <input className="list border-2 border-black w-3/5 h-8 ml-4 mb-4"></input>
                    {/*Adress 1 input*/}
                    <p className="ml-4 mt-4 mb-2 ">Adress Line 1</p>
                    <input className="list border-2 border-black w-3/4 h-8 ml-4 mb-4"></input>
                    {/*Adress 2 input*/}
                    <p className="ml-4 mt-4 mb-2 ">Adress Line 2</p>
                    <input className="list border-2 border-black w-3/4 h-8 ml-4 "></input>
                    {/*Flex Container*/}
                    <div className="flex mt-4">
                        {/*City 2 input*/}
                        <div className="block">   
                            <p className="ml-4 mt-4 mb-2 ">City</p>
                            <input className="list border-2 border-black w-4/5 h-8 ml-4 mb-4"></input>
                        </div>
                        {/*Adress 2 input*/}
                        <div className="block">
                            <p className="ml-4 mt-4 mb-2 ">Locality</p>
                            <input className="list border-2 border-black w-4/5 h-8 ml-4 mb-4"></input>
                        </div>
                        {/*Zip input*/}
                        <div className="block">
                            <p className="ml-4 mt-4 mb-2 ">Zip</p>
                            <input className="list border-2 border-black w-4/5 h-8 ml-4 mb-4"></input>
                        </div>
                    </div>
                    {/*Phone Number input*/}
                    <p className="ml-4 mt-4 mb-2 ">Phone Number</p>
                    <input className="list border-2 border-black w-2/5 h-8 ml-4 mb-12"></input>
                </div>
            </div>
            {/*Order Summary - fixed*/}
            <div className="fixed right-0 mr-32 mb-8 mt-8 w-1/5 h-auto">
                 {/*Title*/}
                <h1 className="text-2xl ml-4 mb-4">Order Summary ( x Item)</h1>
                <div className="block p-6 w-full h-1/2 border-2 border-black">
                    <div className="flex justify-between  w-full h-6"><h4>Subtotal</h4><h4>$</h4></div><br></br>
                    <div className="flex justify-between  w-full h-6"><h4>Shipping & Handling</h4><h4>FREE</h4></div><br></br>
                    <div className="flex justify-between  w-full h-6"><h4>Tax</h4><h4>$</h4></div><br></br>       
                    <hr></hr><br></br>
                    <div className="flex justify-between  w-full h-6"><h2>Total</h2><h2>$</h2></div><br></br>
                     {/*Button to ThankYou Page*/}
                    <div className="flex jsutify-center items-center">
                        <a href="thankyou.html" className="flex justify-center items-center mb-4 w-full h-8  bg-sky-500 text-white hover:bg-sky-500/50">Place Order</a><br></br>
                    </div>
                    <h6 className="text-xs">By tapping Place Order, you agree to GameStop <a>Privacy Policy</a> and <a>Conditions of Use.</a></h6><br></br>
                    <hr></hr>
                    <br></br>
                    <h3>Cart</h3>
                </div>
            </div>
        </div>
    </section>    
        </>
    );
}

export default CheckOut;