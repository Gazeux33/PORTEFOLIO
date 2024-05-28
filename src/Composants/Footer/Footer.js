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
                <div className="icon">
                    <img src={github} alt=""/>
                </div>
                <div className="icon">
                    <img src={linkedin} alt=""/>
                </div>
            </div>

        </footer>
    );
}

export default Footer