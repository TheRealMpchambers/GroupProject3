import React, { Component } from "react";
// import "./Home.css";
import Header2 from "../Header2/Header2";
import Results from "../Results/Results";
import API from '../../utils/API';

class ResultsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: "",
            results: ""
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

    presetSubmit = event => {
        event.preventDefault();
        var query = event.target.innerText;
        if ((query.indexOf(" ")) > -1) {
            query = query.replace(/\s/g, "_")
        }
        if ((query.indexOf("'")) > -1) {
            query = query.replace(/'/g, "")
        }
        API.getDirections(query)
        .then(res => {
            console.log(res.data)
            this.setState({
                results: res.data
            })
        })
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render () {

        return (
            <div className="App">
                <div>
                <Header2/>
                <Results 
                destination ={this.state.results !== "" ? this.state.results.destination : null}
                map = {this.state.results !== "" ? this.state.results.map : null}
                dirOne = {this.state.results !== "" ? this.state.results.dirOne : null}
                dirTwo = {this.state.results !== "" ? this.state.results.dirTwo : null}
                dirThree = {this.state.results !== "" ? this.state.results.dirThree : null}
                dirFour = {this.state.results !== "" ? this.state.results.dirFour : null}/>
                </div>
            </div>
        );
    }
}

export default ResultsPage;