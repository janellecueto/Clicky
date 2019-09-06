import React from "react"

export function Game({children}){
    return (
        <ul className="list-group">{children}</ul>
    )
}

export function GamePiece(props){
    return(
        <li className="list-group-item">
            <img className="game-piece" 
                alt="game piece"
                src={props.imgSrc}
                data-clicked="0"
            />
        </li>
    )
}