import React, { Component, useState, useEffect, useRef } from "react";
import Player from "../game/Player";
import Ship from "../game/Ship";
import Tile from "./Tile";

const keys = ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1", "J1", "A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2", "I2", "J2", "A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3", "I3", "J3", "A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4", "J4", "A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5", "I5", "J5", "A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6", "I6", "J6", "A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7", "I7", "J7", "A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8", "I8", "J8", "A9", "B9", "C9", "D9", "E9", "F9", "G9", "H9", "I9", "J9", "A10", "B10", "C10", "D10", "E10", "F10", "G10", "H10", "I10", "J10"];
const computer = Player("computer", "Hanzlo")
const savedSettings = JSON.parse(window.localStorage.getItem('savedSettings'))
const playerShips = JSON.parse(window.localStorage.getItem('playerShips'))
const computerShips = JSON.parse(window.localStorage.getItem('computerShips'))
const player = Player('human', savedSettings.firstName, savedSettings.age)
console.log(savedSettings)
console.log(playerShips)

const playerShipObjects = playerShips.map(ship => ship.shipCoordinates)
console.log(playerShipObjects)

const x_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const y_array = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
const shipLengths = [5, 4, 3, 3, 2]
const orientations = ['Left', 'Right', 'Up', 'Down']


const Game = () => {
    playerShips.forEach(ship => {
        player.gameboard.placeShip(ship)
    });
    computerShips.forEach(ship => {
        computer.gameboard.placeShip(ship)
    });


    return (
        <section id='gameboardSection'>
            <div className='competitor-side' id='playerSide'>
                <h2 className='competitor-label'>{savedSettings.firstName}</h2>
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
                <h2 className='competitor-label'>{computer.firstName} The Computer - {savedSettings.difficulty}</h2>
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
                            <Tile id={computer.type + key} key={key} owner='computer' condition={computer.gameboard.board[key]} />
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



export default Game;