import React from "react"
import NavBar from "./NavBar"
import Jumbo from "./Jumbo"
import {Game, GamePiece} from "./Game"
import data from "../resources/images.json"

class Main extends React.Component{
    state = {
        current: 0,
        top: 0,
        clicks: [],
        message: "Click the tiles to start playing!"
    }

    handleImgOnClick = (event) => {
        // console.log(event.target);
        var img = event.target;
        var curr = img.getAttribute("data-count");
        if(!this.state.clicks.includes(curr)){
            if(this.state.current === 11){
                //user won!
                this.setState({current: 0});
                this.setState({clicks: []});
                this.setState({message: "Congrats! You won!"});

            }
            this.setState({current: this.state.current + 1});
            if(this.state.current >= this.state.top){
                this.setState({top: this.state.current + 1});
            }
            this.setState({clicks: this.state.clicks.concat(curr)})
            this.setState({message: "Keep on clicking!"});
        } else {
            this.setState({message: "Boo... you lose. Try again!"});
            this.setState({current: 0});
            this.setState({clicks: []});
        }

    }

    render(){
        return(
            <div>
                <NavBar 
                    currentScore={this.state.current}
                    topScore={this.state.top}
                    message={this.state.message}
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
                        }).sort(()=> Math.random()-0.5) //this will randomly sort the pics each time virtual dom rerenders
                    }
                </Game>

            </div>
        );

    }
}

export default Main;