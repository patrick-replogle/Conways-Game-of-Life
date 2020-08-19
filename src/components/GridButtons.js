import React, { useState } from "react";

import { createNewBoard, generateNewBoard } from "../functions";

const GridButtons = ({
  board,
  setBoard,
  gridSize,
  setIsGenerating,
  genCount,
  setGenCount,
}) => {
  const [intervalId, setInvertalId] = useState(null);

  const startGame = () => {
    let intId = setInterval(() => {
      let newBoard = generateNewBoard(board);
      board = newBoard;
      setBoard(newBoard);
      setGenCount(genCount++);
    }, 200);
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
