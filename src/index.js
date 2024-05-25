import { randomShipGeneration } from "./randomShipGeneration";
import { player } from "./player";
import { htmlGridGenerator, toggleBlurEffect } from "./htmlGridGenerator";
import './style.css';

const playerOne = new player('rajat', false, 10);
const playerTwo = new player('pc', true, 10);
let currentPlayer = playerOne;

const container = document.createElement('div');    //shifting welcome message, mainDIv and Button inside it to use flex on it to display things
container.classList.add('container');
document.body.appendChild(container);

const welcomeMessage = document.createElement('div');
welcomeMessage.classList.add('welcome-message');
welcomeMessage.innerText = 'Welcome to Battleship! Click the "Random Ship Placement" button to start the game.';
container.appendChild(welcomeMessage);

const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
container.appendChild(mainDiv);

const btn = document.createElement('button');
btn.innerText = 'Random Ship Placement';
btn.id = 'generateShipsButton';
container.appendChild(btn);

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
    if(targetCell.innerHTML ){
        currentPlayer = playerOne;
        toggleTurn();
    }
    else{
        if (clickedCell) {
            targetCell.innerHTML = 'S';
            if(playerOne.gameBoard.allShipsSunken()){
                currentPlayer = null;
                alert('Game Over');
                return;                 // this return statement I could not think of to exit code when game is over
            }
        } else {
            targetCell.innerHTML = 'X';
        }
        toggleTurn(); 
    }
}


btn.addEventListener('click', () => {
    clearGameBoard(playerOne.gameBoard);

    const shipLengths = { 4: 1, 3: 2, 2: 3, 1: 4 };
    for (const [length, count] of Object.entries(shipLengths)) {
        for (let i = 0; i < count; i++) {
            let placed = false;
            while (!placed) {           // i put this code in randomship genrtor but it caused problem as gameboard wasnt defined or player in that module
                const [shipLength, coordinates, orientation] = randomShipGeneration(Number(length));
                placed = playerOne.gameBoard.placeShipOnBoard(shipLength, coordinates, orientation);
            }
        }
    }
    htmlGridGenerator(playerOne, playerOneDiv);
    console.log(playerOne.gameBoard.ships);

    clearGameBoard(playerTwo.gameBoard);
    for (const [length, count] of Object.entries(shipLengths)) {
        for (let i = 0; i < count; i++) {
            let placed = false;
            while (!placed) {
                const [shipLength, coordinates, orientation] = randomShipGeneration(Number(length));
                placed = playerTwo.gameBoard.placeShipOnBoard(shipLength, coordinates, orientation);
            }
        }
    }
    htmlGridGenerator(playerTwo, playerTwoDiv);
    console.log(playerTwo.gameBoard.ships);
});

function toggleTurn(){
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    console.log(`It's now ${currentPlayer.playerName}'s turn`);
    if (currentPlayer.isComputer) {                     // i was stuck as to how will i simulate pc's turn but this is how to do it
        computerPlay();
    }
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
            if(e.target.innerHTML ){         // to give the same player chance again if clicked on same block
                currentPlayer = playerTwo;
                toggleTurn();
            }
            else{
                toggleBlurEffect(e.target, false);
            const clickedCoordinates = JSON.parse(e.target.getAttribute('data-coordinates'));
            const clickedX = clickedCoordinates[0];
            const clickedY = clickedCoordinates[1];
            
            // Retrieve the ship object or null from the gameboard grid at clicked coordinates
            const clickedCell = playerTwo.gameBoard.grid[clickedX][clickedY];
            playerTwo.receiveAttack([clickedX, clickedY]);
            if(clickedCell){
                e.target.classList.add('hit-cell');
                // column.classList.remove('grid-cell-hidden');
                // column.classList.add('grid-cell');
                console.log(`Clicked on cell [${clickedX},${clickedY}]`);
                e.target.innerHTML = 'S';
                if(playerTwo.gameBoard.allShipsSunken()){
                    currentPlayer = null;
                    alert('Game Over');
                    return;                 // this return statement I could not think of to exit code when game is over
                }
            }
            else{
                e.target.classList.add('miss-cell');
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
            
        }
    })

    playerOneDiv.addEventListener('click', () => {          //so that when the game starts button gets disabled
       btn.disabled = true;
    });
    playerTwoDiv.addEventListener('click', () => {
       btn.disabled = true;
    });
}

letsPlay();



function clearGameBoard(gameBoard) {            // I was confused as to how to clear the previous ships when the button is clicked this is how I had to
    gameBoard.grid = Array.from({ length: 10 }, () => Array(10).fill(null));
    gameBoard.ships = [];
    gameBoard.missedAttack = [];
}



