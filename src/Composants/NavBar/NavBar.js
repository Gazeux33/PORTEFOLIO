import React from 'react';
import useTheme from '../../useTheme'; // Assurez-vous que le chemin d'importation est correct
import "./NavBar.css";
import "./Toggle.css";

function NavBar() {
    const [themeState, toggleTheme] = useTheme();

    return (
        <header id="navbar">
            <h1>Theo Castillo</h1>
            <div className="right-side-nav">
                <div className="navbar-item-container">
                    <a href="#" className="nav-item hover">Home</a>
                    <a href="#" className="nav-item hover">About Me</a>
                    <a href="#" className="nav-item hover">My Projects</a>
                    <a href="#" className="nav-item hover">Contact Me</a>
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