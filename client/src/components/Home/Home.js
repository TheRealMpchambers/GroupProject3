import React, { Component } from "react";
import "./Home.css";
import RoomSearch from "../RoomSearch/RoomSearch";
import Results from "../Results/Results";
import Saved from "../Saved/Saved";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import PresetChoices from "../PresetChoices/PresetChoices";
import API from '../../utils/API';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: "",
            results: []
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
        var query = this.state.searchInput;
        if ((query.indexOf(" ")) > -1) {
            query = query.replace(/\s/g, "_")
      };
        console.log("The query is " + query);
        API.getDirections(query)
        .then(res => {
            this.setState({
                results: res.data})
        })
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render () {

        var searchResults = this.state.results.map((result) => 
        
        <Results 
                destintaion ={result.destination}
                map = {result.map}
                direOne = {result.direOne}
                dirTwo = {result.dirTwo}
                dirThree = {result.dirThree}
                direFour = {result.dirFour}/>
        
        )

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
                <div>
                    {searchResults}
                </div>
                <Saved />
                <Login />
                <Registration />
            </div>
        );
    }
}

export default Home;