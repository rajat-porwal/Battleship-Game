const { default: shipBuilding } = require("./shipBuilding");

class gameBoard{
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.grid = Array(gridSize)
          .fill(null)
          .map(() => Array(gridSize).fill(null));
        this.ships = [];
      } 
           /*I was thinking always in terms of having a div and filling it with inner text that marks the ship instead
           of creating an array and initializing it to null and then later finding a way to create equal number of divs
           and later populating them with these array items  */
              

    checkLegalPlacement(length, coordinates, orientation) {
        const gridSize = 10; 
        const x = coordinates[0];
        const y = coordinates[1];
        const minBoundary = [0, 0];
        const maxBoundary = [gridSize - 1, gridSize - 1];
      
        switch (length) {
          case 1:
            if (orientation === 'horizontal') {
              if (y >= minBoundary[1] && y <= maxBoundary[1] &&
                  x >= minBoundary[0] && x <= maxBoundary[0]) {
                return true;
              }
            } else if (orientation === 'vertical') {
              if (x >= minBoundary[0] && x <= maxBoundary[0] &&
                  y >= minBoundary[1] && y <= maxBoundary[1]) {
                return true;
              }
            }
            break;
          case 2:
            if (orientation === 'horizontal') {
              if (y + 1 <= maxBoundary[1] && x >= minBoundary[0] && x <= maxBoundary[0] &&
                  !grid[x][y] && !grid[x][y + 1]) {
                return true;
              }
            } else if (orientation === 'vertical') {
              if (x + 1 <= maxBoundary[0] && y >= minBoundary[1] && y <= maxBoundary[1] &&
                  !grid[x][y] && !grid[x + 1][y]) {
                return true;
              }
            }
            break;
          case 3:
            if (orientation === 'horizontal') {
              if (y + 2 <= maxBoundary[1] && x >= minBoundary[0] && x <= maxBoundary[0] &&
                  !grid[x][y] && !grid[x][y + 1] && !grid[x][y + 2]) {
                return true;
              }
            } else if (orientation === 'vertical') {
              if (x + 2 <= maxBoundary[0] && y >= minBoundary[1] && y <= maxBoundary[1] &&
                  !grid[x][y] && !grid[x + 1][y] && !grid[x + 2][y]) {
                return true;
              }
            }
            break;
          case 4:
            if (orientation === 'horizontal') {
              if (y + 3 <= maxBoundary[1] && x >= minBoundary[0] && x <= maxBoundary[0] &&
                  !grid[x][y] && !grid[x][y + 1] && !grid[x][y + 2] && !grid[x][y + 3]) {
                return true;
              }
            } else if (orientation === 'vertical') {
              if (x + 3 <= maxBoundary[0] && y >= minBoundary[1] && y <= maxBoundary[1] &&
                  !grid[x][y] && !grid[x + 1][y] && !grid[x + 2][y] && !grid[x + 3][y]) {
                return true;
              }
            }
            break;
          default:
            return false;
        }
      
        return false;
      }
      placeShipOnBoard(length, coordinates, orientation) {
        if (this.checkLegalPlacement(length, coordinates, orientation)) {
          const [x, y] = coordinates;
          const ship = new shipBuilding(length);
    
          switch (orientation) {
            case 'horizontal':
              for (let i = 0; i < length; i++) {
                this.grid[x][y + i] = ship;
              }
              break;
            case 'vertical':
              for (let i = 0; i < length; i++) {
                this.grid[x + i][y] = ship;
              }
              break;
          }
    
          this.ships.push(ship);
          return true;
        }
        return false;
      }
}

module.exports = {
    gridSize,
    grid,
    checkLegalPlacement,
    gameBoard
  };