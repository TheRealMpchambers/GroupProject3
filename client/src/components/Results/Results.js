import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import "./Results.css";

class Results extends Component {

    render () {
        return(

            <div className="jumbotron jumbotronjumbo">
                <h1 className="title1">Directions</h1>
                    <Card>
                        <h1 className="title1">Text Directions</h1>
                        <h6>1. {this.props.dirOne}</h6>
                        <h6>2. {this.props.dirTwo !== "" ? this.props.dirTwo : null}</h6>
                        <h6>3. {this.props.dirThree !== "" ? this.props.dirThree : null}</h6>
                        <h6>4. {this.props.dirFour !== "" ? this.props.dirFour : null}</h6>
                    </Card>
                    <Card>
                        <h1 className="title1">Map to Destination</h1>
                        <img className="mapImg" src={this.props.map} alt=""/>
                    </Card>
                    <Card>
                        <iframe title="tour" width="100%" height="480px" src="https://poly.google.com/view/70BjwBf6Q2F/embed?chrome=min" frameborder="0" allowvr="yes" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
                    </Card>
            </div>
        );
    }
}

export default Results;