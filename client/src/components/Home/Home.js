import React, { Component } from "react";
import "./Home.css";
import Header1 from "../Header1/Header1";
import Header2 from "../Header2/Header2";
import RoomSearch from "../RoomSearch/RoomSearch";
import Results from "../Results/Results";
import PresetChoices from "../PresetChoices/PresetChoices";
import API from '../../utils/API';
import { withRouter } from "react-router";
import { Button } from 'react-bootstrap';

class Home extends Component {

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
                    results: res.data
                })
            })

    }

    presetSubmit = event => {
        event.preventDefault();
        var query = event.target.innerText;
        if ((query.indexOf(" ")) > -1) {
            query = query.replace(/\s/g, "_")
        }
        if ((query.indexOf("'")) > -1) {
            query = query.replace(/\'/g, "")
        }
        API.getDirections(query)
            .then(res => {
                console.log(res.data)
                this.setState({
                    results: res.data
                })
            })
        this.props.history.push("/Homes");
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        // const isAuthenticated = this.auth.isAuthenticated;

        return (
            <div className="App">
                <Header1 />

            {/* //     <Button */}
            {/* //         bsStyle="primary"
            //         className="btn-margin"
            //         onClick={this.goTo.bind(this, 'home')}
            //     >
            //         Home
            // </Button> */}
            {/* //     { */}
            {/* //         !isAuthenticated() && (
            //             <Button */}
            {/* //                 bsStyle="primary"
            //                 className="btn-margin"
            //                 onClick={this.login.bind(this)}
            //             >
            //                 Log In
            //       </Button>
            //         ) */}
            {/* //     }
            //     { */}
            {/* //         isAuthenticated() && (
            //             <Button
            //                 bsStyle="primary"
            //                 className="btn-margin"
            //                 onClick={this.logout.bind(this)}
            //             >
            //                 Log Out
            //       </Button>
            //         )
            //     } */}
                {/* <button onClick={this.props.auth}>Admin Login</button> */}
                <RoomSearch
                    handleSubmit={this.handleSubmit}
                    searchInput={this.state.searchInput}
                    handleChange={this.handleChange}
                    validateForm={this.validateForm} />
                <PresetChoices
                    presetSubmit={this.presetSubmit} />
                {/* <div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <Header2/>
                <Results 
                destination ={this.state.results !== "" ? this.state.results.destination : null}
                map = {this.state.results !== "" ? this.state.results.map : null}
                dirOne = {this.state.results !== "" ? this.state.results.dirOne : null}
                dirTwo = {this.state.results !== "" ? this.state.results.dirTwo : null}
                dirThree = {this.state.results !== "" ? this.state.results.dirThree : null}
                dirFour = {this.state.results !== "" ? this.state.results.dirFour : null}/>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br> */}
            </div>
        );
    }
}

export default withRouter(Home);