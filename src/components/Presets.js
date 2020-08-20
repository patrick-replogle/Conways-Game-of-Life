import React, { useState, useEffect } from "react";

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

  const acorn = (gridSize) => {
    let newBoard = createNewBoard(gridSize);
    newBoard[8][13]["status"] = 1;
    newBoard[10][13]["status"] = 1;
    newBoard[10][12]["status"] = 1;
    newBoard[9][15]["status"] = 1;
    newBoard[10][16]["status"] = 1;
    newBoard[10][17]["status"] = 1;
    newBoard[10][18]["status"] = 1;

    return newBoard;
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input === "none") {
      setBoard(createNewBoard(gridSize));
    } else if (input === "1") {
      setBoard(generateRandomBoard(gridSize));
    }
  }, [setInput, input, setBoard, gridSize]);

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex" }}>
        <button onClick={() => setBoard(generateRandomBoard(gridSize))}>
          Preset 1
        </button>
        <p>Preset 1 will generate a random board of live and dead cells</p>
      </div>

      <div style={{ display: "flex" }}>
        <button onClick={() => setBoard(acorn(gridSize))}>Preset 3</button>
        <p>description</p>
      </div>

      <div style={{ display: "flex" }}>
        <button>Preset 4</button>
        <p>description</p>
      </div>

      <select onChange={handleChange} value={input}>
        <option value="none">Choose a Preset</option>
        <option value="1">Random</option>
        <option value={2}>Flower of Eden</option>
        <option value={3}>Pulsar</option>
        <option value={4}>Spaceship</option>
        <option value={5}>Circle of Fire</option>
        <option value={6}>Glidar</option>
        <option value={7}>Still Life</option>
        <option value={8}>Pulsar Generator</option>
        <option value={9}>R-Pentomino</option>
        <option value={10}>Pentadecathlon</option>
        <option value={11}>Queen Bee Shuttle</option>
      </select>
    </div>
  );
};

export default Presets;
