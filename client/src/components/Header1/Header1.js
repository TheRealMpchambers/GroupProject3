import React from "react";
import "./Header1.css";

function Header1() {
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="icon" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
            <span className="iconTop"></span>
            <span className="iconBottom"></span>
        </div>
        <div className="collapse multi-collapse menu" id="multiCollapseExample2">
            <p className="menuLinks">Placeholder</p>
            <p className="menuLinks">Placeholder</p>
            <p className="menuLinks">Placeholder</p>
            <p className="menuLinks">Placeholder</p>
            <p className="menuLinks">Placeholder</p>
        </div>
        <div className="container">
            <p className="lead leadTop">Hey there!</p>
            <p className="lead">Let's get you where you need to go.</p>
        </div>
        </div>
    );
}

export default Header1;