import React, { useState } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import GridButtons from "./components/GridButtons";
import Presets from "./components/Presets";
import Rules from "./components/Rules";

import { createNewBoard } from "./functions";

import "./App.css";

const App = () => {
  const [genCount, setGenCount] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [gridSize, setGridSize] = useState(25);
  const [board, setBoard] = useState(createNewBoard(gridSize));

  return (
    <div className="App">
      <Header />
      <Grid />
    </div>
  );
};

export default App;
