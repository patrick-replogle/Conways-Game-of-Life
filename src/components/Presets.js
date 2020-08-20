import React, { useState } from "react";

import { createNewBoard } from "../functions";

const Presets = ({ gridSize, setBoard }) => {
  const [input, setInput] = useState("");

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

  const presetTwo = (gridSize) => {
    let newBoard = createNewBoard(gridSize);
    newBoard[5][9]["status"] = 1;
    newBoard[6][9]["status"] = 1;
    newBoard[7][9]["status"] = 1;
    newBoard[7][10]["status"] = 1;

    newBoard[5][15]["status"] = 1;
    newBoard[6][15]["status"] = 1;
    newBoard[7][15]["status"] = 1;
    newBoard[7][14]["status"] = 1;

    newBoard[10][7]["status"] = 1;
    newBoard[9][7]["status"] = 1;
    newBoard[9][6]["status"] = 1;
    newBoard[9][5]["status"] = 1;

    newBoard[10][17]["status"] = 1;
    newBoard[9][17]["status"] = 1;
    newBoard[9][18]["status"] = 1;
    newBoard[9][19]["status"] = 1;

    newBoard[14][7]["status"] = 1;
    newBoard[15][7]["status"] = 1;
    newBoard[15][6]["status"] = 1;
    newBoard[15][5]["status"] = 1;

    newBoard[17][10]["status"] = 1;
    newBoard[17][9]["status"] = 1;
    newBoard[18][9]["status"] = 1;
    newBoard[19][9]["status"] = 1;

    newBoard[17][14]["status"] = 1;
    newBoard[17][15]["status"] = 1;
    newBoard[18][15]["status"] = 1;
    newBoard[19][15]["status"] = 1;

    newBoard[14][17]["status"] = 1;
    newBoard[15][17]["status"] = 1;
    newBoard[15][18]["status"] = 1;
    newBoard[15][19]["status"] = 1;

    newBoard[9][10]["status"] = 1;
    newBoard[9][11]["status"] = 1;
    newBoard[10][11]["status"] = 1;
    newBoard[11][10]["status"] = 1;
    newBoard[11][9]["status"] = 1;
    newBoard[10][9]["status"] = 1;

    newBoard[9][14]["status"] = 1;
    newBoard[9][13]["status"] = 1;
    newBoard[10][13]["status"] = 1;
    newBoard[11][14]["status"] = 1;
    newBoard[11][15]["status"] = 1;
    newBoard[10][15]["status"] = 1;

    newBoard[13][15]["status"] = 1;
    newBoard[13][14]["status"] = 1;
    newBoard[14][15]["status"] = 1;
    newBoard[15][14]["status"] = 1;
    newBoard[15][13]["status"] = 1;
    newBoard[14][13]["status"] = 1;

    newBoard[13][10]["status"] = 1;
    newBoard[13][9]["status"] = 1;
    newBoard[14][9]["status"] = 1;
    newBoard[15][10]["status"] = 1;
    newBoard[15][11]["status"] = 1;
    newBoard[14][11]["status"] = 1;

    return newBoard;
  };

  const pulsarGenerator = (gridSize) => {
    let newBoard = createNewBoard(gridSize);
    newBoard[10][12]["status"] = 1;
    newBoard[11][13]["status"] = 1;
    newBoard[11][12]["status"] = 1;
    newBoard[11][11]["status"] = 1;
    newBoard[12][11]["status"] = 1;
    newBoard[13][11]["status"] = 1;
    newBoard[13][12]["status"] = 1;
    newBoard[14][12]["status"] = 1;
    newBoard[13][13]["status"] = 1;
    newBoard[12][13]["status"] = 1;

    return newBoard;
  };

  const queenBeeShuttle = (gridSize) => {
    let newBoard = createNewBoard(gridSize);
    newBoard[13][1]["status"] = 1;
    newBoard[13][2]["status"] = 1;
    newBoard[14][2]["status"] = 1;
    newBoard[14][1]["status"] = 1;
    newBoard[13][21]["status"] = 1;
    newBoard[13][22]["status"] = 1;
    newBoard[14][22]["status"] = 1;
    newBoard[14][21]["status"] = 1;

    newBoard[13][6]["status"] = 1;
    newBoard[14][7]["status"] = 1;
    newBoard[12][7]["status"] = 1;
    newBoard[11][8]["status"] = 1;
    newBoard[15][8]["status"] = 1;
    newBoard[15][10]["status"] = 1;
    newBoard[16][10]["status"] = 1;
    newBoard[14][9]["status"] = 1;
    newBoard[13][9]["status"] = 1;
    newBoard[12][9]["status"] = 1;
    newBoard[11][10]["status"] = 1;
    newBoard[10][10]["status"] = 1;

    return newBoard;
  };

  const handleChange = (e) => {
    e.target.input = e.target.value;
    setBoard(input);
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
        <button onClick={() => setBoard(presetTwo(gridSize))}>Preset 2</button>
        <p>description</p>
      </div>

      <div style={{ display: "flex" }}>
        <button onClick={() => setBoard(queenBeeShuttle(gridSize))}>
          Preset 3
        </button>
        <p>description</p>
      </div>

      <div style={{ display: "flex" }}>
        <button>Preset 4</button>
        <p>description</p>
      </div>

      <select onChange={handleChange} value={input}>
        <option></option>
        <option>Flower of Eden</option>
        <option value="Pulsar">Pulsar</option>
        <option>Spaceship</option>
        <option>Circle of Fire</option>
        <option>Glidar</option>
        <option>Still Life</option>
        <option>Pulsar Generator</option>
        <option>R-Pentomino</option>
        <option>Pentadecathlon</option>
        <option>Queen Bee Shuttle</option>
        <option>Random</option>
      </select>
    </div>
  );
};

export default Presets;
