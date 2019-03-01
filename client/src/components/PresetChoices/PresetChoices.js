import React from "react";
import "./PresetChoices.css";

function PresetChoices() {
    return (
        <div>
            <h6 className="grayText">-or-</h6>
            <h6 className="grayText">Select an option</h6>
            <div className="buttonDiv">
                <div className="jumbotron buttontron">Men's Restroom</div>
                <div className="jumbotron buttontron">Women's Restroom</div>
                <div className="jumbotron buttontron">Vending Machines</div>
            </div>
        </div>
    );
}

export default PresetChoices;