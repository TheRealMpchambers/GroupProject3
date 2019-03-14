import React, { Component } from "react";
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { withRouter } from "react-router";
import "./RoomSearch.css";

class RoomSearch extends Component {
    redirect = () => {
        console.log("asdf");
        this.props.history.push('/resultspage');
    }

    render () {
        return(
                    <div className="jumbotron jumbotronsearch searchCard">
                    <h1 className="title1">Search by room number</h1>
                            <form autoComplete="off" className="form" onClick={this.props.handleSubmit}>
                                <FormGroup controlId="searchInput" bsSize="large">
                                    <div className="inputDiv">
                                        <FormControl
                                            autoFocus
                                            type="searchInput"
                                            value={this.props.searchInput}
                                            onChange={this.props.handleChange}
                                        />
                                        <Button
                                            type="button"
                                            className="enterButton"
                                            block
                                            disabled={!this.props.validateForm}
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

export default withRouter(RoomSearch);