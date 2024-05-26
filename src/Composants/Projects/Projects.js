import React from 'react';
import "./Projects.css";
import Carte from "../Carte/Carte";
import projects from "../../projects.json"


const Projects = () => {
    return (
        <div id="projects-global-container">
            <h1>My Projects</h1>
            <div id="projects-container">
                {projects.map((project, index) => (
                    <Carte key={index} project={project} />
                ))}
            </div>



        </div>
    );
};
export default Projects;