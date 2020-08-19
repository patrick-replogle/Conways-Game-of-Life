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
      <button onClick={startGame} className="button">
        Start
      </button>
      <button onClick={pauseGame} className="button">
        Pause
      </button>
      <button onClick={clearBoard} className="button">
        Clear
      </button>
    </div>
  );
};

export default GridButtons;
