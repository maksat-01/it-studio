import React, {useEffect} from 'react';
import team from "../../assests/img/team.png"
import team2 from "../../assests/img/team2.png"
import team3 from "../../assests/img/team3.png"
import team5 from "../../assests/img/team5.png"
import {GrLinkedinOption} from "react-icons/gr"
import {AiFillInstagram} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import {gsap} from "gsap";

const OurTeam = () => {

    useEffect(() => {
        gsap.to('.our-team--general h1', {
            scrollTrigger: {
                trigger: ".our-team--general h1",
                start: "top end ",
                end: "40px",
                scrub: 3,
            },
            x:600,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')

    })

    return (
        <section id="our-team">
            <div className="our-team">
                <div className="our-team--general">
                    <h1>our team</h1>
                    <div className="our-team--general__title">
                        <div className="our-team--general__title--group">
                                <img src={team} alt="" className="our-team--general__title--group__image"/>
                            <div className="our-team--general__title--group__block">
                                <h2>Kanatbek Askerov</h2>
                                <h3>Founder</h3>
                                <div className="our-team--general__title--group__block--icons">
                                    <GrLinkedinOption className="our-team--general__title--group__block--icons__social"/>
                                    <AiFillInstagram className="our-team--general__title--group__block--icons__social"/>
                                    <SiGmail className="our-team--general__title--group__block--icons__social"/>
                                </div>
                            </div>
                        </div>
                        <div className="our-team--general__title--group">
                            <img src={team2} alt="" className="our-team--general__title--group__image"/>
                            <div className="our-team--general__title--group__block">
                                <h2>Mukeev Dastan</h2>
                                <h3>Founder</h3>
                                <div className="our-team--general__title--group__block--icons">
                                    <GrLinkedinOption className="our-team--general__title--group__block--icons__social"/>
                                    <AiFillInstagram className="our-team--general__title--group__block--icons__social"/>
                                    <SiGmail className="our-team--general__title--group__block--icons__social"/>
                                </div>
                            </div>
                        </div>
                        <div className="our-team--general__title--group">
                            <img src={team3} alt="" className="our-team--general__title--group__image"/>
                            <div className="our-team--general__title--group__block">
                                <h2>Zaiyrov Baktier</h2>
                                <h3>Founder</h3>
                                <div className="our-team--general__title--group__block--icons">
                                    <GrLinkedinOption className="our-team--general__title--group__block--icons__social"/>
                                    <AiFillInstagram className="our-team--general__title--group__block--icons__social"/>
                                    <SiGmail className="our-team--general__title--group__block--icons__social"/>
                                </div>
                            </div>
                        </div>
                        <div className="our-team--general__title--group">
                            <img src={team5} alt="" className="our-team--general__title--group__image"/>
                            <div className="our-team--general__title--group__block">
                                <h2>Kanatbek Askerov</h2>
                                <h3>Founder</h3>
                                <div className="our-team--general__title--group__block--icons">
                                    <GrLinkedinOption className="our-team--general__title--group__block--icons__social"/>
                                    <AiFillInstagram className="our-team--general__title--group__block--icons__social"/>
                                    <SiGmail className="our-team--general__title--group__block--icons__social"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurTeam;