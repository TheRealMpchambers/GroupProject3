
import React from "react";
import "./Resultscard.css";

const Resultscard = props => (
    <div class="card-body">
        <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action">{props.title}</button>
        </div>
    </div>
);

export default Resultscard;