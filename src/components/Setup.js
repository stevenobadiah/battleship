import React, { Component, useState, useEffect, useRef } from "react";
import Player from "../game/Player";
import Ship from "../game/Ship";
import Tile from "./Tile";
    
const Setup = () => {
    const savedSettings = JSON.parse(window.localStorage.getItem('savedSettings'))
    const player = Player("human", savedSettings.firstName)
    const keys = ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1", "J1", "A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2", "I2", "J2", "A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3", "I3", "J3", "A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4", "J4", "A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5", "I5", "J5", "A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6", "I6", "J6", "A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7", "I7", "J7", "A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8", "I8", "J8", "A9", "B9", "C9", "D9", "E9", "F9", "G9", "H9", "I9", "J9", "A10", "B10", "C10", "D10", "E10", "F10", "G10", "H10", "I10", "J10"];
    const lengthArray = [5, 4, 3, 3, 2];
    const orientationSelection = useRef();
    let unhighlightArray = []
    let highlightable = true

    const [orientation, setOrientation] = useState('Down')
    const [shipLength, setShipLength] = useState(5)

    function changeOrientation() {  
      setOrientation(orientationSelection.current.value.charAt(0).toUpperCase() + orientationSelection.current.value.slice(1));
    }

    const [ships, setShips] = useState([])
    useEffect(() => {
      setShipLength(lengthArray[ships.length])
      unhighlightArray = []
      if (ships.length === 5) {
          const storeInfo = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(JSON.stringify(ships));
            }, 100);
          })

          storeInfo
            .then(window.localStorage.setItem('playerShips', JSON.stringify(ships)))
            .then(window.localStorage.setItem('savedStatus', "active"))
            .then(window.location.reload(false));
      }
    }, [ships])

    const [selectedTiles, setSelectedTiles] = useState([])
    useEffect(() => {
        for (let i = 0; i < selectedTiles; i++) {
            document.getElementById(selectedTiles[i]).style.background = 'blue';
        }
    }, [])
    
    function moveValid(e) {
        let tileId = e.target.id
        let boardIndex = keys.findIndex(tile => tile === tileId)
        let y_coord = parseInt(tileId[1])
        let ship = new Ship(ships.length + 1, shipLength, tileId, orientation)
        let invalidSelection = Object.keys(ship.shipCoordinates).some( tile => selectedTiles.includes(tile));
    
        const upCheck = () => {
          if (((y_coord - shipLength) < 0) || invalidSelection === true) {
            return false
          } else {
            return true
          }
        }
  
        const downCheck = () => {
          if (((y_coord + shipLength) > 11) || invalidSelection === true) {
            return false
          } else {
            return true
          }
        }
  
        const leftCheck = () => {
          let tiles = []
          for (let i = 0; i < shipLength; i++) {
            tiles.push(keys[boardIndex - i])
          }
  
          try {
            let x_span = tiles.map(tile => tile[0])
            if (x_span.includes('A') && x_span.includes('J') || invalidSelection === true) {
              return false
            } else {
              return true
            }
          } catch (error) {
            return false
          }
        }
  
        const rightCheck = () => {
          let tiles = []
          for (let i = 0; i < shipLength; i++) {
            tiles.push(keys[boardIndex + i])
          }
          
          try {
            let x_span = tiles.map(tile => tile[0])
            if (x_span.includes('A') && x_span.includes('J') || invalidSelection === true) {
              return false
            } else {
              return true
            }
          } catch (error) {
            return false
          }
        }
  
        switch (orientation) {
          case 'Left':
            if (leftCheck() === false) {
              return false
            } else {
              return true
            }
            break;
          case 'Up':
            if (upCheck() === false) {
              return false
            } else {
              return true
            }
            break;
          case 'Down':
            if (downCheck() === false) {
              return false
            } else {
              return true
            }
            break;
          case 'Right':
            if (rightCheck() === false) {
              return false
            } else {
              return true
            }
            break;
        }
    }

    function highlight(e) {
        if (highlightable === true) {
            let tileId = e.target.id
            let boardIndex = keys.findIndex(tile => tile === tileId)
        
            switch (orientation) {
              case 'Left':
                if (moveValid(e) === true) {
                    for (let i = 0; i < shipLength; i++) {
                        try {
                            let highlightId = keys[boardIndex - i];
                            document.getElementById(highlightId).style.background = 'blue';
                            unhighlightArray.push(highlightId)
                        } catch (e) {
                            break;
                        }
                    }
                } else {
                    for (let i = 0; i < shipLength; i++) {
                        try {
                            let highlightId = keys[boardIndex - i];
                            if (highlightId[1] != tileId[1]) {
                                throw "Broken board bounds";
                            }
                            document.getElementById(highlightId).style.background = 'red';
                            unhighlightArray.push(highlightId)
                        } catch (e) {
                            break;
                        }
                    }
                }
                break;
              case 'Up':
                if (moveValid(e) === true) {
                    for (let i = 0; i < shipLength; i++) {
                        try {
                            let highlightId = keys[boardIndex - (10 * i)];
                            document.getElementById(highlightId).style.background = 'blue';
                            unhighlightArray.push(highlightId)
                        } catch (e) {
                            break;
                        }
                  }
                } else {
                  for (let i = 0; i < shipLength; i++) {
                        try {
                            let highlightId = keys[boardIndex - (10 * i)];
                            document.getElementById(highlightId).style.background = 'red';
                            unhighlightArray.push(highlightId)
                        } catch (e) {
                            break;
                        }
                  }
                }
                 break;
              case 'Down':
                if (moveValid(e) === true) {
                    for (let i = 0; i < shipLength; i++) {
                        try {
                            let highlightId = keys[boardIndex + (10 * i)];
                            document.getElementById(highlightId).style.background = 'blue';
                            unhighlightArray.push(highlightId)
                        } catch (e) {
                            break;
                        }
                    }
                } else {
                    for (let i = 0; i < shipLength; i++) {
                        try {
                            let highlightId = keys[boardIndex + (10 * i)];
                            document.getElementById(highlightId).style.background = 'red';
                            unhighlightArray.push(highlightId)
                        } catch (e) {
                            break;
                        }
                  }
                }
                break;
              case 'Right':
                if (moveValid(e) === true) {
                    for (let i = 0; i < shipLength; i++) {
                        try {
                            let highlightId = keys[boardIndex + i];
                            document.getElementById(highlightId).style.background = 'blue';
                            unhighlightArray.push(highlightId)
                        } catch (e) {
                            break;
                        }
                  }
                } else {
                    for (let i = 0; i < shipLength; i++) {
                        try {
                            let highlightId = keys[boardIndex + i];
                            if (highlightId[1] != tileId[1]) {
                                throw "Broken board bounds";
                            }
                            document.getElementById(highlightId).style.background = 'red';
                            unhighlightArray.push(highlightId)
                        } catch (e) {
                            break;
                        }
                    }
                }
                break;
            }
        }

    }
    
    function dim(e) {
        for (let i = 0; i < unhighlightArray.length; i++) {
            if (selectedTiles.includes(unhighlightArray[i]) === false) {
                document.getElementById(unhighlightArray[i]).style.background = 'grey';
            } else {
                document.getElementById(unhighlightArray[i]).style.background = 'blue';
            }
        }
    }
    
    function placeShip(e) {
        if (moveValid(e)) {
            highlightable = false
            let tileId = e.target.id
            let ship = new Ship(ships.length + 1, shipLength, tileId, orientation)
            let invalidSelection = Object.keys(ship.shipCoordinates).some( tile => selectedTiles.includes(tile));
            if (invalidSelection === false) {
                player.gameboard.placeShip(ship)
                let coordinates = ship.shipCoordinates
                let shipTiles = Object.keys(coordinates)

                const myPromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                      resolve(selectedTiles.concat(shipTiles));
                    }, 100);
                });

                myPromise.then((array) => {
                    setSelectedTiles(array)
                    highlightable = true
                    setShips(ships => [...ships, ship])
                });
            } else {
                highlightable = true
            }
        }
    }
    
    return (
        <section id='setupBoard'>
            <div id="setup">
                <label htmlFor="orientation">Orientation:</label>
                <select name="orientation" defaultValue="down" ref={orientationSelection} id="orientation" onChange={changeOrientation}>
                    <option value="up">Up</option>
                    <option value="right">Right</option>
                    <option value="down">Down</option>
                    <option value="left">Left</option>
                </select>
            </div>
            <div id='gameboard'>
                <div className='competitor-side' id='playerSide'>
                    <h2 className="text-center">Set Your Ships</h2>
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
                                <Tile id={key} key={key} selected={false} highlight={highlight} dim={dim} placeShip={placeShip} owner='nobody' condition={player.gameboard.board[key]} />
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

export default Setup