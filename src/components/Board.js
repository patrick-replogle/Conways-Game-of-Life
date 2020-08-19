import React from "react";

import Square from "react";

const Board = ({ board }) => {
  return (
    <div style={{ width: "60%", height: "400px", border: "1px solid black" }}>
      {/* {board.map((arr, index) => {
        return (
          <div
            style={{ display: "flex", width: "100%", height: "16px" }}
            key={index}
          >
            {arr.map((square, index) => {
              return <Square board={board} square={square} key={index} />;
            })}
          </div>
        );
      })} */}
    </div>
  );
};

export default Board;
