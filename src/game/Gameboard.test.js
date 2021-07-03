const gameboard = require('./Gameboard');
const ship = require('./Ship');

let newBoard = gameboard()
const shipTest = ship(1, 4, 'A1', 'Down')
const ship1 = ship(1, 3, 'D5', 'Left')
const ship2 = ship(5, 5, 'J1', 'Down')
const ship3 = ship(3, 2, 'B10', 'Right')
const ships = [ship1, ship2, ship3]

beforeAll(() => {
    newBoard = gameboard()

})

test('Place Ship along top left corner', () =>
    expect(newBoard.placeShip(
        shipTest
    )).toMatchObject({A1: 'ship', B1: 'ocean', C1: 'ocean', D1: 'ocean', E1: 'ocean', F1: 'ocean', G1: 'ocean', H1: 'ocean', I1: 'ocean', J1: 'ocean', A2: 'ship', B2: 'ocean', C2: 'ocean', D2: 'ocean', E2: 'ocean', F2: 'ocean', G2: 'ocean', H2: 'ocean', I2: 'ocean', J2: 'ocean',
             A3: 'ship', B3: 'ocean', C3: 'ocean', D3: 'ocean', E3: 'ocean', F3: 'ocean', G3: 'ocean', H3: 'ocean', I3: 'ocean', J3: 'ocean', A4: 'ship', B4: 'ocean', C4: 'ocean', D4: 'ocean', E4: 'ocean', F4: 'ocean', G4: 'ocean', H4: 'ocean', I4: 'ocean', J4: 'ocean', 
             A5: 'ocean', B5: 'ocean', C5: 'ocean', D5: 'ocean', E5: 'ocean', F5: 'ocean', G5: 'ocean', H5: 'ocean', I5: 'ocean', J5: 'ocean', A6: 'ocean', B6: 'ocean', C6: 'ocean', D6: 'ocean', E6: 'ocean', F6: 'ocean', G6: 'ocean', H6: 'ocean', I6: 'ocean', J6: 'ocean', 
             A7: 'ocean', B7: 'ocean', C7: 'ocean', D7: 'ocean', E7: 'ocean', F7: 'ocean', G7: 'ocean', H7: 'ocean', I7: 'ocean', J7: 'ocean', A8: 'ocean', B8: 'ocean', C8: 'ocean', D8: 'ocean', E8: 'ocean', F8: 'ocean', G8: 'ocean', H8: 'ocean', I8: 'ocean', J8: 'ocean', 
             A9: 'ocean', B9: 'ocean', C9: 'ocean', D9: 'ocean', E9: 'ocean', F9: 'ocean', G9: 'ocean', H9: 'ocean', I9: 'ocean', J9: 'ocean', A10: 'ocean', B10: 'ocean', C10: 'ocean', D10: 'ocean', E10: 'ocean', F10: 'ocean', G10: 'ocean', H10: 'ocean', I10: 'ocean', J10: 'ocean'})
)

test('Every Ship Sunk', () =>
    expect(newBoard.isAllSunk(
        [
            { condition: ['attacked', 'ocean', 'ocean', 'attacked', 'ocean'] },
            { condition: ['ocean', 'ocean', 'attacked', 'attacked'] },
            { condition: ['ocean', 'attacked', 'attacked'] },
            { condition: ['ocean', 'attacked', 'ocean'] },
            { condition: ['attacked', 'attacked'] }
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
