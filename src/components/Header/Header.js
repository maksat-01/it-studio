import React, {useEffect} from 'react';
import logo from "../../assests/img/logo.svg"
import {AiFillInstagram} from "react-icons/ai"
import {RiLinkedinFill} from "react-icons/ri"
import {FaTelegramPlane} from "react-icons/fa"
import {IoLogoWhatsapp} from "react-icons/io"
import gsap from "gsap";

const Header = () => {

    useEffect(() => {
        gsap.to('.header--general', {
            scrollTrigger: {
                trigger: ".header--general",
                start: "top end ",
                end: "40px",
                scrub: 2,
            },
            y:-500,
            ease: "none",
            duration:2,
            autoAlpha: 0,
        }, '-=4')

    })

    return (
        <header id="header">
            <div className="header">
                <div className="header--general">
                    <img src={logo} alt=""/>
                    <div className="header--general__icons">
                        <AiFillInstagram className="header--general__icons--ai"/>
                        <RiLinkedinFill className="header--general__icons--ai"/>
                        <FaTelegramPlane className="header--general__icons--ai"/>
                        <IoLogoWhatsapp className="header--general__icons--ai"/>
                    </div>
                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox"/>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                        <ul className="menu__box">
                            <li><a className="menu__item" href="#">Главная</a></li>
                            <li><a className="menu__item" href="#">Проекты</a></li>
                            <li><a className="menu__item" href="#">Команда</a></li>
                            <li><a className="menu__item" href="#">Блог</a></li>
                            <li><a className="menu__item" href="#">Контакты</a></li>
                            <div className="header--general__icons">
                                <AiFillInstagram className="header--general__icons--ai"/>
                                <RiLinkedinFill className="header--general__icons--ai"/>
                                <FaTelegramPlane className="header--general__icons--ai"/>
                                <IoLogoWhatsapp className="header--general__icons--ai"/>
                            </div>

                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;