import React, { Component } from "react";
import "./Results.css";
import trips from "../../trips.json"
import Resultscard from "../Resultscard/Resultscard.js"


class Results extends Component {
    state = {
        trips
    };
    
    render () {
        return(
            <div className="container">
               <div class="card">
                    <div class="card-header">
                        Search Results
                    </div>
                    {this.state.trips.map(trips => (
                        <Resultscard
                            id={trips.id}
                            title={trips.Room}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Results;