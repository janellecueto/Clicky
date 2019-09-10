import React from "react"
import NavBar from "./NavBar"
import Jumbo from "./Jumbo"
import {Game, GamePiece} from "./Game"
import data from "../resources/images.json"

class Main extends React.Component{
    state = {
        current: 0,
        top: 0,
        clicks: []
    }

    handleImgOnClick = (event) => {
        // console.log(event.target);
        var img = event.target;
        console.log(img.getAttribute("data-clicked"))
        if(img.getAttribute("data-clicked") === "0"){
            this.setState({current: this.state.current + 1})
            if(this.state.current >= this.state.top){
                this.setState({top: this.state.current});
            }
            img.getAttribute("data-cliecked");
        } else {
            this.setState({current: 0});
        }
    }

    render(){
        return(
            <div>
                <NavBar 
                    currentScore={this.state.current}
                    topScore={this.state.top}
                />
                <Jumbo/>
                <Game>
                    {
                        data.images.map((imgSrc, index) => {
                            return(
                                <GamePiece
                                    key={imgSrc}
                                    imgSrc={imgSrc}
                                    onClick={this.handleImgOnClick}
                                    count={index}
                                />
                            )
                        })
                    }
                </Game>

            </div>
        );

    }
}

export default Main;