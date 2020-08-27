import { createNewBoard } from "./game";

export const togglePresets = (input, cb, size) => {
  switch (input) {
    case "none":
      cb(createNewBoard(size));
      break;
    case "random":
      cb(generateRandomBoard(size));
      break;
    case "acorn":
      cb(acorn(size));
      break;
    case "still life":
      cb(stillLife(size));
      break;
    case "pulsar":
      cb(pulsar(size));
      break;
    case "pulsar generator":
      cb(pulsarGenerator(size));
      break;
    case "queen bee shuttle":
      cb(queenBeeShuttle(size));
      break;
    case "spaceship":
      cb(spaceShips(size));
      break;
    case "pentadecatchlon":
      cb(pentadecathlon(size));
      break;
    case "flower of eden":
      cb(flowerOfEden(size));
      break;
    case "r-pentomino":
      cb(rPentomino(size));
      break;
    case "circle of fire":
      cb(circleOfFire(size));
      break;
    case "glidar":
      cb(glidar(size));
      break;
    case "square":
      cb(square(size));
      break;
    case "horizontal line":
      cb(horizontalLine(size));
      break;
    case "cross":
      cb(cross(size));
      break;
    default:
      cb(createNewBoard(size));
  }
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

const square = (size) => {
  let mainArray = [];

  for (let i = 0; i < size; i++) {
    let subArray = [];
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        subArray.push({ status: 1, location: [i, j] });
      } else {
        subArray.push({ status: 0, location: [i, j] });
      }
    }
    mainArray.push(subArray);
  }
  return mainArray;
};

const horizontalLine = (size) => {
  let mainArray = [];

  for (let i = 0; i < size; i++) {
    let subArray = [];
    let mid = Math.floor(size / 2);
    for (let j = 0; j < size; j++) {
      if (i === mid) {
        subArray.push({ status: 1, location: [i, j] });
      } else {
        subArray.push({ status: 0, location: [i, j] });
      }
    }
    mainArray.push(subArray);
  }
  return mainArray;
};

const cross = (size) => {
  let mainArray = [];

  for (let i = 0; i < size; i++) {
    let subArray = [];
    let mid = Math.floor(size / 2);
    for (let j = 0; j < size; j++) {
      if (i === mid || j === mid) {
        subArray.push({ status: 1, location: [i, j] });
      } else {
        subArray.push({ status: 0, location: [i, j] });
      }
    }
    mainArray.push(subArray);
  }
  return mainArray;
};

