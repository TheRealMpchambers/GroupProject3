import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import "./Registration.css";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstName: " ",
      lastName: " ",
      zipCode: " ",
      phoneNumber: " ",
      errors: {}
    };
  }

  validateForm() {
    return this.state.email.length > 0 &&
    this.state.password.length > 0 &&
    this.state.firstName.length >0 &&
    this.state.lastName.length >0 &&
    this.state.zipCode.length >0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("clicked")
    const userData = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber,
      errors: {}
    }
      console.log(userData);
    //   axios
    //   Will need .post .then . catch for axios


        window.location.href = "/profile"
        this.setState({
          email: '',
          firstName: '',
          lastName:'',
          password:'',
          phoneNumber:'',
          zipCode:''
        });
}


render() {
    return (
      <div className="Login">
      {/* Image class for logo depending on what is wanted */}
        <img className="Logo" alt="" src={"#"}/>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="firstName" bsSize="large">
            <FormLabel>First Name</FormLabel>
            <FormControl
              autoFocus
              type="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="lastName" bsSize="large">
            <FormLabel>Last Name</FormLabel>
            <FormControl
              value={this.state.lastName}
              onChange={this.handleChange}
              type="lastName"
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="zipCode" bsSize="large">
            <FormLabel>Zip Code</FormLabel>
            <FormControl
              value={this.state.zipCode}
              onChange={this.handleChange}
              type="zipCode"
            />

          </FormGroup>
          <FormGroup controlId="phoneNumber" bsSize="large">
            <FormLabel>Phone Number</FormLabel>
            <FormControl
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              type="phoneNumber"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}