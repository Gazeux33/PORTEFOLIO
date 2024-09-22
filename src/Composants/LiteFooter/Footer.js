import React from "react";
import "./Footer.css";

import mail from "../../assets/icons/mail.svg"
import github from "../../assets/icons/github.svg"
import linkedin from "../../assets/icons/linkedin.svg"
import phone from "../../assets/icons/phone.svg"

function Footer() {
    return (
        <footer id="footer">
            <h1>Contact Me</h1>
            <div id="contact">
                <a href="mailto:theocastillo@yahoo.com">
                    <div className="contact_info" >
                        <div>
                            <a href="https://github.com/Gazeux33" target="_blank" rel="noopener noreferrer">
                                <div className="icon" style={{cursor: 'pointer'}}>
                                    <img className="hover-bg" src={mail} alt="GitHub"/>
                                </div>
                            </a>
                        </div>
                        <div>
                            <h3 className="contact_title">Email</h3>
                            <span className="contact_subtitle">theocastillo@yahoo.com</span>
                        </div>
                    </div>
                </a>


                <a href="mailto:theocastillo@yahoo.com">
                    <div className="contact_info">
                        <div>
                            <a href="https://github.com/Gazeux33" target="_blank" rel="noopener noreferrer">
                                <div className="icon" style={{cursor: 'pointer'}}>
                                    <img className="hover-bg" src={github} alt="GitHub"/>
                                </div>
                            </a>
                        </div>
                        <div>
                            <h3 className="contact_title">GitHub</h3>
                            <span className="contact_subtitle">Gazeux33</span>
                        </div>
                    </div>
                </a>


                <a href="mailto:theocastillo@yahoo.com">
                    <div className="contact_info">
                        <div>
                            <a href="https://github.com/Gazeux33" target="_blank" rel="noopener noreferrer">
                                <div className="icon" style={{cursor: 'pointer'}}>
                                    <img className="hover-bg" src={linkedin} alt="GitHub"/>
                                </div>
                            </a>
                        </div>
                        <div>
                            <h3 className="contact_title">Linkedin</h3>
                            <span className="contact_subtitle">Theo Castillo</span>
                        </div>
                    </div>
                </a>


                <a href="mailto:theocastillo@yahoo.com">
                    <div className="contact_info">
                        <div>
                            <a href="https://github.com/Gazeux33" target="_blank" rel="noopener noreferrer">
                                <div className="icon" style={{cursor: 'pointer'}}>
                                    <img className="hover-bg" src={phone} alt="GitHub"/>
                                </div>
                            </a>
                        </div>
                        <div>
                            <h3 className="contact_title">Phone</h3>
                            <span className="contact_subtitle">(+33) 616183892</span>
                        </div>
                    </div>
                </a>


            </div>

        </footer>
    );
}

export default Footer