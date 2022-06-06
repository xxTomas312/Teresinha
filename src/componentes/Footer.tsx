import React from 'react'
import SmallerLogo from '../Img/smallLogo.jpeg'
import Facebook from '../Icons/facebook.png'
import Instagram from '../Icons/instagram.png'
import Whatsapp from '../Icons/whatsapp.png'
import Msgr from '../Icons/msgr.png'

export default function Footer() {
    return(
    <>
    <footer className="flex justify-center items-center w-full bg-[#241E20] h-52">
        <div className="flex flex-col justify-center items-center mb-3">
            <img src={SmallerLogo} className="w-32"/>
            <h1 className="text-white" >Local Hairdresser</h1>
            {/* Social Media Container*/}
            <section className="flex mt-2">
                {/* Facebook Icon */}
                <a href="https://www.facebook.com/Sal%C3%A3o-de-Cabeleireira-Terezinha-101560624919091/"className="icon_container">
                    <img src={Facebook} className="footer_icons"/>
                </a>
                {/* Instagram Icon */}
                <a href="https://www.instagram.com/ritual_terezinha/"className="icon_container">
                    <img src={Instagram} className="footer_icons"/>
                </a>
                {/* Msgr Icon */}
                <a className="icon_container">
                    <img src={Msgr} className="footer_icons"/>
                </a>
                {/* WhatsApp Icon */}
                <a className="icon_container">
                    <img src={Whatsapp} className="footer_icons"/>
                </a>
            </section>
        </div>
    </footer>
    </>) 
}

const style = {
    fontWeight: '600'
}

