import React, { Component, useState, useEffect } from "react";
import Player from "../game/Player";
import Ship from "../game/Ship";
import Settings from "./Settings";
import Tile from "./Tile";
import { useLocation } from 'react-router-dom';

const Game = (props) => {
    const location = useLocation();

    const player = Player("human", location.state.savedSettings.firstName)
    const computer = Player("computer", "Hanzlo")

    const [gameActive, setGameActive] = useState("inactive")
    useEffect(() => {
    })

    const goToSettings = () => {
        window.localStorage.clear()
        window.location.reload(false);
    }

    console.log(player)
    console.log(location.state.savedSettings.difficulty)

    return (
        <section>
            <button id="settingsButton" onClick={() => goToSettings()}>Settings</button>
            <div className='competitor-side' id='playerSide'>
                <h2 className='competitor-label'>{location.state.savedSettings.firstName}</h2>
                <div className='board-full' id="playerBoardFull">
                    <div className="column-headers">
                        <div className="column-header">A</div>
                        <div className="column-header">B</div>
                        <div className="column-header">C</div>
                        <div className="column-header">D</div>
                        <div className="column-header">E</div>
                        <div className="column-header">F</div>
                        <div className="column-header">G</div>
                        <div className="column-header">H</div>
                        <div className="column-header">I</div>
                        <div className="column-header">J</div>
                    </div>
                    <div className='board' id="playerBoard">
                        {Object.keys(player.gameboard.board).map(key => (
                            <Tile id={player.type + key} key={key} owner='player' condition={player.gameboard.board[key]} />
                        ))}
                    </div>
                    <div className="row-headers">
                        <div className="row-header">1</div>
                        <div className="row-header">2</div>
                        <div className="row-header">3</div>
                        <div className="row-header">4</div>
                        <div className="row-header">5</div>
                        <div className="row-header">6</div>
                        <div className="row-header">7</div>
                        <div className="row-header">8</div>
                        <div className="row-header">9</div>
                        <div className="row-header">10</div>
                    </div>
                </div>
            </div>
            <div className='competitor-side' id='computerSide'>
                <h2 className='competitor-label'>{computer.firstName} The Computer - {location.state.savedSettings.difficulty}</h2>
                <div className='board-full' id="computerBoardFull">
                    <div className="column-headers">
                        <div className="column-header">A</div>
                        <div className="column-header">B</div>
                        <div className="column-header">C</div>
                        <div className="column-header">D</div>
                        <div className="column-header">E</div>
                        <div className="column-header">F</div>
                        <div className="column-header">G</div>
                        <div className="column-header">H</div>
                        <div className="column-header">I</div>
                        <div className="column-header">J</div>
                    </div>
                    <div className='board' id="computerBoard">
                        {Object.keys(computer.gameboard.board).map(key => (
                            <Tile id={player.type + key} key={key} owner='computer' condition={computer.gameboard.board[key]} />
                        ))}
                    </div>
                    <div className="row-headers">
                        <div className="row-header">1</div>
                        <div className="row-header">2</div>
                        <div className="row-header">3</div>
                        <div className="row-header">4</div>
                        <div className="row-header">5</div>
                        <div className="row-header">6</div>
                        <div className="row-header">7</div>
                        <div className="row-header">8</div>
                        <div className="row-header">9</div>
                        <div className="row-header">10</div>
                    </div>
                </div>
            </div>
        </section>
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

export default Game;