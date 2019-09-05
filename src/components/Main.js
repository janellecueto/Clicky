import React from "react"
import NavBar from "./NavBar"

class Main extends React.Component{
    state = {
        current: 0,
        top: 0
    }

    render(){
        return(
            <div>
                <NavBar 
                    currentScore={this.state.current}
                    topScore={this.state.top}
                />
            </div>
        );

    }
}