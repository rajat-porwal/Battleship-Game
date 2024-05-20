const gridSize = 10;
const grid = Array(gridSize)            
              .fill(null)               
              .map(() => Array(gridSize).fill(null));

function legalPlacement(length, coordinates, orientation) {
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

class gameBoard{
    shipPlacement(length, coordinates){ //thinking about what else parameters I can pass down in this method
        
    }
}

module.exports = {
    gridSize,
    grid,
    legalPlacement,
    gameBoard
  };