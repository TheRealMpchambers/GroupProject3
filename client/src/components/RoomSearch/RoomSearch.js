import React, { Component } from "react";
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import "./RoomSearch.css";

class RoomSearch extends Component {
    
    render () {
        return(
                    <div className="jumbotron jumbotronsearch searchCard">
                    <h1 className="title1">Search by room number</h1>
                            <form autoComplete="off" className="form" onSubmit={this.props.handleSubmit}>
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