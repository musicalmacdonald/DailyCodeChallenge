// Challenge link: https://www.codewars.com/kata/56882731514ec3ec3d000009/train/javascript

function whoIsWinner(piecesPositionList) {
  const draw = "Draw";
  let winner = "";
  const columns = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
  // Each array in board is the Column of the physical game board
  const board = [[], [], [], [], [], [], []];
  
  for (let play = 0; play < piecesPositionList.length; play++) {
    const column = columns[piecesPositionList[play].slice(0, 1)];
    const color = piecesPositionList[play].slice(2);
    board[column].push(color);
    const rowWin = isRowSolved(column);
    const colWin = isColSolved(column, color);
    const diagWin = isDiagSolved(column);
    if (rowWin || colWin || diagWin) {
      winner = color;
      break;
    }
  }
  return winner !== "" ? winner : draw;


  function isColSolved(column, color) {
    let solved = false;
    const row = board[column].length - 1;
    // if there aren't 4 entries skip
    if (row > 2) {
      let colCount = 0;
      // check column (y == board[x].length - 1)
      for (let j = row; j >= 0; j--) {
        colCount = board[column][j] === color ? colCount + 1 : 0;
        // console.log({colCount, color})
        if (colCount === 4) {
          solved = true;
          break;
        }
      }
    }
    return solved;
  }

  function isRowSolved(column) {
    let solved = false;
    const row = board[column].length - 1;
    const color = board[column][row];
    let rowCount = 0;
    for (let col = 0; col < board.length; col++) {
      rowCount = board[col][row] === color ? rowCount + 1 : 0;
      if (rowCount === 4) {
        solved = true;
        break;
      }
    }
    return solved;
  }

  function isDiagSolved(column) {
    let solved = false;
    const row = board[column].length - 1;
    const color = board[column][row];

    // goal is to find bottom point in diag line w/ current location,
    // then see if there's 4 of the color in the diag

    let rightCount = 0;
    let leftCount = 0;

    const startRightCol = column - row;
    const startLeftCol = column + row;
    // can loop for different amounts per Column
    const loopLength = [6, 6, 5, 4, 5, 6, 6]

    // Col A - D
    if (startRightCol > -1 && startRightCol < 4 ) {
      // Diag up to the right
      for (let d = 0; d < loopLength[startRightCol]; d++) {
        const rightDiagColor = board[column - row + d][d];
        rightCount = rightDiagColor === color ? rightCount + 1 : 0;
        if (rightCount === 4) {
          solved = true;
          break;
        }
      }
    }
    // Col D-G
    if (startLeftCol > 2 && startLeftCol < 7 && !solved) {
      // Diag up to the left
      for (let d = 0; d < loopLength[startLeftCol]; d++) {
        const leftDiagColor = board[column + row - d][d];
        leftCount = leftDiagColor === color ? leftCount + 1 : 0;
        if (leftCount === 4) {
          solved = true;
          break;
        }
      }
    }
    return solved;
  }
}

// Yellow diag
const test1 = [
  "C_Yellow",
  "E_Red",
  "G_Yellow",
  "B_Red",
  "D_Yellow",
  "B_Red",
  "B_Yellow",
  "G_Red",
  "C_Yellow",
  "C_Red",
  "D_Yellow",
  "F_Red",
  "E_Yellow",
  "A_Red",
  "A_Yellow",
  "G_Red",
  "A_Yellow",
  "F_Red",
  "F_Yellow",
  "D_Red",
  "B_Yellow",
  "E_Red",
  "D_Yellow",
  "A_Red",
  "G_Yellow",
  "D_Red",
  "D_Yellow",
  "C_Red",
];

// Red row
const test2 = [
  "A_Yellow",
  "B_Red",
  "B_Yellow",
  "C_Red",
  "G_Yellow",
  "C_Red",
  "C_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "F_Yellow",
  "E_Red",
  "D_Yellow",
];

// Draw
const test3 = [
  "A_Red",
  "B_Yellow",
  "A_Red",
  "E_Yellow",
  "F_Red",
  "G_Yellow",
];

// Red row
const test4 = [
  "E_Red",
  "G_Yellow",
  "D_Red",
  "B_Yellow",
  "C_Red",
  "A_Yellow",
  "G_Red",
  "G_Yellow",
  "A_Red",
  "C_Yellow",
  "F_Red",
  "D_Yellow",
  "E_Red",
  "D_Yellow",
  "B_Red",
  "E_Yellow",
  "A_Red",
  "F_Yellow",
  "F_Red",
  "C_Yellow",
  "A_Red",
  "E_Yellow",
  "D_Red",
  "G_Yellow",
  "F_Red",
  "A_Yellow",
  "B_Red",
  "E_Yellow",
  "F_Red",
  "E_Yellow",
];

// Red
const test5 = [
  "D_Red",
  "E_Yellow",
  "E_Red",
  "C_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "E_Yellow",
  "C_Red",
  "D_Yellow",
  "F_Red",
  "G_Yellow",
  "E_Red",
  "C_Yellow",
  "A_Red",
  "C_Yellow",
  "B_Red",
  "F_Yellow",
  "A_Red",
  "A_Yellow",
  "D_Red",
  "D_Yellow",
];

// Yellow column
const test6 = [
  "F_Red",
  "E_Yellow",
  "F_Red",
  "A_Yellow",
  "G_Red",
  "F_Yellow",
  "D_Red",
  "F_Yellow",
  "D_Red",
  "C_Yellow",
  "D_Red",
  "F_Yellow",
  "C_Red",
  "B_Yellow",
  "C_Red",
  "D_Yellow",
  "G_Red",
  "D_Yellow",
  "G_Red",
  "E_Yellow",
  "G_Red",
  "F_Yellow",
];

// Yellow column
const test7 = [
  "C_Yellow",
  "B_Red",
  "B_Yellow",
  "E_Red",
  "D_Yellow",
  "G_Red",
  "B_Yellow",
  "G_Red",
  "E_Yellow",
  "A_Red",
  "G_Yellow",
  "C_Red",
  "A_Yellow",
  "A_Red",
  "D_Yellow",
  "B_Red",
  "G_Yellow",
  "A_Red",
  "F_Yellow",
  "B_Red",
  "D_Yellow",
  "A_Red",
  "F_Yellow",
  "F_Red",
  "B_Yellow",
  "F_Red",
  "F_Yellow",
  "G_Red",
  "A_Yellow",
  "F_Red",
  "C_Yellow",
  "C_Red",
  "G_Yellow",
  "C_Red",
  "D_Yellow",
  "D_Red",
  "E_Yellow",
  "D_Red",
  "E_Yellow",
  "C_Red",
  "E_Yellow",
  "E_Red",
];



console.log("1. ", whoIsWinner(test1) === "Yellow");
console.log("2. ", whoIsWinner(test2) === "Red");
console.log("3. ", whoIsWinner(test3) === "Draw");
console.log("4. ", whoIsWinner(test4) === "Red");
console.log("5. ", whoIsWinner(test5) === "Red");
console.log("6. ", whoIsWinner(test6) === "Red");
console.log("7. ", whoIsWinner(test7) === "Yellow");
