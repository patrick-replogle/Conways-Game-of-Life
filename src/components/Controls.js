import React from "react";

import { createNewBoard, updateBoard } from "../functions/game";
import { generateRandomBoard } from "../functions/presets";

const Controls = ({
  board,
  setBoard,
  gridSize,
  isGenerating,
  setIsGenerating,
  genCount,
  setGenCount,
  intervalId,
  setInvertalId,
  speed,
}) => {
  const startGame = () => {
    let intId = setInterval(() => {
      let newBoard = updateBoard(board);
      board = newBoard;
      setBoard(newBoard);
      setGenCount(genCount++);
    }, speed);
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

  const nextGeneration = (currBoard) => {
    let newBoard = updateBoard(currBoard);
    board = newBoard;
    setBoard(newBoard);
    setGenCount((genCount += 1));
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button
        onClick={() => {
          if (!isGenerating) {
            setIsGenerating(true);
            startGame();
          } else {
            pauseGame();
          }
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

      <button
        onClick={() => {
          setGenCount(0);
          clearInterval(intervalId);
          setIsGenerating(false);
          setBoard(generateRandomBoard(gridSize));
        }}
        className="gameButton"
        style={{ background: "purple" }}
      >
        Random
      </button>
      <button
        onClick={() => {
          nextGeneration(board);
        }}
        className="gameButton"
        style={{ background: "black" }}
      >
        Next Generation
      </button>
    </div>
  );
};

export default Controls;
