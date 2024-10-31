import { EMPTY, FILLED, OBSTACLE } from "../PreMadeGames";

export default function Board({ state, dispatch }) {
  const cellInHistory = (row, col) => {
    for(let cell of state.history) {
      if(cell.row === row && cell.col === col) return true;
    }
    return false;
  }

  const isNeighbourOfTop = (row, col) => {
    let n = state.history.length;
    if(n > 0) {
      let topCell = state.history[n-1];
      //check for up, down, left, right of top cell
      if((topCell.row > 0 && row == topCell.row-1 && col == topCell.col) ||
         (topCell.row < state.grid.length-1 && row == topCell.row+1 && col == topCell.col) ||
         (topCell.col > 0 && row == topCell.row && col == topCell.col-1) ||
         (topCell.col < state.grid[row].length-1 && row == topCell.row && col == topCell.col+1)) {
          return true;
         }
    }
    return false;
  }

  const handleMouseEnter = (row, col) => {
    if(cellInHistory(row, col)) {
      dispatch({type: 'UNDO', payload: {row, col}});
      console.log("undo dispatched");
    } else if(isNeighbourOfTop(row, col)) {
      dispatch({type: 'EXPAND', payload: {row, col}});
      console.log("expand dispatched");
    }
  }

  return (
    <>
      <div className="board">
        {state.grid.map((row, rowIndex) => (
          <div className="board-row" key={rowIndex}>
            {row.map((square, colIndex) => (
              <div
                key={`${rowIndex} ${colIndex}`}
                style={{backgroundColor: `${square === FILLED ? state.pathColor : ''}`}}
                className={`square ${square == EMPTY && "empty-cell"} ${
                  square == OBSTACLE && "obstacle-cell"
                } ${
                  (square == FILLED) && "filled-cell"
                } ${square == state.grid[state.grid.length-1] && "top-cell"}`}
                onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
