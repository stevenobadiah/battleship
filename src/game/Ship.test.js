const ship = require('./Ship');

test('expect ship starting at d5 and 3 units long facing left to occupy tiles d5, c5, and b5', () => {
    expect(ship(1, 3, 'D5', 'Left').shipCoordinates).toStrictEqual({D5: 'ship', C5: 'ship', B5: 'ship'});
});

test('expect ship starting at j1 and 5 units long facing down to occupy tiles j1, j2, j3, j4, and j5', () => {
    expect(ship(5, 5, 'J1', 'Down').shipCoordinates).toStrictEqual({J1: 'ship', J2: 'ship', J3: 'ship', J4: 'ship', J5: 'ship'});
});

test('expect ship starting at b10 and 2 units long facing right to occupy tiles b10 and c10', () => {
    expect(ship(3, 2, 'B10', 'Right').shipCoordinates).toStrictEqual({B10: 'ship', C10: 'ship'});
});

test('expect ship starting at d5 and 4 units long facing up to occupy tiles d5, d6, d7, and d8', () => {
    expect(ship(4, 4, 'D5', 'Down').shipCoordinates).toStrictEqual({D5: 'ship', D6: 'ship', D7: 'ship', D8: 'ship'});
});