import React from 'react';
import {FaTelegramPlane} from "react-icons/fa"
import {RiLinkedinFill} from "react-icons/ri"
import {AiFillInstagram} from "react-icons/ai"
import {IoLogoWhatsapp} from "react-icons/io"
import {SiGmail} from "react-icons/si"
import {BsFillTelephoneFill} from "react-icons/bs"

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact">
                <div className="contact--general">
                    <h1>contacts</h1>
                    <div className="contact--general__group">
                        <div className="contact--general__group--title">
                            <div className="contact--general__group--title__icons">
                                <FaTelegramPlane className="contact--general__group--title__icons--icon"/>
                                <h2>thedastan_official</h2>
                            </div>
                            <div className="contact--general__group--title__icons">
                                <RiLinkedinFill className="contact--general__group--title__icons--icon"/>
                                <h2>motion-web</h2>
                            </div>
                            <div className="contact--general__group--title__icons">
                                <AiFillInstagram className="contact--general__group--title__icons--icon"/>
                                <h2>motionweb.io</h2>
                            </div>
                            <div className="contact--general__group--title__icons">
                                <IoLogoWhatsapp className="contact--general__group--title__icons--icon"/>
                                <h2>motion-web</h2>
                            </div>
                            <div className="contact--general__group--title__icons">
                                <SiGmail className="contact--general__group--title__icons--icon"/>
                                <h2>motionwebteam@gmail.com</h2>
                            </div>
                            <div className="contact--general__group--title__icons">
                                <BsFillTelephoneFill className="contact--general__group--title__icons--icon"/>
                                <h2>+996 559-69-26-26</h2>
                            </div>
                        </div>
                        <iframe width="580" height="520" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=motion%20web&t=k&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;