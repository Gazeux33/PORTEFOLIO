import React, { useRef } from 'react';
import "./Home.css";
import fileText from "../../assets/icons/file-text.svg";
import useTypingEffect from './useTypingEffect';
import ThreeDModel from "../ThreeDModel/ThreeDModel";

const Home = () => {
    const words = ["Artificial Intelligence", "Deep Learning", "Machine Learning"];
    const wordElement = useRef(null);

    useTypingEffect(wordElement, words);

    return (
        <div id="home-container">
            <div id="home-presentation-container">
                <h1>Hello I'm Theo</h1>
                <h2>Computer Science Student</h2>
                <div id="typewriter">
                    <span>Studying </span>
                    <span ref={wordElement} id="word"></span>
                    <span className="cursor">|</span>
                </div>
                <div className="home-button">
                    <a href="#">Download CV</a>
                    <img src={fileText} alt=""/>
                </div>
            </div>
            <ThreeDModel/>
        </div>
    );
};

export default Home;