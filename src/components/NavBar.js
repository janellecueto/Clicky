import React from "react";

function NavBar(props){
        return (
            <nav class="navbar navbar-light bg-light justify-content-between">
                <span class="navbar-brand mb-0 h1">Navbar</span>
                <div>
                    <span>Score: {props.currentScore} | Top Score: {props.topScore}</span>
                </div>
            </nav>
        );
    }

    export default NavBar;

