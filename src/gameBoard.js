const shipBuilding = require("./shipBuilding").shipBuilding;


class gameBoard{
    constructor(gridSize) {
        this.gridSize = gridSize;   // didn't click first to add this.grid as part of  constructor keep it in mind
        this.grid = Array(this.gridSize)
          .fill(null)
          .map(() => Array(this.gridSize).fill(null));
        this.ships = []; //didnt think of having an array of ships either before what i can do now is pop every ship if its sunken and if in last array is empty i can end the game
        this.missedAttack = [];
      } 
           /*I was thinking always in terms of having a div and filling it with inner text that marks the ship instead
           of creating an array and initializing it to null and then later finding a way to create equal number of divs
           and later populating them with these array items  */

    checkLegalPlacement(length, coordinates, orientation) {
        const x = coordinates[0];
        const y = coordinates[1];
        const minBoundary = [0, 0];
        const maxBoundary = [this.gridSize - 1, this.gridSize - 1];
      
        switch (length) {
          case 1:
            if (orientation === 'horizontal') {
              if (y >= minBoundary[1] && y <= maxBoundary[1] &&
                  x >= minBoundary[0] && x <= maxBoundary[0] && !this.grid[x][y]) {
                return true;
              }
            } else if (orientation === 'vertical') {
              if (x >= minBoundary[0] && x <= maxBoundary[0] &&
                  y >= minBoundary[1] && y <= maxBoundary[1] && !this.grid[x][y]) {
                return true;
              }
            }
            break;
          case 2:
            if (orientation === 'horizontal') {
              if (y + 1 <= maxBoundary[1] && x >= minBoundary[0] && x <= maxBoundary[0] &&
                  !this.grid[x][y] && !this.grid[x][y + 1]) {
                return true;
              }
            } else if (orientation === 'vertical') {
              if (x + 1 <= maxBoundary[0] && y >= minBoundary[1] && y <= maxBoundary[1] &&
                  !this.grid[x][y] && !this.grid[x + 1][y]) {
                return true;
              }
            }
            break;
          case 3:
            if (orientation === 'horizontal') {
              if (y + 2 <= maxBoundary[1] && x >= minBoundary[0] && x <= maxBoundary[0] &&
                  !this.grid[x][y] && !this.grid[x][y + 1] && !this.grid[x][y + 2]) {
                return true;
              }
            } else if (orientation === 'vertical') {
              if (x + 2 <= maxBoundary[0] && y >= minBoundary[1] && y <= maxBoundary[1] &&
                  !this.grid[x][y] && !this.grid[x + 1][y] && !this.grid[x + 2][y]) {
                return true;
              }
            }
            break;
          case 4:
            if (orientation === 'horizontal') {
              if (y + 3 <= maxBoundary[1] && x >= minBoundary[0] && x <= maxBoundary[0] &&
                  !this.grid[x][y] && !this.grid[x][y + 1] && !this.grid[x][y + 2] && !this.grid[x][y + 3]) {
                return true;
              }
            } else if (orientation === 'vertical') {
              if (x + 3 <= maxBoundary[0] && y >= minBoundary[1] && y <= maxBoundary[1] &&
                  !this.grid[x][y] && !this.grid[x + 1][y] && !this.grid[x + 2][y] && !this.grid[x + 3][y]) {
                return true;
              }
            }
            break;
          default:
            return false;
        }
      
        return false;
      }

      allShipsSunken(){
        if(this.ships.length === 0){
          return true;
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

      receiveAttack(attackCoordinates){
        const x = attackCoordinates[0];
        const y = attackCoordinates[1];
        
        for(const ship of this.ships){
            if(this.grid[x][y] === ship){
                if(!ship.isSunk()){
                    ship.shipHit();
                    if(ship.isSunk()){
                        this.ships.pop(ship);
                    console.log('ship gone');
                    if(this.allShipsSunken()){
                      console.log('game over');
                    }
                    break;
                    }
                    console.log('shi hit');
                    break;
                    
                }
                else{
                    this.ships.pop(ship);
                    console.log('ship gone');
                    if(this.allShipsSunken()){
                      console.log('game over');
                    }
                    break;
                }
            }
            else{
                console.log('missed it');
                this.missedAttack.push(attackCoordinates);
            }
        }
      }
}

module.exports = { gameBoard };