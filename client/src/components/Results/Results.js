import React, { Component } from "react";
import trips from "../../trips.json"
import Resultscard from "../Resultscard/Resultscard.js"
import styles from "./Results.css";


class Results extends Component {
    // state = {
    //     trips
    // };
    
    render () {
        return(
            <div className="container">
               <div class="card">
                    {/* <div class="card-header">
                        Search Results
                    </div> */}
                    {/* {this.state.trips.map(trips => (
                        <Resultscard
                            id={trips.id}
                            title={trips.Room}
                        />
                    ))} */}
                <br></br>
                <div className="results-heading"> 
                    <h1 style={styles}>Directions to {this.props.destination}</h1>
                </div>
                <br></br>
                <img src={this.props.map} alt="map to destination"/>
                <div>{this.props.dirOne}</div>
                <div>{this.props.dirTwo !== "" ? this.props.dirTwo : null}</div>
                <div>{this.props.dirThree !== "" ? this.props.dirThree : null}</div>
                <div>{this.props.dirFour !== "" ? this.props.dirFour : null}</div>
                </div>
            </div>
        );
    }
}

export default Results;