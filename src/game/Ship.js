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
                    shipCoordinates[coordinates] = 'ship'
                }
                break;
            case 'Right':
                for (let i = 0; i < length; i++) {
                    let coordinates = (x_coordinates[x_coordinates.findIndex(x_coord => x_coord === x_coordinate) + i]) + y_coordinate
                    shipCoordinates[coordinates] = 'ship'
                }
                break;
            case 'Up':
                for (let i = 0; i < length; i++) {
                    let coordinates = x_coordinate + (y_coordinates[y_coordinates.findIndex(y_coord => y_coord === y_coordinate) + i])
                    shipCoordinates[coordinates] = 'ship'
                }
                break;
            case 'Down':
                for (let i = 0; i < length; i++) {
                    let coordinates = x_coordinate + (y_coordinates[y_coordinates.findIndex(y_coord => y_coord === y_coordinate) - i])
                    shipCoordinates[coordinates] = 'ship'
                }
                break;
            default:
                for (let i = 0; i < length; i++) {
                    let coordinates = x_coordinate + (y_coordinates[y_coordinates.findIndex(y_coord => y_coord === y_coordinate) - i])
                    shipCoordinates[coordinates] = 'ship'
                } 
        }
        return shipCoordinates
    }

    function takeHit(coordinates) {
        this.shipCoordinates[coordinates] = 'attacked'
    }

    return {
        shipId: shipId,
        length: length,
        anchor: anchor,
        direction: direction,
        sunk: false,
        shipCoordinates: createShipCoordinates(anchor, direction, length),
        takeHit
    }
};

export default ship;
//module.exports = ship;