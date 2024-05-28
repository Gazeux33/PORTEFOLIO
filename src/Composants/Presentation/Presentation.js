import React, { useRef, useEffect } from 'react';
import "./Presentation.css";
import sendMessage from "../../assets/icons/send-message.svg";
import theo from "../../assets/pictures/theo.jpeg";
import simpleParallax from 'simple-parallax-js';
import fileText from "../../assets/icons/file-text.svg";

function Presentation() {
    const imageRef = useRef(null);

    useEffect(() => {
        if (imageRef.current) {
            new simpleParallax(imageRef.current, {
                delay: 0.6,
                transition: 'cubic-bezier(0,0,0,1)',
                scale: 1.5
            });
        }
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="about-me-container">
            <h1>About Me</h1>
            <div id="carte-presentation">
                <div id="img-container">
                    <img src={theo} className="para-img" ref={imageRef} alt="theo at gp"/>
                </div>
                <div id="texte-container">
                    <p>
                        My name is Theo, I'm 18 and I'm studying computer science at the
                        Gradignan Institute in Bordeaux. I've been passionate for a few
                        years now. I started learning on my own in high school and then
                        made it my career. Today I'm particularly interested in artificial
                        intelligence in the global sense.
                    </p>
                    <div className="home-button" onClick={() => scrollToSection('contact-me-container')}>
                        <a href="#" onClick={(e) => e.preventDefault()}>Contact Me</a>
                        <img src={sendMessage} alt="" onClick={(e) => { e.stopPropagation(); scrollToSection('contact-me-container'); }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;