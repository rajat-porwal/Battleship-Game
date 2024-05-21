import {shipBuilding} from "./shipBuilding";
import { gameBoard } from './gameBoard';

const myGameBoard = new gameBoard(10); // 10x10 grid

// // Create a new ship with length 3
// const newShip = new shipBuilding(2);

// Place the ship on the game board at coordinates (0, 0) horizontally
const placementSuccess = myGameBoard.placeShipOnBoard(2, [0, 0], 'horizontal');
 console.log(myGameBoard.ships);

const attack1 = myGameBoard.receiveAttack([0,0]);
const attack2 = myGameBoard.receiveAttack([0,2]);
// const attack3 = myGameBoard.receiveAttack([0,2]);

console.log(myGameBoard.missedAttack);