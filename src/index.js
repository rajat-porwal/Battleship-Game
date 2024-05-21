import {shipBuilding} from "./shipBuilding";
import { gameBoard } from './gameBoard';
import { player } from "./player";
import './style.css';

function toggleBlurEffect(element, shouldBlur) {
    if (shouldBlur) {
        element.classList.add('blur');
    } else {
        element.classList.remove('blur');
    }
}

const playerOne = new player('rajat', false, 10);
const playerTwo = new player('pc', true, 10);

playerOne.placeShip(4, [0,0], 'horizontal');
playerOne.placeShip(3, [0,4], 'horizontal');
playerOne.placeShip(3, [0,7], 'horizontal');
playerOne.placeShip(2, [1,0], 'horizontal');
playerOne.placeShip(2, [1,2], 'horizontal');
playerOne.placeShip(2, [1,4], 'horizontal');
playerOne.placeShip(1, [1,6], 'horizontal');
playerOne.placeShip(1, [1,7], 'horizontal');
playerOne.placeShip(1, [1,8], 'horizontal');
playerOne.placeShip(1, [1,9], 'horizontal');

playerTwo.placeShip(4, [0,0], 'horizontal');
playerTwo.placeShip(3, [0,4], 'horizontal');
playerTwo.placeShip(3, [0,7], 'horizontal');
playerTwo.placeShip(2, [1,0], 'horizontal');
playerTwo.placeShip(2, [1,2], 'horizontal');
playerTwo.placeShip(2, [1,4], 'horizontal');
playerTwo.placeShip(1, [1,6], 'horizontal');
playerTwo.placeShip(1, [1,7], 'horizontal');
playerTwo.placeShip(1, [1,8], 'horizontal');
playerTwo.placeShip(1, [1,9], 'horizontal');

const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
document.body.appendChild(mainDiv);

const playerOneDiv = document.createElement('div');
playerOneDiv.classList.add('gameboard');
mainDiv.appendChild(playerOneDiv);

// Generate the grid for player one's gameboard
for (let i = 0; i < 10; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    playerOneDiv.appendChild(gridRow);
    for (let j = 0; j < 10; j++) {
        const column = document.createElement('div');
        column.classList.add('grid-cell');
        column.setAttribute('data-coordinates', `[${i},${j}]`);
        column.innerHTML = playerOne.gameBoard.grid[i][j] ? 'S' : ''; // Display 'S' for ship
        gridRow.appendChild(column);
    }
}

const playerTwoDiv = document.createElement('div');
playerTwoDiv.classList.add('gameboard');
mainDiv.appendChild(playerTwoDiv);

// Generate the grid for player one's gameboard
for (let i = 0; i < 10; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    playerTwoDiv.appendChild(gridRow);
    for (let j = 0; j < 10; j++) {
        const column = document.createElement('div');
        column.classList.add('grid-cell');
        toggleBlurEffect(column, true);
        column.setAttribute('data-coordinates', `[${i},${j}]`);
        // column.innerHTML = playerOne.gameBoard.grid[i][j] ? 'S' : ''; // Display 'S' for ship
        gridRow.appendChild(column);
    }
}

playerTwoDiv.addEventListener('click', (e) => {
    toggleBlurEffect(e.target, false);
    const clickedCoordinates = JSON.parse(e.target.getAttribute('data-coordinates'));
    const clickedX = clickedCoordinates[0];
    const clickedY = clickedCoordinates[1];

    // Retrieve the ship object or null from the gameboard grid at clicked coordinates
    const clickedCell = playerTwo.gameBoard.grid[clickedX][clickedY];
    playerTwo.receiveAttack([clickedX, clickedY]);
    if(clickedCell){
        // column.classList.remove('grid-cell-hidden');
        // column.classList.add('grid-cell');
        console.log(`Clicked on cell [${clickedX},${clickedY}]`);
        e.target.innerHTML = 'S';
    }
    else{
        console.log(playerTwo.gameBoard.missedAttack);
        e.target.innerHTML = 'X';
    }
    // if (clickedCell) {
    //     // Perform action here, e.g., receive attack
    //     playerTwo.receiveAttack([clickedX, clickedY]);
    //     // Update UI or game state as needed
    //     console.log(`Clicked on cell [${clickedX},${clickedY}]`);
    //     console.log('Performing attack or other action...');
    // } else {
    //     // Handle missed attack or invalid click if needed
    //     playerTwo.;
    // }
})

// const myGameBoard = new gameBoard(10); // 10x10 grid
// // // Create a new ship with length 3
// // const newShip = new shipBuilding(2);

// // Place the ship on the game board at coordinates (0, 0) horizontally

// const placementSuccess = myGameBoard.placeShipOnBoard(1, [0, 0], 'horizontal');
//  console.log(myGameBoard.ships);

// const attack1 = myGameBoard.receiveAttack([0,0]);
// const attack2 = myGameBoard.receiveAttack([0,2]);
// // const attack3 = myGameBoard.receiveAttack([0,2]);

// console.log(myGameBoard.missedAttack);