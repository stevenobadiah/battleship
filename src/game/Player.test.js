const player = require('./Player');

let newPlayer
const x_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const y_array = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']

beforeEach(() => {
    newPlayer = player()
})

test('randomAttack should return random letter-number coordinates', () => {
    let attack = newPlayer.randomAttack()
    expect(x_array).toContain(attack[0])
    expect(y_array).toContain(attack[1])
    expect(Number(attack[1])).toBeGreaterThanOrEqual(1)
    expect(Number(attack[1])).toBeLessThanOrEqual(10)
    expect(newPlayer.playedMoves).toContain(attack)
})

test('randomAttack should store its coordinates', () => {
    let attack = newPlayer.randomAttack()
    expect(newPlayer.playedMoves).toContain(attack)
})