import React from "react";
import Player from "../game/Player";
import Tile from "./Tile";

const Game = () => {
    const computer = Player("computer", "Hanzlo")
    const savedSettings = JSON.parse(window.localStorage.getItem('savedSettings'))
    const playerShips = JSON.parse(window.localStorage.getItem('playerShips'))
    const player = Player("human", savedSettings.firstName)
    console.log(savedSettings)
    console.log(playerShips)

    const playerShipSpaces = playerShips.map(ship => ship.shipCoordinates)
    console.log(playerShipSpaces)

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