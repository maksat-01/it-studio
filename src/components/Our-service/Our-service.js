import React, {useEffect} from 'react';
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const OurService = () => {

    useEffect(() => {

        gsap.to('.our-service--general__group--block', {
            scrollTrigger : {
                trigger: ".our-service--general__group--block",
                start: "top end",
                end: " 80px",
                scrub: 3,
            },
            y: 200,
            ease:"none",
            duration: 2,
            autoAlpha: 0,
        }, '-=4')
        gsap.to('.our-service--general__group--block2', {
            scrollTrigger : {
                trigger: ".our-service--general__group--block2",
                start: "top end",
                end: " 80px",
                scrub: 3,
            },
            y: 200,
            ease:"none",
            duration: 3,
            autoAlpha: 0,
        }, '-=4')
        gsap.to('.our-service--general__group--block3', {
            scrollTrigger : {
                trigger: ".our-service--general__group--block3",
                start: "top end",
                end: " 80px",
                scrub: 3,
            },
            y: 200,
            ease:"none",
            duration: 3,
            autoAlpha: 0,
        }, '-=4')
        gsap.to('.our-service--general__group--block4', {
            scrollTrigger : {
                trigger: ".our-service--general__group--block4",
                start: "top end",
                end: " 80px",
                scrub: 3,
            },
            y: 200,
            ease:"none",
            duration: 3,
            autoAlpha: 0,
        }, '-=4')
        gsap.to('.our-service--general h1', {
            scrollTrigger: {
                trigger: ".our-service--general h1",
                start: "center center ",
                end: "40px",
                scrub: 3,
            },
            x:500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')
        gsap.to('.our-service--general p', {
            scrollTrigger: {
                trigger: ".our-service--general p",
                start: "center center ",
                end: "40px",
                scrub: 3,
            },
            x:-500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')


        // gsap.from('.our-service--general__group--block', 1, {
        //     y: '15%',
        //     top: '10%',
        //     duration: .4,
        //     // transition: '.4s',
        //     autoAlpha: 0,
        //     ScrollTrigger: {
        //         trigger: ".our-service--general__group--block",
        //         pin: true,
        //         start: "top 30%",
        //         end: "center 20%",
        //         yPercent: -150,
        //         markers: true,
        //         duration:.4,
        //         smooth: 2,
        //         effects: true,
        //     }
        // })
    })

    return (
        <section id="our-service">
            <div className="our-service">
                <div className="our-service--general">
                    <h1>our service</h1>
                    <p>The <span>Motion Web</span> team constantly monitors <br/>the development and trends in the field
                        of
                        <br/>IT. We actively apply the latest technologies in <br/>practice.
                    </p>
                    <div className="our-service--general__group">
                        <div className="our-service--general__group--block"  >
                            <h2>E-Commerce</h2>
                            <div className="our-service--general__group--block__title">
                                <h3>E-commerce is an area of <br/>the digital economy, which <br/>includes all the
                                    financial and <br/>trading scales that arise <br/>with the help of computer <br/>networks,
                                    and the business <br/>processes associated with <br/>such transactions.</h3>
                                <div className="our-service--general__group--block__title--circle"></div>
                            </div>
                        </div>
                        <div className="our-service--general__group--block2">
                            <h2>E-Learning</h2>
                            <div className="our-service--general__group--block2__title2">
                                <h3>A Learning Management <br/>System – also known as an <br/>e-learning platform - is
                                    a <br/>cloud-based software <br/>package that enables <br/>enterprises to
                                    deliver <br/>learning
                                    content and <br/>resources to their <br/>employees. An e-learning <br/>platform is
                                    often web-and
                                    <br/>cloud-based to facilitate <br/>24/7 access to e-learning <br/>courses and
                                    relevant <br/>education.
                                </h3>
                                <div className="our-service--general__group--block2__title2--circle2"></div>
                            </div>
                        </div>
                        <div className="our-service--general__group--block3">
                            <h2>FINTECH</h2>

                            <div className="our-service--general__group--block__title">
                                <h3>E-commerce is an area of <br/>the digital economy, which <br/>includes all the
                                    financial and <br/>trading scales that arise <br/>with the help of computer <br/>networks,
                                    and the business <br/>processes associated with <br/>such transactions.</h3>
                                <div className="our-service--general__group--block__title--circle"></div>
                            </div>
                        </div>
                        <div className="our-service--general__group--block4">
                            <h2>Development</h2>
                            <div className="our-service--general__group--block__title">
                                <h3>E-commerce is an area of <br/>the digital economy, which <br/>includes all the
                                    financial and <br/>trading scales that arise <br/>with the help of computer <br/>networks,
                                    and the business <br/>processes associated with <br/>such transactions.</h3>
                                <div className="our-service--general__group--block__title--circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurService;