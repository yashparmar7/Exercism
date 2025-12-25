export class GameOfLife {
  constructor(matrix) {
    this.grid = matrix.map(row => [...row]);
  }

  tick() {
    const rows = this.grid.length;
    const cols = rows ? this.grid[0].length : 0;

    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1],
    ];

    const nextGrid = this.grid.map(row => [...row]);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let liveNeighbors = 0;

        for (const [dr, dc] of directions) {
          const nr = r + dr;
          const nc = c + dc;

          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            this.grid[nr][nc] === 1
          ) {
            liveNeighbors++;
          }
        }

        if (this.grid[r][c] === 1) {
          // live cell rules
          if (liveNeighbors < 2 || liveNeighbors > 3) {
            nextGrid[r][c] = 0;
          }
        } else {
          // dead cell rule
          if (liveNeighbors === 3) {
            nextGrid[r][c] = 1;
          }
        }
      }
    }

    this.grid = nextGrid;
  }

  state() {
    return this.grid.map(row => [...row]);
  }
}
