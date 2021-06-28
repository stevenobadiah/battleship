const ship = ( shipId, length, anchor, direction ) => {
    let shipCoordinates = {}
    
    function createShipCoordinates(anchor, direction, length) {
        const x_coordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        const y_coordinates = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']

        let x_coordinate = anchor.substring(0, 1)
        let y_coordinate = anchor.substring(1)
        let shipCoordinates = {}

        switch (direction) {
            case 'Left':
                for (let i = 0; i < length; i++) {
                    let coordinates = (x_coordinates[x_coordinates.findIndex(x_coord => x_coord === x_coordinate) - i]) + y_coordinate
                    shipCoordinates[coordinates] = 'O'
                }
                break;
            case 'Right':
                for (let i = 0; i < length; i++) {
                    let coordinates = (x_coordinates[x_coordinates.findIndex(x_coord => x_coord === x_coordinate) + i]) + y_coordinate
                    shipCoordinates[coordinates] = 'O'
                }
                break;
            case 'Up':
                for (let i = 0; i < length; i++) {
                    let coordinates = x_coordinate + (y_coordinates[y_coordinates.findIndex(y_coord => y_coord === y_coordinate) + i])
                    shipCoordinates[coordinates] = 'O'
                }
                break;
            case 'Down':
                for (let i = 0; i < length; i++) {
                    let coordinates = x_coordinate + (y_coordinates[y_coordinates.findIndex(y_coord => y_coord === y_coordinate) - i])
                    shipCoordinates[coordinates] = 'O'
                }
                break;
            default:
                for (let i = 0; i < length; i++) {
                    let coordinates = x_coordinate + (y_coordinates[y_coordinates.findIndex(y_coord => y_coord === y_coordinate) - i])
                    shipCoordinates[coordinates] = 'O'
                } 
        }
        return shipCoordinates
    }

    function takeHit(coordinates) {
        this.shipCoordinates[coordinates] = 'X'
    }

    const isSunk = () => {
        if (Object.values(shipCoordinates).includes('O')) {
            return false;
        } else {
            return true
        }
    }

    return {
        shipId: shipId,
        length: length,
        anchor: anchor,
        direction: direction,
        shipCoordinates: createShipCoordinates(anchor, direction, length),
        takeHit,
        isSunk
    }
};

export default ship;
//module.exports = ship;