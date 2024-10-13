import React, { useRef } from 'react';
import "./Home.css";
import fileText from "../../assets/icons/file-text.svg";
import useTypingEffect from './useTypingEffect';
import ThreeDModel from "../ThreeDModel/ThreeDModel";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Home = () => {
    const words = ["Artificial Intelligence", "Deep Learning", "Machine Learning"];
    const wordElement = useRef(null);

    useTypingEffect(wordElement, words);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'CV-FR.pdf';
        link.download = 'theocastillo.pdf';
        link.click();
    };

    return (
        <div id="home-container">
            <div className="logo-container">
                <a href="https://github.com/Gazeux33" target="_blank" rel="noopener noreferrer">
                    <div className="icon" style={{cursor: 'pointer'}}>
                        <img  className="hover-bg item-logo" src={github} alt="GitHub"/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/theo-castillo-760606315" target="_blank" rel="noopener noreferrer" >
                    <div className="icon" style={{cursor: 'pointer'}}>
                        <img  className="hover-bg item-logo" src={linkedin} alt="GitHub"/>
                    </div>
                </a>
            </div>
            <div id="home-presentation-container">
                <h1>Hello I'm Theo</h1>
                <h2>Computer Science Student</h2>
                <div id="typewriter">
                    <span>Studying </span>
                    <span ref={wordElement} id="word"></span>
                    <span className="cursor">|</span>
                </div>
                <div className="home-button" onClick={handleDownload}>
                    <div>
                        <button className="link-button">Download CV</button>
                    </div>
                    <img src={fileText} alt=""/>
                </div>
            </div>
            <div className="threeD-container ">
                <ThreeDModel />
            </div>

        </div>
    );
};

export default Home;
