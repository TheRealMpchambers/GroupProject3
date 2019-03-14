import React from "react";
import "./Header2.css";

function Header1() {
    return (
        <div className="jumbotron jumbotron-fluid resultsPage">
        <div className="icon" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
            <span className="iconTop"></span>
            <span className="iconBottom"></span>
        </div>
        <div className="collapse multi-collapse menu" id="multiCollapseExample2">
            <a className="links" href="https://qrmap.herokuapp.com/"><p className="menuLinks">Home</p></a>
            <a className="links" href="https://github.com/TheRealMpchambers/GroupProject3"><p className="menuLinks">Source<span className="linebreak">_</span>Code</p></a>
            <p className="menuLinks"><a className="links" href="#">Contact<span className="linebreak">_</span>Us</a></p>
            <p className="menuLinks"><a className="links" href="#">Login</a></p>
        </div>
        <div className="container">
            <p className="lead leadTop">All right,</p>
            <p className="lead">Let's get going!</p>
        </div>
        </div>
    );
}

export default Header1;