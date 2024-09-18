import React from 'react';
import "./Skills.css";
import python from "../../assets/pictures/skills/python.png"
import apple from "../../assets/pictures/skills/apple.png"
import aws from "../../assets/pictures/skills/aws.png"
import csharp from "../../assets/pictures/skills/csharp.png"
import cpp from "../../assets/pictures/skills/c++.png"
import css from "../../assets/pictures/skills/css-3.png"
import django from "../../assets/pictures/skills/django.png"
import git from "../../assets/pictures/skills/git.png"
import github from "../../assets/pictures/skills/github.png"
import html_logo from "../../assets/pictures/skills/html-5.png"
import java from "../../assets/pictures/skills/java.png"
import jetbrain from "../../assets/pictures/skills/jetbrain.png"
import js from "../../assets/pictures/skills/js.png"
import mathplt from "../../assets/pictures/skills/mathplt.png"
import pytorch from "../../assets/pictures/skills/pytorch.png"
import react from "../../assets/pictures/skills/react.png"
import tf from "../../assets/pictures/skills/tf.png"
import ubuntu from "../../assets/pictures/skills/ubuntu.png"
import vs from "../../assets/pictures/skills/vs.png"
import numpy from "../../assets/pictures/skills/numpy.png"
import sql from "../../assets/pictures/skills/sql.png"
import haskell from "../../assets/pictures/skills/haskell.png"



const Skills = () => {
    return (
        <div id="skills-global-container">
            <h1>Skills</h1>
            <div id="skills-container">
                <div className="skills-section">
                    <h2>Languages</h2>
                    <div className="skills-icons-container">
                        <div className="skill-icon">
                            <img src={python} className="icon" alt="python"/>
                            Python
                        </div>
                        <div className="skill-icon">
                            <img src={java} className="icon" alt="java"/>
                            Java
                        </div>
                        <div className="skill-icon">
                            <img src={html_logo} className="icon" alt="html"/>
                            Html
                        </div>
                        <div className="skill-icon">
                            <img src={css} className="icon" alt="css"/>
                            Css
                        </div>
                        <div className="skill-icon">
                            <img src={js} className="icon" alt="js"/>
                            Javascript
                        </div>
                        <div className="skill-icon">
                            <img src={haskell} className="icon" alt="js"/>
                            Haskell
                        </div>
                        <div className="skill-icon">
                            <img src={cpp} className="icon" alt="c++"/>
                            C++
                        </div>
                        <div className="skill-icon">
                            <img src={csharp} className="icon" alt="c#"/>
                            C#
                        </div>
                    </div>
                </div>
                <div className="skills-section">
                    <h2>Technologies</h2>
                    <div className="skills-icons-container">
                        <div className="skill-icon">
                            <img src={tf} className="icon" alt="tf"/>
                            TensorFlow
                        </div>
                        <div className="skill-icon">
                            <img
                                src={pytorch}
                                className="icon"
                                alt="pytorch"
                            />
                            PyTorch
                        </div>
                        <div className="skill-icon">
                            <img src={github} className="icon" alt="github"/>
                            GitHub
                        </div>
                        <div className="skill-icon">
                            <img src={react} className="icon" alt="react"/>
                            React
                        </div>
                        <div className="skill-icon">
                            <img src={numpy} className="icon" alt="numpy"/>
                            numpy
                        </div>
                        <div className="skill-icon">
                            <img src={mathplt} className="icon" alt="mathplt"/>
                            Matplotlib
                        </div>
                        <div className="skill-icon">
                            <img src={git} className="icon" alt="git"/>
                            Git
                        </div>
                        <div className="skill-icon">
                            <img src={aws} className="icon" alt="aws"/>
                            AWS
                        </div>
                        <div className="skill-icon">
                            <img src={django} className="icon" alt="django"/>
                            Django
                        </div>
                        <div className="skill-icon">
                            <img src={sql} className="icon" alt="sql"/>
                            Sql
                        </div>
                    </div>
                </div>
                <div className="skills-section">
                    <h2>How I work</h2>
                    <div className="skills-icons-container">
                        <div className="skill-icon">
                            <img src={jetbrain} className="icon" alt="jetbrain"/>
                            JetBrain
                        </div>
                        <div className="skill-icon">
                            <img src={vs} className="icon" alt="vscode"/>
                            VScode
                        </div>
                        <div className="skill-icon">
                            <img src={github} className="icon" alt="github"/>
                            Github
                        </div>
                        <div className="skill-icon">
                            <img src={ubuntu} className="icon" alt="ubuntu"/>
                            Ubuntu
                        </div>
                        <div className="skill-icon">
                            <img src={apple} className="icon" alt="apple"/>
                            MacOs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;