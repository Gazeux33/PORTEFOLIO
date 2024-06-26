import React from 'react';
import "./Carte.css";

const Carte = ({ project }) => {
    const imageSrc = require(`../../assets/pictures/projects/${project.image}`)

    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="carte">
                <img src={imageSrc} alt={project.title} width="60%"/>
                <h2>{project.title}</h2>
                <br/>
                <p>{project.description}</p>
            </div>
        </a>

    );
};

export default Carte;