import React, { Component } from "react";
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import "./RoomSearch.css";

class RoomSearch extends Component {
    constructor(props) {
        super(props);

    //     this.state = {
    //         searchInput: ""
    //     };
        
    //     this.handleChange = this.handleChange.bind(this);
    }

    //makes sure something is entered in the form fields

    // validateForm() {
    //     return this.state.searchInput.length > 0;
    // }

    // //listenes for any changes in the form fields

    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }
    
    // handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(this.state.searchInput);
    // }
    
    render () {
        return(
                    <div className="jumbotron jumbotronsearch searchCard">
                    <h1 className="title1">Search by room number</h1>
                            <form className="form" onSubmit={this.props.handleSubmit}>
                                <FormGroup controlId="searchInput" bsSize="large">
                                    <div className="inputDiv">
                                        <FormControl
                                            autoFocus
                                            type="searchInput"
                                            value={this.props.searchInput}
                                            onChange={this.props.handleChange}
                                        />
                                        <Button
                                            className="enterButton"
                                            block
                                            bsSize="large"
                                            disabled={!this.props.validateForm}
                                            type="submit"
                                        >
                                        Enter
                                        </Button>
                                    </div>
                                </FormGroup>
                            </form>
                    </div>
        );
    }
}

export default RoomSearch;