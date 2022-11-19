import React, {useEffect} from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"
import gsap from "gsap";



const Hero = () => {

    return (
        <section id="hero">
            <div className="hero">
                <div className="hero--general">
                    <div className="hero--general__block"></div>
                        <h1>motion web it studio</h1>
                    <div className="hero--general__line"></div>
                    <div className="hero--general__title">
                        <p>We will develop a project for <br/>your business as if our own money <br/>and success are at stake.</p>
                        <button>Get consultation </button>
                        <AiOutlineArrowRight className="hero--general__title--next"/>
                    </div>
                </div>
                <div className="hero--circle"></div>
            </div>
        </section>
    );
};

export default Hero;