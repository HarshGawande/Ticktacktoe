function checkWin(grid, player) {
    const size = grid.length;

    // Check rows
    for (let row of grid) {
        if (row.every(cell => cell === player)) return true;
    }

    // Check columns
    for (let col = 0; col < size; col++) {
        let win = true;
        for (let row = 0; row < size; row++) {
            if (grid[row][col] !== player) {
                win = false;
                break;
            }
        }
        if (win) return true;
    }

    // Diagonal top-left to bottom-right
    if (grid.every((row, i) => row[i] === player)) return true;

    // Diagonal top-right to bottom-left
    if (grid.every((row, i) => row[size - 1 - i] === player)) return true;

    return false;
}

function checkDraw(grid) {
    return grid.flat().every(cell => cell !== '^');
}

module.exports = { checkWin, checkDraw };
