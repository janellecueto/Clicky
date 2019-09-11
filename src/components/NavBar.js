import React from "react";

function NavBar(props){
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                <span className="my-message">{props.message}</span>
                <div>
                    <span>Score: {props.currentScore} | Top Score: {props.topScore}</span>
                </div>
            </nav>
        );
    }

export default NavBar;

