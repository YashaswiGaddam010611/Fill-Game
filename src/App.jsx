import { useReducer, useState } from "react";
import { reducer } from "./Utility";
import { isWin } from "./Utility";
import "./App.css";
import Board from "./components/Board";
import { games } from "./PreMadeGames";

export const INITIAL_GRID = games[0].grid;
export const INITIAL_HISTORY = games[0].history;

function App() {
  const [state, dispatch] = useReducer(reducer, {
    grid: INITIAL_GRID,
    history: INITIAL_HISTORY,
    pathColor: 'red'
  });
  const [level, setLevel] = useState(1);
  if (isWin(state.grid)) {
    return (
      <>
        <div className="win-banner">YOU WON</div>
        <button
          onClick={() => {
            dispatch({ type: "RESTART", payload: { row: 0, col: 0, level: level, updateLevel: setLevel} });
          }}
        >
          NEXT
        </button>
      </>
    );
  }
  return (
    <>
      <Board state={state} dispatch={dispatch}/>
    </>
  );
}

export default App;
