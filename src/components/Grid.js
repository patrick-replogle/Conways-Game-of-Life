import React, { useState } from "react";

import Board from "./Board";
import GridButtons from "./GridButtons";
import Presets from "./Presets";

import { createNewBoard } from "../functions";

const Grid = () => {
  const [genCount, setGenCount] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [gridSize, setGridSize] = useState(25);
  const [board, setBoard] = useState(createNewBoard(gridSize));
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Board board={board} setBoard={setBoard} />
      <GridButtons setBoard={setBoard} gridSize={gridSize} />
      <Presets />
    </div>
  );
};

export default Grid;
