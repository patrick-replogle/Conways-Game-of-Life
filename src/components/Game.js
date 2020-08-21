import React, { useState } from "react";

import Board from "./Board";
import Buttons from "./Buttons";
import Controls from "./Controls";
import Header from "./Header";
import Footer from "./Footer";

import { createNewBoard } from "../functions/game";

const Game = () => {
  const [genCount, setGenCount] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [gridSize, setGridSize] = useState(25);
  const [board, setBoard] = useState(createNewBoard(gridSize));
  const [intervalId, setInvertalId] = useState(null);
  const [speed, setSpeed] = useState(100);
  const [cellColor, setCellColor] = useState("random");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />
      <Controls
        setBoard={setBoard}
        gridSize={gridSize}
        setGridSize={setGridSize}
        setIsGenerating={setIsGenerating}
        setGenCount={setGenCount}
        intervalId={intervalId}
        speed={speed}
        setSpeed={setSpeed}
        cellColor={cellColor}
        setCellColor={setCellColor}
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

      <Board board={board} isGenerating={isGenerating} cellColor={cellColor} />
      <h4 style={{ marginTop: "1%" }}>Generation: {genCount}</h4>
      <Footer />
    </div>
  );
};

export default Game;
