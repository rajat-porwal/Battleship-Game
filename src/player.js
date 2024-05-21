const gameBoard = require('./gameBoard').gameBoard;

class player{
    constructor(name, isComputer, gridSize){
        this.playerName = name;
        this.isComputer = isComputer;       //its  a nice trick to differentiate between a computer and a human based on true false flag of it
        this.gameBoard = new gameBoard(gridSize);
    }

    placeShip(length, coordinates, orientation) {
         this.gameBoard.placeShipOnBoard(length, coordinates, orientation);
    }

    randomNumberGenerate(){
        var randomNumber = Math.floor(Math.random() * 10);
        return randomNumber;
    }

    receiveAttack(attackCoordinates){
        if(!this.isComputer){
            const x = this.randomNumberGenerate();
            const y = this.randomNumberGenerate();
            this.gameBoard.receiveAttack([x, y]);
            return [x, y];
        }
        else{
            this.gameBoard.receiveAttack(attackCoordinates);
        }
    }


}
module.exports = {player};