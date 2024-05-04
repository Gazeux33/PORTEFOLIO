import React from 'react';
import "./Carte.css";

const Carte = ({ project }) => {
    const imageSrc = require(`../../pictures/${project.image}`)

    return (
        <div className="card-container">
            <a href="/" className="hero-image-container">
                <img className="hero-image" src={imageSrc.default || imageSrc}
                     alt={`Project titled: ${project.title}`} />
            </a>
            <main className="main-content">
                <h1><a href="#">{project.title}</a></h1>
                <p>{project.description}</p>
            </main>
            <div className="card-attribute">
                <p>{project.date}</p>
            </div>
        </div>
    );
};

export default Carte;