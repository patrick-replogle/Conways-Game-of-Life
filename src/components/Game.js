import React, { useState } from "react";

import Board from "./Board";
import Buttons from "./Buttons";
import Controls from "./Controls";

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
      <Controls
        setBoard={setBoard}
        gridSize={gridSize}
        setGridSize={setGridSize}
        setIsGenerating={setIsGenerating}
        setGenCount={setGenCount}
        intervalId={intervalId}
        speed={speed}
        setSpeed={setSpeed}
      />

      <Buttons
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
      <h4 style={{ marginTop: "1%" }}>Generation: {genCount}</h4>
    </div>
  );
};

export default Game;
