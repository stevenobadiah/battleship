const gameboard = () => {
    let hitCount = 0;
    let missCount = 0;
    
    let board = {A1: 'ocean', B1: 'ocean', C1: 'ocean', D1: 'ocean', E1: 'ocean', F1: 'ocean', G1: 'ocean', H1: 'ocean', I1: 'ocean', J1: 'ocean', A2: 'ocean', B2: 'ocean', C2: 'ocean', D2: 'ocean', E2: 'ocean', F2: 'ocean', G2: 'ocean', H2: 'ocean', I2: 'ocean', J2: 'ocean',
                     A3: 'ocean', B3: 'ocean', C3: 'ocean', D3: 'ocean', E3: 'ocean', F3: 'ocean', G3: 'ocean', H3: 'ocean', I3: 'ocean', J3: 'ocean', A4: 'ocean', B4: 'ocean', C4: 'ocean', D4: 'ocean', E4: 'ocean', F4: 'ocean', G4: 'ocean', H4: 'ocean', I4: 'ocean', J4: 'ocean', 
                     A5: 'ocean', B5: 'ocean', C5: 'ocean', D5: 'ocean', E5: 'ocean', F5: 'ocean', G5: 'ocean', H5: 'ocean', I5: 'ocean', J5: 'ocean', A6: 'ocean', B6: 'ocean', C6: 'ocean', D6: 'ocean', E6: 'ocean', F6: 'ocean', G6: 'ocean', H6: 'ocean', I6: 'ocean', J6: 'ocean', 
                     A7: 'ocean', B7: 'ocean', C7: 'ocean', D7: 'ocean', E7: 'ocean', F7: 'ocean', G7: 'ocean', H7: 'ocean', I7: 'ocean', J7: 'ocean', A8: 'ocean', B8: 'ocean', C8: 'ocean', D8: 'ocean', E8: 'ocean', F8: 'ocean', G8: 'ocean', H8: 'ocean', I8: 'ocean', J8: 'ocean', 
                     A9: 'ocean', B9: 'ocean', C9: 'ocean', D9: 'ocean', E9: 'ocean', F9: 'ocean', G9: 'ocean', H9: 'ocean', I9: 'ocean', J9: 'ocean', A10: 'ocean', B10: 'ocean', C10: 'ocean', D10: 'ocean', E10: 'ocean', F10: 'ocean', G10: 'ocean', H10: 'ocean', I10: 'ocean', J10: 'ocean'}

    function placeShip(ship) {
        let shipCoords = Object.keys(ship.shipCoordinates)
        for (let i = 0; i < shipCoords.length; i++) {
            board[shipCoords[i]] = 'ship'
        }
        return board
    }

    function identifyShip(ships, coordinates) {
        let hitShip = ships.find(ship => Object.keys(ship.shipCoordinates).includes(coordinates))
        return hitShip
    }

    function takeHit(ship, coordinates) {
        ship.shipCoordinates[coordinates] = 'attacked'
        console.log(ship.shipCoordinates)
    }

    function isSunk(ship) {
        if (Object.values(ship.shipCoordinates).includes('ship')) {
            return false;
        } else {
            return true
        }
    }

    function receiveAttack(ships, coordinates) {
        if (board[coordinates] === 'ship') {
            let hitShip = identifyShip(ships, coordinates)
            takeHit(hitShip, coordinates)
            hitCount ++;
            if (isSunk(hitShip) === true) {
                hitShip.sunk = true
                return 'Ship Sunk'
            } else {
                return 'Direct Hit'
            }
        } else if (board[coordinates] === 'ocean') {
            //board[coordinates] = '~';
            missCount ++
            return 'Miss'
        }
    }

    function isAllSunk(ships) {
        let count = 0

        ships.forEach(function(ship) {
            if (ship.sunk === true) {
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