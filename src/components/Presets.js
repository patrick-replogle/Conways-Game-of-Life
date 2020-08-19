import React from "react";

const Presets = ({ gridSize, setBoard }) => {
  const createRandomBoard = (size) => {
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

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex" }}>
        <button onClick={() => setBoard(createRandomBoard(gridSize))}>
          Preset 1
        </button>
        <p>Preset 1 will generate a random board of live and dead cells</p>
      </div>

      <div style={{ display: "flex" }}>
        <button>Preset 2</button>
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
