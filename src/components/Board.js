import React from "react";

import Square from "./Square";

const Board = ({ board }) => {
  return (
    <div style={{ border: "1px solid black", marginBottom: "10px" }}>
      {board.map((arr, index) => {
        return (
          <div style={{ display: "flex", width: "100%" }} key={index}>
            {arr.map((square, index) => {
              return <Square board={board} square={square} key={index} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
