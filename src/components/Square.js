import React, { useState } from "react";

const Square = ({ square, board, isGenerating }) => {
  const [box, setBox] = useState(square.status);

  const toggleStatus = (square) => {
    const { status, location } = square;

    if (!isGenerating && status === 0) {
      board[location[0]][location[1]]["status"] = 1;
      setBox(square.status);
    } else if (!isGenerating && status === 1) {
      board[location[0]][location[1]]["status"] = 0;
      setBox(square.status);
    }
  };

  return (
    <div
      style={{ width: "15px", height: "15px", border: "1px solid black" }}
      onClick={() => toggleStatus(square)}
      className={square.status === 0 ? "dead" : "alive"}
    ></div>
  );
};

export default Square;
