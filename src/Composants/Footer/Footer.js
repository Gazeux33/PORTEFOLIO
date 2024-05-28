import React from "react";
import "./Footer.css";

import mail from "../../assets/icons/mail.svg"
import phone from "../../assets/icons/phone.svg"
import github from "../../assets/icons/github.svg"
import linkedin from "../../assets/icons/linkedin.svg"

function Footer() {
    return (
        <footer>
            <div className="left-container">
                <div className="contact-div">
                    <div className="icon">
                        <img src={mail} alt=""/>
                    </div>
                    <span style={{fontWeight:"bold"}}>theocastillo@yahoo.com</span>
                </div>
                <div className="contact-div">
                    <div className="icon">
                        <img src={phone} alt=""/>
                    </div>
                    <span style={{fontWeight:"bold"}}>06 16 18 38 92</span>
                </div>
            </div>

            <div style={{ display: "flex"}}>
                <a href="https://github.com/Gazeux33" target="_blank" rel="noopener noreferrer">
                    <div className="icon" style={{cursor: 'pointer'}}>
                        <img src={github} alt="GitHub"/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <div className="icon" style={{cursor: 'pointer'}}>
                        <img src={linkedin} alt="GitHub"/>
                    </div>
                </a>
            </div>

        </footer>
    );
}

export default Footer