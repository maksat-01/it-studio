import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {gsap} from "gsap";

const Vacancies = () => {

    useEffect(() => {
        gsap.to('.vacancies--general h1', {
            scrollTrigger: {
                trigger: ".vacancies--general h1",
                start: "bottom end",
                end: "1900px",
                scrub: 3,
            },
            y:-500,
            ease: "none",
            duration:3,
            autoAlpha: 0,
        }, '-=4')



    })

    return (
        <section id="vacancies">
            <div className="vacancies">
                <div className="vacancies--general">
                    <h1>open vacancies</h1>
                    <div className="vacancies--general__group">
                        <div className="vacancies--general__group--title">
                            <table border="1" color="white" width="750">
                                <tr></tr>
                            </table>
                            <div className="vacancies--general__group--title__block">
                                <h2>Mobile/Flutter developer</h2>
                                <Link to="/Modal">Actual</Link>
                            </div>
                            <table border="1" color="white" width="750">
                                <tr></tr>
                            </table>
                            <div className="vacancies--general__group--title__block">
                                <h2>Mobile/Flutter developer</h2>
                                <Link to="/Modal">Actual</Link>
                            </div>
                            <table border="1" color="white" width="750">
                                <tr></tr>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vacancies;