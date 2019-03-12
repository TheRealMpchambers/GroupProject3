import React, { Component } from "react";
import "./Home.css";
import Header1 from "../Header1/Header1";
// import Header2 from "../Header2/Header2";
import RoomSearch from "../RoomSearch/RoomSearch";
// import Results from "../Results/Results";
// import Login from "../Login/Login";
import PresetChoices from "../PresetChoices/PresetChoices";
import API from '../../utils/API';
import { withRouter } from "react-router";
// import FormModal from "../Modal/Modal"

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: "",
            results: ""
        };
     
    }

    // modalShow() {
    //     this.setState({
    //         modal: "true"
    //     });
    // }

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
        if (query === "Room_32" || query === "room_32" || query === "32") {
            query = "Room_32";
        } else if (query === "Room_83" || query === "room_83" || query === "83") {
            query = "Room_83";
        } else if (query === "Room_62" || query === "room_62" || query === "62") {
            query = "Room_62";
        } else if (query === "Room_55" || query === "room_55" || query === "55") {
            query = "Room_55";
        } else if (query === "Room_52" || query === "room_52" || query === "52") {
            query = "Room_52";
        } else if (query === "Room_42A" || query === "Room_42a" || query === "room_42a" || query === "room_42A" || query === "42A" || query === "42a") {
            query = "Room_42A";
        } else if (query === "Room_42B" || query === "Room_42b" || query === "room_42b" || query === "room_42B" || query === "42b" || query === "42b") {
            query = "Room_42B";
        } else if (query === "Room_77" || query === "room_77" || query === "77") {
            query = "Room_77";
        } else {
            alert("Please enter a valid room number")
            return false;
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
        this.props.history.push("/resultspage");
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render () {

        return (
            <div className="App">
                <Header1 />
                <RoomSearch 
                handleSubmit = {this.handleSubmit}
                searchInput = {this.state.searchInput}
                handleChange = {this.handleChange}
                validateForm = {this.validateForm}/>
                <PresetChoices
                presetSubmit = {this.presetSubmit}/>
                {/* <div>
                <Header2/>
                <Results 
                destination ={this.state.results !== "" ? this.state.results.destination : null}
                map = {this.state.results !== "" ? this.state.results.map : null}
                tour = {this.state.results !== "" ? this.state.results.tour : null}
                dirOne = {this.state.results !== "" ? this.state.results.dirOne : null}
                dirTwo = {this.state.results !== "" ? this.state.results.dirTwo : null}
                dirThree = {this.state.results !== "" ? this.state.results.dirThree : null}
                dirFour = {this.state.results !== "" ? this.state.results.dirFour : null}/>
                </div>
                <Login /> */}
            </div>
        );
    }
}

export default withRouter(Home);