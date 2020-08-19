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
      <button onClick={startGame}>Start</button>
      <button onClick={pauseGame}>Pause</button>
      <button onClick={clearBoard}>Clear</button>
    </div>
  );
};

export default GridButtons;
