import React from "react";
import "./Hobbies.css";

import formule1 from "../../assets/pictures/hobbies/formule1.jpg"
import chess from "../../assets/pictures/hobbies/chess.jpg"


function Hobbies() {
    return (
        <div id="hobbies-container">
            <h1> My Hobbies</h1>
            <div id="hobbies-cartes-container">
                <div className="carte-hobbies">
                    <img src={formule1} alt=""/>
                    <h2>Formule 1</h2>
                </div>
                <div className="carte-hobbies">
                    <img src={chess} alt=""/>
                    <h2>Chess</h2>

                </div>

            </div>
        </div>
    );
}

export default Hobbies