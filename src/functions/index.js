export const createNewBoard = (size) => {
  let mainArray = [];

  for (let i = 0; i < size; i++) {
    let subArray = [];

    for (let j = 0; j < size; j++) {
      subArray.push({ status: 0, location: [i, j] });
    }
    mainArray.push(subArray);
  }

  return mainArray;
};

export const calculateNeighborCells = (arr, i, j) => {
  let N = 0,
    NE = 0,
    E = 0,
    SE = 0,
    S = 0,
    SW = 0,
    W = 0,
    NW = 0;

  if (i > 0) {
    N = arr[i - 1][j]["status"];
  }

  if (i < arr.length - 1) {
    S = arr[i + 1][j]["status"];
  }

  if (j > 0) {
    W = arr[i][j - 1]["status"];
  }

  if (j < arr[i].length - 1) {
    E = arr[i][j + 1]["status"];
  }

  if (i > 0 && j > 0) {
    NW = arr[i - 1][j - 1]["status"];
  }

  if (i > 0 && j < arr[i].length - 1) {
    NE = arr[i - 1][j + 1]["status"];
  }

  if (i < arr.length - 1 && j > 0) {
    SW = arr[i + 1][j - 1]["status"];
  }

  if (i < arr.length - 1 && j < arr.length - 1) {
    SE = arr[i + 1][j + 1]["status"];
  }

  let lifeCount = N + NE + E + SE + S + SW + W + NW;

  return lifeCount;
};

export const calculateLifeExpectancy = (arr, i, j, cellCount) => {
  if (arr[i][j]["status"] === 0 && cellCount === 3) {
    return 1;
  } else if (arr[i][j]["status"] === 1 && (cellCount < 2 || cellCount > 3)) {
    return 0;
  } else if (
    arr[i][j]["status"] === 1 &&
    (cellCount === 2 || cellCount === 3)
  ) {
    return 1;
  } else {
    return 0;
  }
};

export const generateNewBoard = (oldBoard) => {
  let newBoard = [];

  for (let i = 0; i < oldBoard.length; i++) {
    let subArray = [];
    for (let j = 0; j < oldBoard.length; j++) {
      let cellCount = calculateNeighborCells(oldBoard, i, j);
      let num = calculateLifeExpectancy(oldBoard, i, j, cellCount);

      subArray.push({ status: num, location: [i, j] });
    }
    newBoard.push(subArray);
  }
  return newBoard;
};
