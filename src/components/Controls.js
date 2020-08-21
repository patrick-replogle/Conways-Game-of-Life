import React, { useState, useEffect } from "react";

import { togglePresets } from "../functions/presets";

const Controls = ({
  gridSize,
  setGridSize,
  setBoard,
  setIsGenerating,
  intervalId,
  setGenCount,
  speed,
  setSpeed,
}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    togglePresets(input, setBoard, gridSize);
  }, [setInput, input, setBoard, gridSize]);

  const handleSelect = (e) => {
    setInput(e.target.value);
    setIsGenerating(false);
    clearInterval(intervalId);
    setGenCount(0);
  };

  const handleSpeed = (e) => {
    setSpeed(e.target.value);
  };

  const handleBoardSize = (e) => {
    setIsGenerating(false);
    clearInterval(intervalId);
    setGridSize(e.target.value);
    setGenCount(0);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-evenly",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label>Presets</label>
        <select onChange={handleSelect} value={input} className="inputField">
          <option value="none">Choose a Preset</option>
          <option value="acorn">Acorn</option>
          <option value="flower of eden">Flower of Eden</option>
          <option value="pulsar">Pulsar</option>
          <option value="spaceship">Spaceship</option>
          <option value="circle of fire">Circle of Fire</option>
          <option value="glidar">Glidar</option>
          <option value="still life">Still Life</option>
          <option value="pulsar generator">Pulsar Generator</option>
          <option value="r-pentomino">R-Pentomino</option>
          <option value="pentadecatchlon">Pentadecathlon</option>
          <option value="queen bee shuttle">Queen Bee Shuttle</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label>Speed</label>
        <input
          className="inputField"
          onChange={handleSpeed}
          value={speed}
          type="number"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label>Board Size</label>
        <select
          onChange={handleBoardSize}
          value={gridSize}
          className="inputField"
        >
          <option value={25}>Normal</option>
          <option value={35}>Larger</option>
          <option value={40}>Largerest</option>
        </select>
      </div>
    </div>
  );
};

export default Controls;
