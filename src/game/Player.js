import gameboard from "./Gameboard";

const player = (type, firstName) => {
    let moveCount = 0
    let playedMoves = []

    const randomAttack = () => {
        const x_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        const y_array = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
        let x = x_array[Math.floor(Math.random() * x_array.length)];
        let y = y_array[Math.floor(Math.random() * y_array.length)];
        moveCount++
        playedMoves.push(x + y)
        return x + y
    }

    return {
        type: type,
        firstName: firstName,
        moveCount,
        playedMoves,
        gameboard: gameboard(),
        randomAttack
    }
}

export default player;
//module.exports = player;