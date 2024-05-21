// randomShipGeneration.js
function randomNumberGenerate(maxNum){
    return Math.floor(Math.random() * maxNum);
}

function randomShipGeneration(length) {
    const orientations = ['horizontal', 'vertical'];
    const orientation = orientations[randomNumberGenerate(2)];
    const gameBoardSize = 10; // Assuming the game board is 10x10

    if (length >= 1 && length <= 4) {
        let x, y;

        if (orientation === 'horizontal') {
            x = randomNumberGenerate(gameBoardSize);
            y = randomNumberGenerate(gameBoardSize - length + 1);
        } else {
            x = randomNumberGenerate(gameBoardSize - length + 1);
            y = randomNumberGenerate(gameBoardSize);
        }

        return [length, [x, y], orientation];
    }

    return null; // If the length is not valid, return null
}

module.exports = { randomShipGeneration };
