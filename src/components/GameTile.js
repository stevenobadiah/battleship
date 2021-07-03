import React from "react";

function GameTile(props) {

  return (
    <div 
      className={"tile"}
      onClick={props.attack}
      id={props.id}>
    </div>
  )
}

export default GameTile;
//module.exports = Tile;

