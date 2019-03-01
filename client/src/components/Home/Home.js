import React, { Component } from "react";
import "./Home.css";
import RoomSearch from "../RoomSearch/RoomSearch";
import Results from "../Results/Results";
import Saved from "../Saved/Saved";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import PresetChoices from "../PresetChoices/PresetChoices";

class Home extends Component {

    render () {
        return (
            <div className="App">
                <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <p class="lead">Hey there!</p>
                    <p class="lead">Let's get you where you need to go.</p>
                </div>
                </div>
                <RoomSearch />
                <PresetChoices/>
                <Results />
                <Saved />
                <Login />
                <Registration />
            </div>
        );
    }
}

export default Home;