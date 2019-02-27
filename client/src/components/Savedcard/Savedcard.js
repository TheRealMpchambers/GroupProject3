import React from "react";
import "./Savedcard.css";


const Savedcard = props => (
    <div className="list-group">
        <a href={props.link} className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{props.title}</h5>
                <small>3 days ago</small>
            </div>
            <p class="mb-1">{props.preview}</p>
            <small>Donec id elit non mi porta.</small>
        </a>
    </div>
);

export default Savedcard;