import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import "./ContactUs.css";

export default class ContactUs extends Component {

    render () {
        return (
            <div className="App">
                <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Contact Us</h1>
                    <p class="lead">QR Direction Site is awesome.</p>
                </div>
                </div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Write to us</p>
                            <div className="grey-text">
                            <MDBInput
                                label="Your name"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Your email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Subject"
                                icon="tag"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                type="textarea"
                                rows="2"
                                label="Your message"
                                icon="pencil-alt"
                            />
                            </div>
                            <div className="text-center">
                            <MDBBtn outline color="secondary">
                                Send <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                    </MDBContainer>
            </div>
        );
    };
}