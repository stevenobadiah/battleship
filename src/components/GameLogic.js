import React, { Component, useState, useEffect } from "react";
import Settings from "./Settings";
import Game from "./Game";
import Setup from "./Setup";

const GameLogic = () => {
    let content
    let savedStatus = window.localStorage.getItem('savedStatus')

    if (savedStatus === null || savedStatus === "settings") {
        content = <Settings />
    } else if (savedStatus === "setup") {
        content = <Setup />
    } else if (savedStatus === "active") {
        content = <Game />
    }
    //window.localStorage.setItem('savedStatus', JSON.stringify(gameStatus));

    //setGameStatus(window.localStorage.getItem('savedStatus'));


    return (
        <div>
            {content}
        </div>
    )
}

/*
                {y_axis.map(label => {
                    <div className="y-axis-label" key={label.index}>Hi</div>
                })}

                {Object.entries(computer.gameboard.board).map(([key, value]) => {
                    <Tile id={key} key={key} condition={value} />
                })}

import React, { useState, useEffect } from 'react';

function Board() {
    const createBoard = () => {
        let AllChars = [];
        let board = []
    
        for (var i=97; i<123; i++) {
            AllChars.push(String.fromCharCode(i))
        }
    
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= AllChars; j++) {
                board.push(AllChars[j] + i.toString())
            }
        }
        return board
    }

    const [board, setBoard] = useState(createBoard)
    useEffect(() => {
        // SOME DOM MANIPULATING STUFF
    }, [board]);

    // FUNCTION TO RECEIVE GUESS AND PAINT TILE AS HIT OR MISS
    // SAVE BOARD IN LOCAL STORAGE
}
*/

export default GameLogic;