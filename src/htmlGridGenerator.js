function toggleBlurEffect(element, shouldBlur) {            // such a powerful concept to toggle classes keep it in your mind
    if (shouldBlur) {
        element.classList.add('blur');
    } else {
        element.classList.remove('blur');
    }
}

function htmlGridGenerator(player, playerDiv){
    playerDiv.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        playerDiv.appendChild(gridRow);
        for (let j = 0; j < 10; j++) {
            const column = document.createElement('div');
            column.classList.add('grid-cell');
            column.setAttribute('data-coordinates', `[${i},${j}]`);
            // column.innerHTML = player.gameBoard.grid[i][j] ? 'S' : '';
            if(playerDiv.id === 'playerOneDiv'){
                toggleBlurEffect(column, false); 
            }
            else{
                toggleBlurEffect(column, true); 
            }
            gridRow.appendChild(column);
        }
    }
}

module.exports = {toggleBlurEffect, htmlGridGenerator};
