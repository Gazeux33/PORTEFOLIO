import React from 'react';
import useTheme from '../../useTheme'; // Assurez-vous que le chemin d'importation est correct
import "./NavBar.css";
import "./Toggle.css";

function NavBar() {
    const [themeState, toggleTheme] = useTheme();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header id="navbar">
            <h1>Theo Castillo</h1>
            <div className="right-side-nav">
                <div className="navbar-item-container">
                    <a href="#home-container" className="nav-item hover"
                       onClick={() => scrollToSection('home-container')}>Home</a>
                    <a href="#about-me-container" className="nav-item hover"
                       onClick={() => scrollToSection('about-me-container')}>About Me</a>

                    <a href="#projects-global-container" className="nav-item hover"
                       onClick={() => scrollToSection('projects-global-container')}>Projects</a>
                    <a href="#hobbies-container" className="nav-item hover"
                       onClick={() => scrollToSection('hobbies-container')}>Hobbies</a>
                    <a href="#footer" className="nav-item hover" onClick={() => scrollToSection('footer')}>Contact
                        Me</a>
                </div>
                <label className="ui-switch">
                    <input
                        type="checkbox"
                        id="theme-toggle-input"
                        onChange={toggleTheme}
                        checked={themeState === "light"}
                    />
                    <div className="slider">
                        <div className="circle"></div>
                    </div>
                </label>
            </div>
        </header>
    );
}

export default NavBar;