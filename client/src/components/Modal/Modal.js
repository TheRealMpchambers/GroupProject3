import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Modal.css";

class FormModal extends Component {
	render() {
		return (
			<Modal show={this.props.show}>
				<Modal.Header closeButton>
					<Modal.Title>Invalid Room Number</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Please enter a valid room number
				</Modal.Body>
				<Modal.Footer>
					<Button>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

export default FormModal;