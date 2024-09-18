import React from "react";
import "./Hobbies.css";

import formula1 from "../../assets/pictures/hobbies/formule1.jpg"
import chess from "../../assets/pictures/hobbies/chess.jpg"


function Hobbies() {
    return (
        <div id="hobbies-container">
            <h1>Hobbies</h1>
            <div id="hobbies-cartes-container">
                <div className="carte-hobbies">
                    <img src={formula1} alt=""/>
                    <h2>Formula 1</h2>
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