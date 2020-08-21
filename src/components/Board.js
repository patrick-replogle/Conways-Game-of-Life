import React from "react";

import Cell from "./Cell";

const Board = ({ board, isGenerating, cellColor }) => {
  return (
    <div className="board">
      {board.map((arr, index) => {
        return (
          <div style={{ display: "flex", width: "100%" }} key={index}>
            {arr.map((square, index) => {
              return (
                <Cell
                  board={board}
                  square={square}
                  key={index}
                  isGenerating={isGenerating}
                  cellColor={cellColor}
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
