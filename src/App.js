import React from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";

import Rules from "./components/Rules";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Grid />
      <Rules />
    </div>
  );
};

export default App;
