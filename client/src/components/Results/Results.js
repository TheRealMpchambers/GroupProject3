import React, { Component } from "react";
import styles from "./Results.css";


class Results extends Component {
    // state = {
    //     trips
    // };
    
    render () {
        return(

            <div className="container">
                <div> 1. {this.props.dirOne}</div>
                <div>2. {this.props.dirTwo !== "" ? this.props.dirTwo : null}</div>
                <div>3. {this.props.dirThree !== "" ? this.props.dirThree : null}</div>
                <div> {this.props.dirFour !== "" ? this.props.dirFour : null}</div>
                <img className="mapImg" src={this.props.map} alt="map to destination"/>
                <iframe title="tour" width="100%" height="480px" src="https://poly.google.com/view/70BjwBf6Q2F/embed?chrome=min" frameborder="0" allowvr="yes" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" ></iframe>
            </div>
        );
    }
}

export default Results;