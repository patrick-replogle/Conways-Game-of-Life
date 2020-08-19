import React from "react";

import { createNewBoard } from "../functions";

const GridButtons = ({ setBoard, gridSize, setIsGenerating }) => {
  const startGame = () => {
    setIsGenerating(true);
  };

  const pauseGame = () => {
    setIsGenerating(false);
  };

  const clearBoard = () => {
    setIsGenerating(false);
    setBoard(createNewBoard(gridSize));
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <button
        onClick={startGame}
        className="gameButton"
        style={{ background: "green" }}
      >
        Start
      </button>

      <button
        onClick={pauseGame}
        className="gameButton"
        style={{ background: "orange" }}
      >
        Pause
      </button>

      <button
        onClick={clearBoard}
        className="gameButton"
        style={{ background: "red" }}
      >
        Clear
      </button>
    </div>
  );
};

export default GridButtons;
