import React from 'react';
import python from "../../assests/img/pyton.svg"
import figma from "../../assests/img/figma.svg"


const Tools = () => {
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