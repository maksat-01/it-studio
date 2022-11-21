import React, {useEffect} from 'react';
import python from "../../assests/img/pyton.svg"
import figma from "../../assests/img/figma.svg"
import {gsap} from "gsap";


const Tools = () => {

    useEffect(() => {
        gsap.to('.tools--general h1', {
            scrollTrigger: {
                trigger: ".tools--general h1",
                start: "top end ",
                end: "40px",
                scrub: 3,
            },
            x:500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')

        gsap.to('.tools--general__group--image', {
            scrollTrigger: {
                trigger: ".tools--general__group--image",
                start: "top end ",
                end: "40px",
                scrub: 3,
            },
            x:-500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')

        gsap.to('.tools--general__group--image2', {
            scrollTrigger: {
                trigger: ".tools--general__group--image2",
                start: "end end ",
                end: "80px",
                scrub: 3,
            },
            x:-500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')

        gsap.to('.tools--general__group--block__item--title', {
            scrollTrigger: {
                trigger: ".tools--general__group--block__item--title",
                start: "top end ",
                end: "40px",
                scrub: 3,
            },
            x:500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')


    })

    return (
        <section id="tools">
            <div className="tools">
                <div className="tools--general">
                    <h1>TECHNOLOGIES and TOOLS</h1>
                    <div className="tools--general__group">
                        <img src={python} alt="" className="tools--general__group--image"/>
                        <div className="tools--general__group--block">
                            <div className="tools--general__group--block__item">
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">

                                </div>
                                <div className="tools--general__group--block__item--title">
                                </div>
                            </div>
                            <img src={figma} alt="" className="tools--general__group--image2"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;