import React from "react"

export function Game({children}){
    return (
        <div className="container text-center">{children}</div>
    )
}

export function GamePiece(props){
    return(
            <img className="game-piece" 
                alt="game piece"
                src={props.imgSrc}
                data-clicked={props.count}
                onClick={props.onClick}
            />
    )
}