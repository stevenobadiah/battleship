const ship = require('./Ship');

test('expect ship starting at d5 and 3 units long facing left to occupy tiles d5, c5, and b5', () => {
    expect(ship(1, 3, 'D5', 'Left').shipCoordinates).toStrictEqual({D5: 'O', C5: 'O', B5: 'O'});
});

test('expect ship starting at j1 and 5 units long facing down to occupy tiles j1, j2, j3, j4, and j5', () => {
    expect(ship(5, 5, 'J1', 'Down').shipCoordinates).toStrictEqual({J1: 'O', J2: 'O', J3: 'O', J4: 'O', J5: 'O'});
});

test('expect ship starting at b10 and 2 units long facing right to occupy tiles b10 and c10', () => {
    expect(ship(3, 2, 'B10', 'Right').shipCoordinates).toStrictEqual({B10: 'O', C10: 'O'});
});

test('expect ship starting at d5 and 4 units long facing up to occupy tiles d5, d6, d7, and d8', () => {
    expect(ship(4, 4, 'D5', 'Down').shipCoordinates).toStrictEqual({D5: 'O', D6: 'O', D7: 'O', D8: 'O'});
});