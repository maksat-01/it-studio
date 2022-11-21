import React, {useRef} from 'react';
import Hero from "../Hero/Hero";
import OurService from "../Our-service/Our-service";
import OurProjects from "../OurProjects/OurProjects";
import OurTeam from "../OurTeam/OurTeam";
import Tools from "../Tools/Tools";
import Vacancies from "../Vacancies/Vacancies";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


const Home = () => {

    return (
        <div className="scroll">
            <Hero/>
            <OurService/>
            <OurProjects/>
            <OurTeam/>
            <Tools/>
            <Vacancies/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;