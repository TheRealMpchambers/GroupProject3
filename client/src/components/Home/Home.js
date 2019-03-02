import React, { Component } from "react";
import "./Home.css";
import RoomSearch from "../RoomSearch/RoomSearch";
import Results from "../Results/Results";
import Saved from "../Saved/Saved";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import PresetChoices from "../PresetChoices/PresetChoices";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: ""
        };
        
    }

     //makes sure something is entered in the form fields

     validateForm() {
        return this.state.searchInput.length > 0;
    }

    //listenes for any changes in the form fields

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchInput);
    }

    render () {
        return (
            <div className="App">
                <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <p class="lead">Hey there!</p>
                    <p class="lead">Let's get you where you need to go.</p>
                </div>
                </div>
                <RoomSearch 
                handleSubmit = {this.handleSubmit}
                searchInput = {this.state.searchInput}
                handleChange = {this.handleChange}
                validateForm = {this.validateForm}/>
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