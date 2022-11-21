import projects from "../../assests/img/projects.png"
import projects2 from "../../assests/img/projects2.png"
import projects3 from "../../assests/img/projects3.png"
import projects4 from "../../assests/img/projects4.png"
import projects5 from "../../assests/img/projects5.png"
import projects6 from "../../assests/img/projects6.png"
import projects7 from "../../assests/img/projects7.png"
import scroll from "../../assests/img/scroll.svg"
import {useEffect} from "react";
import {gsap} from "gsap";


const OurProjects = () => {

    useEffect(() => {
        gsap.to('.our-projects--general h1', {
            scrollTrigger: {
                trigger: ".our-projects--general h1",
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
        <section id="our-projects">
            <div className="our-projects ">
                <div className="our-projects--general">
                    <h1>our projects</h1>
                    <div className="our-projects--general__block">
                        <div className="our-projects--general__block--image">
                            <img src={projects} alt=""/>
                            <img src={projects2} alt=""/>
                            <img src={projects3} alt=""/>
                            <img src={projects4} alt=""/>
                            <img src={projects5} alt=""/>
                            <img src={projects6} alt=""/>
                            <img src={projects7} alt=""/>
                            <div className="our-projects--general__block--image__scroll">
                                <h2>keep scrolling</h2>
                                <img src={scroll} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProjects;