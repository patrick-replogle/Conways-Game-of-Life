import React from "react";

import { createNewBoard } from "../functions";

const GridButtons = ({ setBoard, gridSize }) => {
  const startGame = () => {
    // logic goes here
  };

  const pauseGame = () => {
    // logic goes here
  };

  const clearBoard = () => {
    setBoard(createNewBoard(gridSize));
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <button>Start</button>
      <button>Pause</button>
      <button onClick={clearBoard}>Clear</button>
    </div>
  );
};

export default GridButtons;
