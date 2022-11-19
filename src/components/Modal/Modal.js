import React from 'react';
import {Link} from "react-router-dom";

const Modal = () => {
    return (
        <section id="modal">
            <div className="modal">
                <div className="modal--general">
                    <Link to="/" className="h1">
                        <h1>Back</h1>
                    </Link>
                    <div className="modal--general__group">
                        <div className="modal--general__group--group2">
                            <h2>Mobile/ <br/>Flutter <br/>developer</h2>
                            <div className="modal--general__group--group2__line">
                                <table border="1" bgcolor="#777777" >
                                    <tr>
                                    </tr>
                                </table>
                            </div>
                            <div className="modal--general__group--group2__title">
                                <h3>From <span>$1,500</span> per month</h3>
                                <h4>Preferred qualifications and requirements:</h4>
                                <p>Experience in programming applications supported by AWS services;</p>
                                <p>Knowledge of professional mobile or Web application development practices and <br/>best
                                    practices for the full software development life cycle, including coding <br/>standards, code
                                    reviews, source code management, build processes, testing and <br/>rollouts;</p>
                                <p>Sprint work skills, including evaluating and completing tasks in accordance <br/>with
                                    established schedules;
                                </p>
                                <p>Bachelor's degree in computer science, computer engineering or related technical
                                    <br/> disciplines;
                                </p>
                                <p>Computer science foundations in data structures, algorithm design, problem <br/>solving,
                                    complexity analysis, object-oriented design, and design patterns.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;