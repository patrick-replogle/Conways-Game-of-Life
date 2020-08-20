import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";

import Rules from "./components/Rules";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Game />
      <Rules />
    </div>
  );
};

export default App;
