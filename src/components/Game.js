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
  const [speed, setSpeed] = useState(100);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Presets
        setBoard={setBoard}
        gridSize={gridSize}
        setGridSize={setGridSize}
        setIsGenerating={setIsGenerating}
        setGenCount={setGenCount}
        intervalId={intervalId}
        speed={speed}
        setSpeed={setSpeed}
      />

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
        speed={speed}
      />
      <Board board={board} setBoard={setBoard} isGenerating={isGenerating} />
      <h4>Generation: {genCount}</h4>
    </div>
  );
};

export default Game;
