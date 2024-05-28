import React, { useEffect } from 'react';
import './App.css';
import NavBar from "./Composants/NavBar/NavBar";
import Home from "./Composants/Home/Home";
import Presentation from "./Composants/Presentation/Presentation";
import Skills from "./Composants/Skills/Skills";
import Projects from "./Composants/Projects/Projects";
import ContactMe from "./Composants/ContactMe/ContactMe";
import Footer from "./Composants/Footer/Footer";


function App() {


    return (
        <div className="App">
            <NavBar/>
            <main>
                <Home/>
                <Presentation/>
                <Skills/>
                <Projects/>
                <ContactMe/>


            </main>
        </div>
    );
}

export default App;