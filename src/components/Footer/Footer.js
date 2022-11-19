import React from 'react';
import web from "../../assests/img/web.svg"
import web2 from "../../assests/img/web2.svg"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer">
                <div className="footer--general">
                    <div className="footer--general__group">
                        <div className="footer--general__group--block">
                            <div className="footer--general__group--block__words">
                                <h1>Form
                                    <br/>us
                                    <br/>about
                                    <br/>your project</h1>
                            </div>
                            <div className="footer--general__group--block__image">
                                <img src={web} alt=""/>
                            </div>
                        </div>
                        <div className="footer--general__group--title">
                            <div className="footer--general__group--title__web">
                                <div className="footer--general__group--title__web--item">
                                    <div className="footer--general__group--title__web--item__input">
                                        <h2>Full name:</h2>
                                        <div className="footer--general__group--title__web--item__input--line">
                                            <input type="name"/>
                                            <table border="1" bgcolor="#5B5B5B" width="417">
                                                <tr>
                                                </tr>

                                            </table>
                                        </div>

                                    </div>
                                    <div className="footer--general__group--title__web--item__input">
                                        <h2>Phone number:</h2>
                                        <div className="footer--general__group--title__web--item__input--line">
                                            <input type="number"/>
                                            <table border="1" bgcolor="#5B5B5B" width="417">
                                                <tr>
                                                </tr>

                                            </table>
                                        </div>

                                    </div>
                                    <div className="footer--general__group--title__web--item__input">
                                        <h2>Your massage</h2>
                                        <div className="footer--general__group--title__web--item__input--line">
                                            <input type="name"/>
                                            <table border="1" bgcolor="#5B5B5B" width="417">
                                                <tr>
                                                </tr>

                                            </table>
                                        </div>

                                    </div>
                                    <div className="footer--general__group--title__web--item__btn">
                                        <button>Submit</button>
                                    </div>
                                    <div className="footer--general__group--title__web--item__p">
                                        <p>© Copyright "Motion Web LLC" 2022</p>
                                    </div>
                                </div>
                                <img src={web2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;