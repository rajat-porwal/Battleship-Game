import {shipBuilding} from "./shipBuilding";
import { gameBoard } from './gameBoard';
import { player } from "./player";
import { htmlGridGenerator, toggleBlurEffect } from "./htmlGridGenerator";
import './style.css';

function toggleTurn(){
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    console.log(`It's now ${currentPlayer.playerName}'s turn`);
    if (currentPlayer.isComputer) {                     // i was stuck as to how will i simulate pc's turn but this is how to do it
        computerPlay();
    }
}

const playerOne = new player('rajat', false, 10);
const playerTwo = new player('pc', true, 10);
let currentPlayer = playerOne;

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
playerOneDiv.id = 'playerOneDiv';   //added this id part only cuz of I dont want the player one to be blurred its used in htmlgrid part
playerOneDiv.classList.add('gameboard');
mainDiv.appendChild(playerOneDiv);

const playerTwoDiv = document.createElement('div');
playerTwoDiv.id = 'playerTwoDiv';
playerTwoDiv.classList.add('gameboard');
mainDiv.appendChild(playerTwoDiv);

htmlGridGenerator(playerOne, playerOneDiv);
htmlGridGenerator(playerTwo, playerTwoDiv);

function computerPlay() {
    const attackFromPc = playerOne.receiveAttack();
    const clickedX = attackFromPc[0];
    const clickedY = attackFromPc[1];
    const clickedCell = playerOne.gameBoard.grid[clickedX][clickedY];

    const targetCell = playerOneDiv.querySelector(`[data-coordinates="[${clickedX},${clickedY}]"]`);
    if (clickedCell) {
        targetCell.innerHTML = 'S';
    } else {
        targetCell.innerHTML = 'X';
    }
    toggleTurn();
}

function letsPlay(){
    // playerOneDiv.addEventListener('click', (e) => {
    //     if(currentPlayer === playerTwo){
    //         const attackFromPc = playerOne.receiveAttack();
    //         const clickedX = attackFromPc.x;
    //         const clickedY = attackFromPc.y;
    //         const clickedCell = playerOne.gameBoard.grid[clickedX][clickedY];
    //         if(clickedCell){
    //             // column.classList.remove('grid-cell-hidden');
    //             // column.classList.add('grid-cell');
    //             console.log(`Clicked on cell [${clickedX},${clickedY}]`);
    //             e.target.innerHTML = 'S';
    //         }
    //         else{
    //             console.log(playerOne.gameBoard.missedAttack);
    //             e.target.innerHTML = 'X';
    //         }
    //         toggleTurn();
    //     }
    // })

    playerTwoDiv.addEventListener('click', (e) => {
        if(currentPlayer === playerOne){
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
            toggleTurn();
        }
    })
}

letsPlay();


