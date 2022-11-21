import React, {useEffect} from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"
import gsap from "gsap";



const Hero = () => {

    useEffect(() => {
        gsap.to('.hero--general h1', {
            scrollTrigger: {
                trigger: ".hero--general h1",
                start: "center center ",
                end: "40px",
                scrub: 3,
            },
            x:-500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')

        gsap.to('.hero--general__title p', {
            scrollTrigger: {
                trigger: ".hero--general__title p",
                start: "center center ",
                end: "40px",
                scrub: 3,
            },
            y:-500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')

        gsap.to('.hero--general__title button', {
            scrollTrigger: {
                trigger: ".hero--general__title button",
                start: "center center ",
                end: "40px",
                scrub: 3,
            },
            x: 1000,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')

        gsap.to('.hero--general__title--next', {
            scrollTrigger: {
                trigger: ".hero--general__title--next",
                start: "center center ",
                end: "40px",
                scrub: 3,
            },
            x:1500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')

        gsap.to('.hero--general__line', {
            scrollTrigger: {
                trigger: ".hero--general__line",
                start: "center center ",
                end: "40px",
                scrub: 3,
            },
            x:-500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')




    })

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