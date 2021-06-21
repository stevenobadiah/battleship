import React from "react";

function Tile(props) {

/*
  function click(gameActive) {
    swith (gameActive) {
      case 'inactive':
        break;
      case 'setup':
        console.log("put down a ship");
        break;
      case 'active':
        console.log("attack!!!");
        break;
      default:
        console.log("nothing selected");
        break;
    }
  }
  */

  return (
    <div className="tile" onClick={() => click(owner, gameActive)} id={props.id}>{props.condition}</div>
  )
}

export default Tile;
//module.exports = Tile;

