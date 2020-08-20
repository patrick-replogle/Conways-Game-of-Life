import { createNewBoard } from "./index";

export const pulsar = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[5][9]["status"] = 1;
  newBoard[6][9]["status"] = 1;
  newBoard[7][9]["status"] = 1;
  newBoard[7][10]["status"] = 1;

  newBoard[5][15]["status"] = 1;
  newBoard[6][15]["status"] = 1;
  newBoard[7][15]["status"] = 1;
  newBoard[7][14]["status"] = 1;

  newBoard[10][7]["status"] = 1;
  newBoard[9][7]["status"] = 1;
  newBoard[9][6]["status"] = 1;
  newBoard[9][5]["status"] = 1;

  newBoard[10][17]["status"] = 1;
  newBoard[9][17]["status"] = 1;
  newBoard[9][18]["status"] = 1;
  newBoard[9][19]["status"] = 1;

  newBoard[14][7]["status"] = 1;
  newBoard[15][7]["status"] = 1;
  newBoard[15][6]["status"] = 1;
  newBoard[15][5]["status"] = 1;

  newBoard[17][10]["status"] = 1;
  newBoard[17][9]["status"] = 1;
  newBoard[18][9]["status"] = 1;
  newBoard[19][9]["status"] = 1;

  newBoard[17][14]["status"] = 1;
  newBoard[17][15]["status"] = 1;
  newBoard[18][15]["status"] = 1;
  newBoard[19][15]["status"] = 1;

  newBoard[14][17]["status"] = 1;
  newBoard[15][17]["status"] = 1;
  newBoard[15][18]["status"] = 1;
  newBoard[15][19]["status"] = 1;

  newBoard[9][10]["status"] = 1;
  newBoard[9][11]["status"] = 1;
  newBoard[10][11]["status"] = 1;
  newBoard[11][10]["status"] = 1;
  newBoard[11][9]["status"] = 1;
  newBoard[10][9]["status"] = 1;

  newBoard[9][14]["status"] = 1;
  newBoard[9][13]["status"] = 1;
  newBoard[10][13]["status"] = 1;
  newBoard[11][14]["status"] = 1;
  newBoard[11][15]["status"] = 1;
  newBoard[10][15]["status"] = 1;

  newBoard[13][15]["status"] = 1;
  newBoard[13][14]["status"] = 1;
  newBoard[14][15]["status"] = 1;
  newBoard[15][14]["status"] = 1;
  newBoard[15][13]["status"] = 1;
  newBoard[14][13]["status"] = 1;

  newBoard[13][10]["status"] = 1;
  newBoard[13][9]["status"] = 1;
  newBoard[14][9]["status"] = 1;
  newBoard[15][10]["status"] = 1;
  newBoard[15][11]["status"] = 1;
  newBoard[14][11]["status"] = 1;

  return newBoard;
};

export const pulsarGenerator = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[10][12]["status"] = 1;
  newBoard[11][13]["status"] = 1;
  newBoard[11][12]["status"] = 1;
  newBoard[11][11]["status"] = 1;
  newBoard[12][11]["status"] = 1;
  newBoard[13][11]["status"] = 1;
  newBoard[13][12]["status"] = 1;
  newBoard[14][12]["status"] = 1;
  newBoard[13][13]["status"] = 1;
  newBoard[12][13]["status"] = 1;

  return newBoard;
};

export const pentadecathlon = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[12][7]["status"] = 1;
  newBoard[12][8]["status"] = 1;
  newBoard[12][9]["status"] = 1;
  newBoard[12][10]["status"] = 1;
  newBoard[12][11]["status"] = 1;
  newBoard[12][12]["status"] = 1;
  newBoard[12][13]["status"] = 1;
  newBoard[12][14]["status"] = 1;
  newBoard[12][15]["status"] = 1;
  newBoard[12][16]["status"] = 1;

  return newBoard;
};

export const generateRandomBoard = (size) => {
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

export const queenBeeShuttle = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[13][1]["status"] = 1;
  newBoard[13][2]["status"] = 1;
  newBoard[14][2]["status"] = 1;
  newBoard[14][1]["status"] = 1;
  newBoard[13][21]["status"] = 1;
  newBoard[13][22]["status"] = 1;
  newBoard[14][22]["status"] = 1;
  newBoard[14][21]["status"] = 1;

  newBoard[13][6]["status"] = 1;
  newBoard[14][7]["status"] = 1;
  newBoard[12][7]["status"] = 1;
  newBoard[11][8]["status"] = 1;
  newBoard[15][8]["status"] = 1;
  newBoard[15][10]["status"] = 1;
  newBoard[16][10]["status"] = 1;
  newBoard[14][9]["status"] = 1;
  newBoard[13][9]["status"] = 1;
  newBoard[12][9]["status"] = 1;
  newBoard[11][10]["status"] = 1;
  newBoard[10][10]["status"] = 1;

  return newBoard;
};
