import React, { useState } from "react";

import { createNewBoard, generateNewBoard } from "../functions";

const GridButtons = ({
  board,
  setBoard,
  gridSize,
  isGenerating,
  setIsGenerating,
  genCount,
  setGenCount,
}) => {
  const [intervalId, setInvertalId] = useState(null);

  const startGame = () => {
    let intId = setInterval(async () => {
      let newBoard = await generateNewBoard(board);
      setBoard(newBoard);
      setGenCount(genCount + 1);
    }, 500);
    setInvertalId(intId);
  };

  const pauseGame = () => {
    setIsGenerating(false);
    clearInterval(intervalId);
  };

  const clearBoard = () => {
    setIsGenerating(false);
    setBoard(createNewBoard(gridSize));
    setGenCount(0);
    clearInterval(intervalId);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <button
        onClick={() => {
          setIsGenerating(true);
          startGame();
        }}
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
