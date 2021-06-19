const gameboard = require('./Gameboard');
const ship = require('./Ship');

let newBoard = gameboard()
const shipTest = ship(1, 4, 'A1', 'down')
const ship1 = ship(1, 3, 'D5', 'left')
const ship2 = ship(5, 5, 'J1', 'down')
const ship3 = ship(3, 2, 'B10', 'right')
const ships = [ship1, ship2, ship3]

beforeAll(() => {
    newBoard = gameboard()

})

test('Place Ship along top left corner', () =>
    expect(newBoard.placeShip(
        shipTest
    )).toMatchObject({A1: '=', B1: 'O', C1: 'O', D1: 'O', E1: 'O', F1: 'O', G1: 'O', H1: 'O', I1: 'O', J1: 'O', A2: '=', B2: 'O', C2: 'O', D2: 'O', E2: 'O', F2: 'O', G2: 'O', H2: 'O', I2: 'O', J2: 'O',
             A3: '=', B3: 'O', C3: 'O', D3: 'O', E3: 'O', F3: 'O', G3: 'O', H3: 'O', I3: 'O', J3: 'O', A4: '=', B4: 'O', C4: 'O', D4: 'O', E4: 'O', F4: 'O', G4: 'O', H4: 'O', I4: 'O', J4: 'O', 
             A5: 'O', B5: 'O', C5: 'O', D5: 'O', E5: 'O', F5: 'O', G5: 'O', H5: 'O', I5: 'O', J5: 'O', A6: 'O', B6: 'O', C6: 'O', D6: 'O', E6: 'O', F6: 'O', G6: 'O', H6: 'O', I6: 'O', J6: 'O', 
             A7: 'O', B7: 'O', C7: 'O', D7: 'O', E7: 'O', F7: 'O', G7: 'O', H7: 'O', I7: 'O', J7: 'O', A8: 'O', B8: 'O', C8: 'O', D8: 'O', E8: 'O', F8: 'O', G8: 'O', H8: 'O', I8: 'O', J8: 'O', 
             A9: 'O', B9: 'O', C9: 'O', D9: 'O', E9: 'O', F9: 'O', G9: 'O', H9: 'O', I9: 'O', J9: 'O', A10: 'O', B10: 'O', C10: 'O', D10: 'O', E10: 'O', F10: 'O', G10: 'O', H10: 'O', I10: 'O', J10: 'O'})
)

test('Every Ship Sunk', () =>
    expect(newBoard.isAllSunk(
        [
            { condition: ['X', 'O', 'O', 'X', 'O'] },
            { condition: ['O', 'O', 'X', 'X'] },
            { condition: ['O', 'X', 'X'] },
            { condition: ['O', 'X', 'O'] },
            { condition: ['X', 'X'] }
        ]
    )).toBe(false)
)

describe('Successful Attacks', () => {
    beforeAll(() => {
        newBoard = gameboard()
        newBoard.placeShip(ship1)
        newBoard.placeShip(ship2)
        newBoard.placeShip(ship3)
    })

    test('Receive Attack', () =>
        expect(newBoard.receiveAttack(ships, 'C5')).toBe('Direct Hit')
    )

    test('Receive missed Attack', () =>
        expect(newBoard.receiveAttack(ships, 'D1')).toBe('Miss')
    )

    test('Identify Ship', () =>
        expect(newBoard.identifyShip(ships, 'J1')).toBe(ship2)
    )
})
