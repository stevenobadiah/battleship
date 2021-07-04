import React, { useState, useEffect } from "react";
import Player from "../game/Player";
import GameTile from "./GameTile";

const computer = Player("computer", "Hanzlo")
const savedSettings = JSON.parse(window.localStorage.getItem('savedSettings'))
const playerShips = JSON.parse(window.localStorage.getItem('playerShips'))
const computerShips = JSON.parse(window.localStorage.getItem('computerShips'))
const player = Player('human', savedSettings.firstName, savedSettings.age)
let winner

const Game = () => {
    playerShips.forEach(ship => {
        player.gameboard.placeShip(ship)
    });
    computerShips.forEach(ship => {
        computer.gameboard.placeShip(ship)
    });

    const [gameStatus, setGameStatus] = useState(true)
    useEffect(() => {
        if (gameStatus === false) {
            document.getElementById('computerSide').style.pointerEvents = 'none';
        } else if (gameStatus === true && winner != null) {
            //RESET GAME LOGIC
            window.localStorage.setItem('savedStatus', 'setup')
            window.location.reload(false)
        }
    }, [gameStatus])

    const reset = () => {
        setGameStatus(true)
    }

    const [turn, setTurn] = useState(1)
    useEffect(() => {
        if (computer.gameboard.isAllSunk(computerShips)) {
            console.log('HUMAN WINS!')
            winner = player.firstName
            document.getElementById('winPanel').className = 'showWinPanel'
            setGameStatus(false)
        } else if (player.gameboard.isAllSunk(playerShips)) {
            console.log('COMPUTER WINS!')
            setGameStatus(false)
            winner = computer.firstName
            document.getElementById('winPanel').className = 'showWinPanel'
        }
        if (turn % 2 == 0) {
            while (true) {
                let coordinates = computer.randomAttack()
                let tile = document.getElementById('human' + coordinates)
                if (tile.style.backgroundColor != 'blue' && tile.style.backgroundColor != 'red') {
                    computerAttack(coordinates)
                    break;
                }
            }
        }
    })

    const [playerBoard, setPlayerBoard] = useState(player.gameboard.board)
    const [computerBoard, setComputerBoard] = useState(computer.gameboard.board)

    function computerAttack(coordinates) {
        console.log(coordinates)
        let hitStatus = player.gameboard.receiveAttack(playerShips, coordinates)
        if (hitStatus === 'Direct Hit' || hitStatus === 'Ship Sunk') {
            player.gameboard.board[coordinates] = 'X'
            console.log('player hit')
            let tile = document.getElementById('human' + coordinates)
            tile.style.backgroundColor = 'Red'
        } else if (hitStatus === 'Miss') {
            console.log('miss')
            let tile = document.getElementById('human' + coordinates)
            tile.style.backgroundColor = 'Blue'
        }
        setTurn(turn + 1)
        setPlayerBoard(player.gameboard.board)
    }

    function attack(e) {
        let coordinates
        if (e.target.id.slice(-1) === '0') {
            coordinates = e.target.id.slice(-3)
        } else {
            coordinates = e.target.id.slice(-2)
        }

        let hitStatus = computer.gameboard.receiveAttack(computerShips, coordinates)
        if (e.target.style.backgroundColor === 'red' || e.target.style.backgroundColor === 'blue') {
            console.log('You already picked this tile!')
        } else if (hitStatus === 'Direct Hit' || hitStatus === 'Ship Sunk') {
            computer.gameboard.board[coordinates] = 'X'
            e.target.style.backgroundColor = 'red'
            setTurn(turn + 1)
        } else if (hitStatus === 'Miss') {
            e.target.style.backgroundColor = 'blue'
            setTurn(turn + 1)
        }
        setComputerBoard(computer.gameboard.board)
    }

    return (
        <section id='game'>
            <div id='winPanel' className='hidden'>
                <h2>{winner} wins!</h2>
                <button id='btnPlayAgain' onClick={reset}>Play Again</button>
            </div>
            <div id='gameboardSection'>
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
                                <GameTile id={player.type + key} key={key} owner='player' condition={playerBoard[key]} />
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
                                <GameTile id={computer.type + key} key={key} owner='computer' attack={attack} condition={computerBoard[key]} />
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
            </div>
        </section>
    )
}

export default Game;