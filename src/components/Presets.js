import React, { useState, useEffect } from "react";

import { togglePresets } from "../functions/presets";

const Presets = ({
  gridSize,
  setBoard,
  setIsGenerating,
  intervalId,
  setGenCount,
}) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    setIsGenerating(false);
    clearInterval(intervalId);
    setGenCount(0);
  };

  useEffect(() => {
    togglePresets(input, setBoard, gridSize);
  }, [setInput, input, setBoard, gridSize]);

  return (
    <div style={{ marginTop: "20px" }}>
      <select onChange={handleChange} value={input}>
        <option value="none">Choose a Preset</option>
        <option value="random">Random</option>
        <option value="acorn">Acorn</option>
        {/* <option value="flower of eden">Flower of Eden</option> */}
        <option value="pulsar">Pulsar</option>
        <option value="spaceship">Spaceship</option>
        {/* <option value="circle of fire">Circle of Fire</option>
        <option value="glidar">Glidar</option> */}
        <option value="still life">Still Life</option>
        <option value="pulsar generator">Pulsar Generator</option>
        {/* <option value="r-pentomino">R-Pentomino</option> */}
        <option value="pentadecatchlon">Pentadecathlon</option>
        <option value="queen bee shuttle">Queen Bee Shuttle</option>
      </select>
    </div>
  );
};

export default Presets;