const pulsar = (gridSize) => {
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

const pulsarGenerator = (gridSize) => {
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

const pentadecathlon = (gridSize) => {
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

const queenBeeShuttle = (gridSize) => {
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

const stillLife = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[2][14]["status"] = 1;
  newBoard[3][14]["status"] = 1;
  newBoard[1][15]["status"] = 1;
  newBoard[1][16]["status"] = 1;
  newBoard[2][17]["status"] = 1;
  newBoard[3][17]["status"] = 1;
  newBoard[4][16]["status"] = 1;
  newBoard[4][15]["status"] = 1;
  newBoard[3][18]["status"] = 1;
  newBoard[3][19]["status"] = 1;
  newBoard[3][20]["status"] = 1;
  newBoard[2][20]["status"] = 1;
  newBoard[1][21]["status"] = 1;
  newBoard[1][22]["status"] = 1;
  newBoard[2][23]["status"] = 1;
  newBoard[3][23]["status"] = 1;
  newBoard[4][22]["status"] = 1;
  newBoard[4][21]["status"] = 1;
  newBoard[5][20]["status"] = 1;
  newBoard[6][20]["status"] = 1;
  newBoard[7][19]["status"] = 1;
  newBoard[7][18]["status"] = 1;
  newBoard[6][17]["status"] = 1;
  newBoard[5][17]["status"] = 1;
  newBoard[5][18]["status"] = 1;
  newBoard[5][19]["status"] = 1;
  newBoard[5][7]["status"] = 1;
  newBoard[5][6]["status"] = 1;
  newBoard[4][6]["status"] = 1;
  newBoard[3][6]["status"] = 1;
  newBoard[2][5]["status"] = 1;
  newBoard[3][4]["status"] = 1;
  newBoard[4][4]["status"] = 1;
  newBoard[5][4]["status"] = 1;
  newBoard[5][3]["status"] = 1;
  newBoard[12][2]["status"] = 1;
  newBoard[12][1]["status"] = 1;
  newBoard[13][1]["status"] = 1;
  newBoard[13][4]["status"] = 1;
  newBoard[14][4]["status"] = 1;
  newBoard[14][3]["status"] = 1;
  newBoard[18][5]["status"] = 1;
  newBoard[18][6]["status"] = 1;
  newBoard[19][7]["status"] = 1;
  newBoard[20][6]["status"] = 1;
  newBoard[20][5]["status"] = 1;
  newBoard[19][4]["status"] = 1;
  newBoard[20][14]["status"] = 1;
  newBoard[21][15]["status"] = 1;
  newBoard[22][14]["status"] = 1;
  newBoard[21][13]["status"] = 1;
  newBoard[21][21]["status"] = 1;
  newBoard[21][22]["status"] = 1;
  newBoard[22][22]["status"] = 1;
  newBoard[22][21]["status"] = 1;
  newBoard[10][16]["status"] = 1;
  newBoard[9][15]["status"] = 1;
  newBoard[9][14]["status"] = 1;
  newBoard[10][14]["status"] = 1;
  newBoard[11][15]["status"] = 1;
  newBoard[14][9]["status"] = 1;
  newBoard[14][10]["status"] = 1;
  newBoard[15][11]["status"] = 1;
  newBoard[16][11]["status"] = 1;
  newBoard[17][10]["status"] = 1;
  newBoard[16][9]["status"] = 1;
  newBoard[15][8]["status"] = 1;
  newBoard[8][7]["status"] = 1;
  newBoard[8][8]["status"] = 1;
  newBoard[10][9]["status"] = 1;
  newBoard[11][8]["status"] = 1;
  newBoard[10][7]["status"] = 1;
  newBoard[9][6]["status"] = 1;
  newBoard[11][20]["status"] = 1;
  newBoard[11][21]["status"] = 1;
  newBoard[12][22]["status"] = 1;
  newBoard[13][22]["status"] = 1;
  newBoard[13][21]["status"] = 1;
  newBoard[14][21]["status"] = 1;
  newBoard[15][21]["status"] = 1;
  newBoard[16][20]["status"] = 1;
  newBoard[16][19]["status"] = 1;
  newBoard[15][18]["status"] = 1;
  newBoard[14][19]["status"] = 1;
  newBoard[13][19]["status"] = 1;
  newBoard[12][19]["status"] = 1;
  newBoard[9][9]["status"] = 1;
  newBoard[14][18]["status"] = 1;

  return newBoard;
};

const spaceShips = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[1][3]["status"] = 1;
  newBoard[1][4]["status"] = 1;
  newBoard[2][4]["status"] = 1;
  newBoard[2][5]["status"] = 1;
  newBoard[3][5]["status"] = 1;
  newBoard[3][6]["status"] = 1;
  newBoard[4][5]["status"] = 1;
  newBoard[4][4]["status"] = 1;
  newBoard[3][3]["status"] = 1;
  newBoard[3][2]["status"] = 1;
  newBoard[2][2]["status"] = 1;
  newBoard[2][3]["status"] = 1;
  newBoard[14][2]["status"] = 1;
  newBoard[14][5]["status"] = 1;
  newBoard[15][6]["status"] = 1;
  newBoard[16][6]["status"] = 1;
  newBoard[17][6]["status"] = 1;
  newBoard[17][5]["status"] = 1;
  newBoard[17][4]["status"] = 1;
  newBoard[17][3]["status"] = 1;
  newBoard[16][2]["status"] = 1;

  return newBoard;
};

const acorn = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[8][13]["status"] = 1;
  newBoard[10][13]["status"] = 1;
  newBoard[10][12]["status"] = 1;
  newBoard[9][15]["status"] = 1;
  newBoard[10][16]["status"] = 1;
  newBoard[10][17]["status"] = 1;
  newBoard[10][18]["status"] = 1;

  return newBoard;
};

const flowerOfEden = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[7][13]["status"] = 1;
  newBoard[7][14]["status"] = 1;
  newBoard[8][13]["status"] = 1;
  newBoard[9][13]["status"] = 1;
  newBoard[9][14]["status"] = 1;
  newBoard[9][15]["status"] = 1;
  newBoard[9][16]["status"] = 1;
  newBoard[9][17]["status"] = 1;
  newBoard[8][17]["status"] = 1;
  newBoard[8][16]["status"] = 1;
  newBoard[8][15]["status"] = 1;
  newBoard[10][15]["status"] = 1;
  newBoard[10][17]["status"] = 1;
  newBoard[11][16]["status"] = 1;
  newBoard[7][10]["status"] = 1;
  newBoard[7][9]["status"] = 1;
  newBoard[7][8]["status"] = 1;
  newBoard[8][8]["status"] = 1;
  newBoard[8][9]["status"] = 1;
  newBoard[8][11]["status"] = 1;
  newBoard[9][10]["status"] = 1;
  newBoard[9][9]["status"] = 1;
  newBoard[9][8]["status"] = 1;
  newBoard[10][7]["status"] = 1;
  newBoard[10][9]["status"] = 1;
  newBoard[11][7]["status"] = 1;
  newBoard[11][8]["status"] = 1;
  newBoard[11][9]["status"] = 1;
  newBoard[11][10]["status"] = 1;
  newBoard[10][11]["status"] = 1;
  newBoard[10][13]["status"] = 1;
  newBoard[11][14]["status"] = 1;
  newBoard[11][12]["status"] = 1;
  newBoard[12][13]["status"] = 1;
  newBoard[12][12]["status"] = 1;
  newBoard[12][11]["status"] = 1;
  newBoard[13][12]["status"] = 1;
  newBoard[13][14]["status"] = 1;
  newBoard[13][15]["status"] = 1;
  newBoard[13][16]["status"] = 1;
  newBoard[13][17]["status"] = 1;
  newBoard[14][17]["status"] = 1;
  newBoard[14][15]["status"] = 1;
  newBoard[14][13]["status"] = 1;
  newBoard[15][14]["status"] = 1;
  newBoard[15][15]["status"] = 1;
  newBoard[15][16]["status"] = 1;
  newBoard[16][16]["status"] = 1;
  newBoard[16][15]["status"] = 1;
  newBoard[16][13]["status"] = 1;
  newBoard[17][14]["status"] = 1;
  newBoard[17][15]["status"] = 1;
  newBoard[17][16]["status"] = 1;
  newBoard[13][10]["status"] = 1;
  newBoard[13][8]["status"] = 1;
  newBoard[14][11]["status"] = 1;
  newBoard[14][9]["status"] = 1;
  newBoard[14][7]["status"] = 1;
  newBoard[15][7]["status"] = 1;
  newBoard[15][8]["status"] = 1;
  newBoard[15][9]["status"] = 1;
  newBoard[15][10]["status"] = 1;
  newBoard[15][11]["status"] = 1;
  newBoard[16][11]["status"] = 1;
  newBoard[17][11]["status"] = 1;
  newBoard[17][10]["status"] = 1;
  newBoard[16][9]["status"] = 1;
  newBoard[16][8]["status"] = 1;
  newBoard[16][7]["status"] = 1;

  return newBoard;
};

