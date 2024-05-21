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
            case 3:
            case 4:
                if (orientation === 'horizontal') {
                    // Check for overlap in ship placement
                    for (let i = 0; i < length; i++) {
                        if (y + i > maxBoundary[1] || this.grid[x][y + i]) {
                            return false; // Overlap detected or out of bounds
                        }
                    }
                    return true; // No overlap detected
                } else if (orientation === 'vertical') {
                    // Check for overlap in ship placement
                    for (let i = 0; i < length; i++) {
                        if (x + i > maxBoundary[0] || this.grid[x + i][y]) {
                            return false; // Overlap detected or out of bounds
                        }
                    }
                    return true; // No overlap detected
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
      receiveAttack(attackCoordinates) {
        const x = attackCoordinates[0];
        const y = attackCoordinates[1];
        let hit = false;    // this is also a nice way to switch to missing attack instead of using else block keep it in mind to use in other codes
    
        for (let i = 0; i < this.ships.length; i++) {
            const ship = this.ships[i];
            if (this.grid[x][y] === ship) {
                if (!ship.isSunk()) {
                    ship.shipHit();
                    hit = true;
                    console.log('Ship hit!');
                    if (ship.isSunk()) {
                        this.ships.splice(i, 1); // Remove sunken ship from ships 
                        console.log('Ship sunk!');
                        if (this.allShipsSunken()) {
                            console.log('Game over');
                        }
                    }
                }
            }
        }
    
        if (!hit) {
            console.log('Missed it!');
            this.missedAttack.push(attackCoordinates);
        }
    }
    
      /* problem with my this logic is every time I am clicking on any ship it is iterating over
      all the ships and which is making the else part of this code being executed every time */
      // receiveAttack(attackCoordinates){
      //   const x = attackCoordinates[0];
      //   const y = attackCoordinates[1];
        
      //   for(const ship of this.ships){
      //       if(this.grid[x][y] === ship){
      //           if(!ship.isSunk()){
      //               ship.shipHit();
      //               if(ship.isSunk()){
      //                   this.ships.pop(ship);
      //               console.log('ship gone');
      //               if(this.allShipsSunken()){
      //                 console.log('game over');
      //               }
      //               break;
      //               }
      //               console.log('shi hit');
      //               break;
                    
      //           }
      //           else{
      //               this.ships.pop(ship);
      //               console.log('ship gone');
      //               if(this.allShipsSunken()){
      //                 console.log('game over');
      //               }
      //               break;
      //           }
      //       }
      //       else{
      //           console.log('missed it');
      //           this.missedAttack.push(attackCoordinates);
      //       }
      //   }
      // }
}

module.exports = { gameBoard };