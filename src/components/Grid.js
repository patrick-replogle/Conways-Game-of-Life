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
      <h3>Generations: {genCount}</h3>
      <Board board={board} setBoard={setBoard} isGenerating={isGenerating} />
      <GridButtons
        board={board}
        setBoard={setBoard}
        gridSize={gridSize}
        isGenerating={isGenerating}
        setIsGenerating={setIsGenerating}
        genCount={genCount}
        setGenCount={setGenCount}
      />
      <Presets />
    </div>
  );
};

export default Grid;