const rPentomino = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[8][15]["status"] = 1;
  newBoard[8][14]["status"] = 1;
  newBoard[9][14]["status"] = 1;
  newBoard[9][13]["status"] = 1;
  newBoard[10][14]["status"] = 1;
  newBoard[16][20]["status"] = 1;
  newBoard[16][19]["status"] = 1;
  newBoard[17][19]["status"] = 1;
  newBoard[18][19]["status"] = 1;
  newBoard[17][18]["status"] = 1;

  return newBoard;
};

const circleOfFire = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[7][13]["status"] = 1;
  newBoard[7][11]["status"] = 1;
  newBoard[8][9]["status"] = 1;
  newBoard[9][10]["status"] = 1;
  newBoard[10][10]["status"] = 1;
  newBoard[10][9]["status"] = 1;
  newBoard[10][8]["status"] = 1;
  newBoard[8][15]["status"] = 1;
  newBoard[9][14]["status"] = 1;
  newBoard[10][14]["status"] = 1;
  newBoard[10][15]["status"] = 1;
  newBoard[10][16]["status"] = 1;
  newBoard[8][12]["status"] = 1;
  newBoard[9][12]["status"] = 1;
  newBoard[10][12]["status"] = 1;
  newBoard[11][12]["status"] = 1;

  newBoard[12][17]["status"] = 1;
  newBoard[12][16]["status"] = 1;
  newBoard[12][15]["status"] = 1;
  newBoard[12][14]["status"] = 1;
  newBoard[12][13]["status"] = 1;
  newBoard[12][11]["status"] = 1;
  newBoard[12][10]["status"] = 1;
  newBoard[12][9]["status"] = 1;
  newBoard[12][8]["status"] = 1;
  newBoard[12][7]["status"] = 1;
  newBoard[14][8]["status"] = 1;
  newBoard[14][9]["status"] = 1;
  newBoard[14][10]["status"] = 1;
  newBoard[15][10]["status"] = 1;
  newBoard[16][9]["status"] = 1;
  newBoard[17][11]["status"] = 1;
  newBoard[17][13]["status"] = 1;
  newBoard[16][12]["status"] = 1;
  newBoard[15][12]["status"] = 1;
  newBoard[14][12]["status"] = 1;
  newBoard[13][12]["status"] = 1;
  newBoard[14][14]["status"] = 1;
  newBoard[14][15]["status"] = 1;
  newBoard[14][16]["status"] = 1;
  newBoard[16][15]["status"] = 1;
  newBoard[15][14]["status"] = 1;

  return newBoard;
};

const glidar = (gridSize) => {
  let newBoard = createNewBoard(gridSize);
  newBoard[7][8]["status"] = 1;
  newBoard[8][9]["status"] = 1;
  newBoard[9][9]["status"] = 1;
  newBoard[9][8]["status"] = 1;
  newBoard[9][7]["status"] = 1;

  return newBoard;
};
