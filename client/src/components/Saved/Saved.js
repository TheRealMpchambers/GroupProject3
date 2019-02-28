import React, { Component } from "react";
import Savedcard from "../Savedcard/Savedcard.js"
import "./Saved.css";
import trips from "../../trips.json"



class Saved extends Component {
    state = {
        trips
    };

    render () {
        return(
            <div className="container">
               <div class="card">
                    <div class="card-header">
                        Previous Trips
                    </div>
                    {this.state.trips.map(trips => (
                        <Savedcard
                            id={trips.id}
                            title={trips.room}
                            link={trips.link}
                            preview={trips.preview} 
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Saved;