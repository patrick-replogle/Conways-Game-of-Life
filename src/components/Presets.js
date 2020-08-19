import React from "react";

import { createNewBoard } from "../functions";

const Presets = ({ gridSize, setBoard }) => {
  const generateRandomBoard = (size) => {
    let mainArray = [];

    for (let i = 0; i < size; i++) {
      let subArray = [];
      for (let j = 0; j < size; j++) {
        subArray.push({ status: Math.round(Math.random()), location: [i, j] });
      }
      mainArray.push(subArray);
    }
    return mainArray;
  };

  const presetTwo = (size) => {
    let newBoard = createNewBoard(size);
    newBoard[5][12]["status"] = 1;
    newBoard[5][13]["status"] = 1;
    newBoard[5][14]["status"] = 1;
    setBoard(newBoard);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex" }}>
        <button onClick={() => setBoard(generateRandomBoard(gridSize))}>
          Preset 1
        </button>
        <p>Preset 1 will generate a random board of live and dead cells</p>
      </div>

      <div style={{ display: "flex" }}>
        <button onClick={() => presetTwo(gridSize)}>Preset 2</button>
        <p>description</p>
      </div>

      <div style={{ display: "flex" }}>
        <button>Preset 3</button>
        <p>description</p>
      </div>

      <div style={{ display: "flex" }}>
        <button>Preset 4</button>
        <p>description</p>
      </div>
    </div>
  );
};

export default Presets;
