import React from "react";

import Square from "./Square";

const Board = ({ board, isGenerating }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      {board.map((arr, index) => {
        return (
          <div style={{ display: "flex", width: "100%" }} key={index}>
            {arr.map((square, index) => {
              return (
                <Square
                  board={board}
                  square={square}
                  key={index}
                  isGenerating={isGenerating}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
