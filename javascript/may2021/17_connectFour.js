// Challenge link: https://www.codewars.com/kata/56882731514ec3ec3d000009/train/javascript

// This approach passes on the vast majority of test cases, but still fails on particular diagonal cases - 
// I think I probably oversimplified the logic for where to start the diagonal calculations
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
    const row = board[column].length - 1;
    if (isRowSolved(row, color) || isColSolved(column, row, color) || isDiagRSolved(column, row, color) || isDiagLSolved(column, row, color)) {
      winner = color;
      break;
    }
  }
  // console.log({board})
  return winner !== "" ? winner : draw;
  
  function isColSolved(column, row, color) {
    let solved = false;
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
  
  function isRowSolved(row, color) {
    let solved = false;
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

  function isDiagRSolved(column, row, color) {
    let solved = false;
    let rightCount = 0;
    const startCol = column - row;
    if (startCol < 0 && startCol > 4) {
      console.log("right exit")
      return solved;
    }
    const startRow = column >= row ? 0 : row - column;

    let d, nextCol, nextRow = 0;
    while(nextCol < 5 && nextRow < 4) {
      console.log("right loop")
      nextCol = d + startCol;
      nextRow = d + startRow;
      rightCount = board[nextCol][nextRow] === color ? rightCount + 1 : 0;
      console.log({rightCount})
      if(rightCount === 4){
        solved = true;
        break;
      }
      d++;
    }
    return solved;
  }

  function isDiagLSolved(column, row, color) {
    let solved = false;
    let leftCount = 0;
    const startCol = column + row;
    if (startCol < 2 && startCol > 7) {
      console.log("left exit")
      return solved;
    }
    const startRow = column >= row ? 0 : row - column;

    let d, nextCol, nextRow = 0;
    while(nextCol < 5 && nextRow < 4) {
      nextCol = startCol - d;
      nextRow = d + startRow;
      leftCount = board[nextCol][nextRow] === color 
        ? leftCount + 1 
        : 0;
        console.log({leftCount})
      if (leftCount === 4) {
        solved = true;
        break;
      }
      d++;
    }
    return solved;
  }
  
  function isDiagSolved(column, row, color) {
    let solved = false;
  
    // goal is to find bottom point in diag line w/ current location,
    // then see if there's 4 of the color in the diag
  
    let rightCount = 0;
    let leftCount = 0;
  
    const startRightCol = column <= row ? column - row : 0;
    const startLeftCol = column + row < 6 ? column + row : 6;
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

// Another approach suggested by bholdredgeTechtonic
function whoIsWinner2(piecesPositionList) {
  const draw = "Draw";
  let winner = "";
  // use a flat array to store the moves.  `colummns` denotes the starting index for the columns.
  const columns = { A: 0, B: 7, C: 14, D: 21, E: 28, F: 35, G: 42 };
  const colCount = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 };
  const board = new Array(49);

  for (let play = 0; play < piecesPositionList.length; play++) {
    const colName = piecesPositionList[play].slice(0, 1);
    const color = piecesPositionList[play].slice(2);
    const nextIndex = columns[colName] + colCount[colName];

    board[nextIndex] = color;
    
    const rowWin = isRowSolved(colCount[colName], color);
    const colWin = isColSolved(columns[colName], color);
    // const diagWin = isDiagSolved(nextCol, row, color);
    if (rowWin || colWin ) {
      winner = color;
      break;
    }
    colCount[colName]++;
  }
  return winner !== "" ? winner : draw;

  function isRowSolved(row, color) {
    let solved = false;
    let count = 0;
    const colIndexes = Object.values(columns);
    for (let i = 0; i < colIndexes.length; i++) {
      const index = colIndexes[i] + row;
      count = board[index] === color ? count + 1 : 0;
      if (count === 4) {
        solved = true;
        break;
      }
      
    }
    return solved;
  }

  function isColSolved(col, color) {
    let solved = false;
    let count = 0;
    for (let i = 0; i < 7; i++) {
      const index = col + i;
      count = board[index] === color ? count + 1 : 0;
      if (count === 4) {
        solved = true;
        break;
      }
    }
    return solved;
  }

  function isRightDiagSolved(index, color) {
    let solved = false;
    for (let i = 0; i < 7; i++) {
      const diagIndex = index + 7*i;
      
    }
  }

  
}

// Yellow diag
// board: [
//   ["Red", "Yellow", "Yellow", "Red"],
//   ["Red", "Red", "Yellow", "Yellow"],
//   ["Yellow", "Yellow", "Red", "Red"],
//   ["Yellow", "Yellow", "Red", "Yellow", "Red", "Yellow"],
//   ["Red", "Yellow", "Red"],
//   ["Red", "Red", "Yellow"],
//   ["Yellow", "Red", "Red", "Yellow"],
// ];
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
// board: [
//   ["Yellow"],
//   ["Red", "Yellow"],
//   ["Red", "Red", "Yellow"],
//   ["Red", "Red", "Red"],
//   ["Red"],
//   ["Yellow"],
//   ["Yellow", "Yellow", "Yellow"],
// ];
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
// board: [
//   ["Red", "Red"], 
//   ["Yellow"], 
//   [], 
//   [], 
//   ["Yellow"], 
//   ["Red"], 
//   ["Yellow"]
// ];
const test3 = [
  "A_Red",
  "B_Yellow",
  "A_Red",
  "E_Yellow",
  "F_Red",
  "G_Yellow",
];

// Red row
// board: [
//   ["Yellow", "Red"],
//   ["Yellow"],
//   ["Red", "Yellow"],
//   ["Red"],
//   ["Red"],
//   ["Red"],
//   ["Yellow", "Red", "Yellow"],
// ];
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

// Red diag
// test5 board: [
  //   [ 'Red', 'Red', 'Yellow' ],
  //   [ 'Red' ],
  //   [ 'Yellow', 'Red', 'Yellow', 'Yellow' ],
  //   [ 'Red', 'Red', 'Red', 'Yellow', 'Red', 'Yellow' ],
  //   [ 'Yellow', 'Red', 'Yellow', 'Red' ],
  //   [ 'Red', 'Yellow' ],
  //   [ 'Yellow', 'Yellow' ]
  // ]
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

// Red column (G)
// board: [
//   ["Yellow"],
//   ["Yellow"],
//   ["Yellow", "Red", "Red"],
//   ["Red", "Red", "Red", "Yellow", "Yellow"],
//   ["Yellow", "Yellow"],
//   ["Red", "Red", "Yellow", "Yellow", "Yellow"],
//   ["Red", "Red", "Red", "Red"],
// ];
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
// board: [
//   ["Red", "Yellow", "Red", "Red", "Red", "Yellow"],
//   ["Red", "Yellow", "Yellow", "Red", "Red", "Yellow"],
//   ["Yellow", "Red", "Yellow", "Red", "Red"],
//   ["Yellow", "Yellow", "Yellow", "Yellow"],
//   ["Red", "Yellow"],
//   ["Yellow", "Yellow", "Red", "Red", "Yellow", "Red"],
//   ["Red", "Red", "Yellow", "Yellow", "Red", "Yellow"],
// ];
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

// test8 board: Red diag comes before yellow column
//    [ [ 'Red', 'Red', 'Yellow', 'Yellow', 'Yellow', 'Yellow' ],
//      [ 'Yellow', 'Yellow', 'Red', 'Yellow' ],
//      [ 'Red', 'Yellow', 'Red', 'Red' ],
//      [ 'Red', 'Red', 'Yellow', 'Red', 'Red' ],
//      [ 'Red', 'Yellow', 'Red', 'Red' ],
//      [ 'Yellow', 'Yellow', 'Red' ],
//      [ 'Yellow', 'Yellow' ] ],
const test8 = [ 
  'A_Red',
  'B_Yellow',
  'E_Red',
  'B_Yellow',
  'C_Red',
  'E_Yellow',
  'D_Red',
  'C_Yellow',
  'D_Red',
  'F_Yellow',
  'B_Red',
  'F_Yellow',
  'A_Red',
  'D_Yellow',
  'C_Red',
  'A_Yellow',
  'E_Red',
  'A_Yellow',
  'F_Red',
  'G_Yellow',
  'D_Red',
  'A_Yellow',
  'C_Red',
  'G_Yellow',
  'D_Red',
  // 'B_Yellow',
  // 'E_Red',
  // 'A_Yellow',
]; 



console.log("1. (diagonal)", whoIsWinner(test1) === "Yellow");
// console.log("2. (row)", whoIsWinner(test2) === "Red");
// console.log("3. (draw)", whoIsWinner(test3) === "Draw");
// console.log("4. (row)", whoIsWinner(test4) === "Red");
console.log("5. (diagonal)", whoIsWinner(test5) === "Red");
// console.log("6. (column)", whoIsWinner(test6) === "Red");
// console.log("7. (column)", whoIsWinner(test7) === "Yellow");
console.log("8. (diagonal)", whoIsWinner(test8) === "Red");
