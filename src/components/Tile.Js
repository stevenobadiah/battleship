import React from "react";

/*

export default Tile;

export default class Tile extends Component {
  render() {
    return (
      <div className="tile" id={props.id}>{props.id}</div>
    )
  }
}

class Tile extends React.Component {
  render() {
    return (
      <div className="tile" id={props.id}>{props.id}</div>
    )
  }
}

module.exports = Tile;
*/
function Tile(props) {
  return (
    <div className="tile" id={props.id}>{props.id}</div>
  )
}

export default Tile;
//module.exports = Tile;

