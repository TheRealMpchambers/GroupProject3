import React, { Component } from "react";
import "./PresetChoices.css";

class PresetChoices extends Component {
    render() {
        return (
            <div>
                <h6 className="grayText orText">-or-</h6>
                <h6 className="grayText">Select an option</h6>
                <div className="buttonDiv">
                    <div className="jumbotron buttontron" onClick={this.props.presetSubmit}>Men's restroom</div>
                    <div className="jumbotron buttontron" onClick={this.props.presetSubmit}>Women's restroom</div>
                    <div className="jumbotron buttontron" onClick={this.props.presetSubmit}>Vending machines</div>
                </div>
            </div>
        );
    }   
}

export default PresetChoices;