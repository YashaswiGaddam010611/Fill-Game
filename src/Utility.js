import { games } from "./PreMadeGames";
import { EMPTY, FILLED } from "./PreMadeGames";

const pathColor = ['red', 'brown', 'green', 'orange', 'yellow'];

export const isWin = (grid) => {
  for (let row of grid) {
    for (let cell of row) {
      if (cell === EMPTY) return false;
    }
  }
  return true;
};

export const reducer = (state, action) => {
  const { grid, history } = state;
  const { row, col } = action.payload;
  const newGrid = grid.map((row) => [...row.map((cell) => cell)]);
  let updatedHistory = history.map((obj) => ({ row: obj.row, col: obj.col }));
  switch (action.type) {
    case "UNDO":
      let top = history.length - 1;
      console.log("history: ", history);
      while (
        top >= 1 &&
        !(history[top].row == row && history[top].col == col)
      ) {
        let topRow = history[top].row;
        let topCol = history[top].col;
        newGrid[topRow][topCol] = EMPTY;
        updatedHistory = updatedHistory.slice(0, updatedHistory.length - 1);
        top--;
      }
      return {
        ...state,
        grid: newGrid,
        history: updatedHistory,
      };

    case "EXPAND":
      newGrid[row][col] = FILLED;
      updatedHistory.push({ row, col });

      return {
        ...state,
        grid: newGrid,
        history: updatedHistory,
      };

    case "RESTART":
      let game = games[action.payload.level % games.length];
      action.payload.updateLevel((prevLevel) => prevLevel+1);
      return {
        grid: game.grid,
        history: game.history,
        pathColor: pathColor[Math.floor(Math.random()*4)]
      };
    default:
      return state;
  }
};