import React, { useState } from "react";

import Board from "./Board";
import Controls from "./Controls";
import Presets from "./Presets";

import { createNewBoard } from "../functions/game";

const Game = () => {
  const [genCount, setGenCount] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [gridSize, setGridSize] = useState(25);
  const [board, setBoard] = useState(createNewBoard(gridSize));
  const [intervalId, setInvertalId] = useState(null);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Generations: {genCount}</h3>
      <Board board={board} setBoard={setBoard} isGenerating={isGenerating} />
      <Controls
        board={board}
        setBoard={setBoard}
        gridSize={gridSize}
        isGenerating={isGenerating}
        setIsGenerating={setIsGenerating}
        genCount={genCount}
        setGenCount={setGenCount}
        intervalId={intervalId}
        setInvertalId={setInvertalId}
      />
      <Presets
        setBoard={setBoard}
        gridSize={gridSize}
        setIsGenerating={setIsGenerating}
        setGenCount={setGenCount}
        intervalId={intervalId}
        setGenCount={setGenCount}
      />
    </div>
  );
};

export default Game;
