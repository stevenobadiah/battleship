const gameboard = () => {
    let hitCount = 0;
    let missCount = 0;
    
    let board = {A1: 'O', B1: 'O', C1: 'O', D1: 'O', E1: 'O', F1: 'O', G1: 'O', H1: 'O', I1: 'O', J1: 'O', A2: 'O', B2: 'O', C2: 'O', D2: 'O', E2: 'O', F2: 'O', G2: 'O', H2: 'O', I2: 'O', J2: 'O',
                     A3: 'O', B3: 'O', C3: 'O', D3: 'O', E3: 'O', F3: 'O', G3: 'O', H3: 'O', I3: 'O', J3: 'O', A4: 'O', B4: 'O', C4: 'O', D4: 'O', E4: 'O', F4: 'O', G4: 'O', H4: 'O', I4: 'O', J4: 'O', 
                     A5: 'O', B5: 'O', C5: 'O', D5: 'O', E5: 'O', F5: 'O', G5: 'O', H5: 'O', I5: 'O', J5: 'O', A6: 'O', B6: 'O', C6: 'O', D6: 'O', E6: 'O', F6: 'O', G6: 'O', H6: 'O', I6: 'O', J6: 'O', 
                     A7: 'O', B7: 'O', C7: 'O', D7: 'O', E7: 'O', F7: 'O', G7: 'O', H7: 'O', I7: 'O', J7: 'O', A8: 'O', B8: 'O', C8: 'O', D8: 'O', E8: 'O', F8: 'O', G8: 'O', H8: 'O', I8: 'O', J8: 'O', 
                     A9: 'O', B9: 'O', C9: 'O', D9: 'O', E9: 'O', F9: 'O', G9: 'O', H9: 'O', I9: 'O', J9: 'O', A10: 'O', B10: 'O', C10: 'O', D10: 'O', E10: 'O', F10: 'O', G10: 'O', H10: 'O', I10: 'O', J10: 'O'}

    function placeShip(ship) {
        let shipCoords = Object.keys(ship.shipCoordinates)
        for (let i = 0; i < shipCoords.length; i++) {
            board[shipCoords[i]] = '='
        }
        return board
    }

    function identifyShip(ships, coordinates) {
        let hitShip = ships.find(ship => Object.keys(ship.shipCoordinates).includes(coordinates))
        return hitShip
    }

    function receiveAttack(ships, coordinates) {
        if (board[coordinates] === '=') {
            board[coordinates] = 'X';
            let hitShip = identifyShip(ships, coordinates)
            hitShip.takeHit(coordinates)
            hitCount ++;
            if (hitShip.isSunk === true) {
                return 'Ship Sank'
            } else {
                return 'Direct Hit'
            }
        } else if (board[coordinates] === 'O') {
            board[coordinates] = '~';
            missCount ++
            return 'Miss'
        } else if (board[coordinates] === 'X') {
            return 'You already hit this space!';
        }
    }

    function isAllSunk(ships) {
        let count = 0

        ships.forEach(function(ship) {
            if (ship.isSunk === false) {
                count++
            }
        })

        if (count === 5) {
            return true
        } else {
            return false
        }
    }

    return {
        placeShip,
        receiveAttack,
        isAllSunk,
        identifyShip,
        board,
        hitCount,
        missCount
    }
}

export default gameboard;
//module.exports = gameboard;