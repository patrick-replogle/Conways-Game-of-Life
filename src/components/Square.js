import React from "react";

const Square = ({ square }) => {
  const toggleStatus = () => {
    // add logic here
  };
  return (
    <div
      style={{ width: "20px", height: "20px", border: "1px solid black" }}
      onClick={() => toggleStatus()}
    ></div>
  );
};

export default Square;
