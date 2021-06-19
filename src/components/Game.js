import React, { Component, useState, useEffect } from "react";
import Player from "../game/Player";
import Ship from "../game/Ship";
import Tile from "./components/Tile"

function Game() {
    const [player, setPlayer] = useState(Player())
    const [gameActive, setGameActive] = useState(false)
    useEffect(() => {
    })

    const computer = Player()

    console.log(player)

    return (
        <section>
            <div id="playerBoard">
                {Object.keys(player.gameboard.board).map(tile => (
                    <Tile id={tile.key}/>
                ))}
            </div>
            <div id="computerBoard">
                {Object.keys(computer.gameboard.board).map(tile => (
                    <Tile id={tile.key}/>
                ))}
            </div>
        </section>

    )
}

/*
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