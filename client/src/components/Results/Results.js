import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

import "./Results.css";


class Results extends Component {

    render () {
        return(
            <div>
                <h6 className="grayText textTitle">Direction Options</h6>
                <div className="jumbotron resultsDropdown directionDropdown" data-toggle="collapse" data-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">
                    <img src="https://i.imgur.com/nmGAup1.png" className="arrow arrow1" alt="arrow"/>Map to Destination
                    <div className="mapDiv collapse multi-collapse" id="multiCollapseExample1">
                    <img className="mapImg" src={this.props.map} alt="map"/>
                    </div>
                </div> 
                <div className="jumbotron resultsDropdown vrDropdown" data-toggle="collapse" data-target="#multiCollapse3" aria-expanded="false" aria-controls="multiCollapse3">
                    <img src="https://i.imgur.com/nmGAup1.png" className="arrow arrow2" alt="arrow"/>Virtual Tour Directions
                    <div className="tourDiv collapse multi-collapse" id="multiCollapse3">
                    <div className="jumbotron tourContainer">
                        <iframe className="tour" title="tour" width="100%" height="480px" src="https://poly.google.com/view/70BjwBf6Q2F/embed?chrome=min" frameborder="0" allowvr="yes" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
                    </div>
                    </div>
                </div>
                {/* <h6 className="grayText textTitle">Step-by-step Directions</h6>
                <div>
                    <div className="jumbotron textInstructions">1. {this.props.dirOne}</div>
                    <div className="jumbotron textInstructions">2. {this.props.dirTwo !== "" ? this.props.dirTwo : null}</div>
                    <div className="jumbotron textInstructions">3. {this.props.dirThree !== "" ? this.props.dirThree : null}</div>
                    <div className="jumbotron textInstructions">4. {this.props.dirFour !== "" ? this.props.dirFour : null}</div>
                </div>  */}

                <div className="jumbotron resultsDropdown textDropdown" data-toggle="collapse" data-target="#multiCollapse4" aria-expanded="false" aria-controls="multiCollapse4">
                    <img src="https://i.imgur.com/nmGAup1.png" className="arrow arrow3" alt="arrow"/>Step-by-step Directions
                    <div className="textDiv collapse multi-collapse" id="multiCollapse4">
                        <p className="dropdownText">1. {this.props.dirOne}</p>
                        <p className="dropdownText">2. {this.props.dirTwo !== "" ? this.props.dirTwo : null}</p>
                        <p className="dropdownText">3. {this.props.dirThree !== "" ? this.props.dirThree : null}</p>
                        <p className="dropdownText">4. {this.props.dirFour !== "" ? this.props.dirFour : null}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;