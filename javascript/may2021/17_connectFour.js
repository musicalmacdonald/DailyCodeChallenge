function whoIsWinner(piecesPositionList) {
  const draw = "Draw";
  const columns = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
  const board = [[], [], [], [], [], [], []];
  
  piecesPositionList.forEach((piece, i) => {
    const column = columns[piece.slice(0, 1)];
    const color = piece.slice(2);
    board[column].push(color);
  });


  //   check each column for 4
  for(let column of board) {
    if (column.length < 4) {
      continue;
    }
    let yellow = 0;
    let red = 0;
    for(let color of column) {
      if (color === "Red") {
        red++;
        yellow = 0;
      } else {
        yellow++;
        red = 0;
      }
      if (red === 4) {
        return "Red";
      } else if (yellow === 4) {
        return "Yellow";
      }
    }
  }

  //   check each row for 4
  let columnLengthArr = [];
  board.forEach((column) => {
    columnLengthArr.push(column.length);
  });
  const maxColumnLength = Math.max(...columnLengthArr);

  for (let j = 0; j < maxColumnLength; j++) {
    if (maxColumnLength < 4) {
      break;
    }
    let yellow = 0;
    let red = 0;
    for(let col of board) {
      if(col[j] === "Red") {
        red++;
        yellow = 0;
      // have to check for Yellow cuz could get undefined
      } else if (col[j] === "Yellow") {
        yellow++;
        red = 0;
      }
    }
    if (red === 4) {
      return "Red";
    } else if (yellow === 4) {
      return "Yellow";
    }
  }

  //   check diagonals for 4
  for (let i = 0; i < board.length; i++) {
    let color = "";
    // rows above index 2 don't have enough space to get 4 in a row
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === undefined) {
        break;
      }
      color = board[i][j];
      let count = 1;
      for (let z = 1; z < 4; z++) {
        // for columns A-D diagonal has to go up & right
        if (i < 4) {
          if (board[i + z][j + z] === color) {
            count++;
          }
          // for columns D-G has to go up & left
        } else if (i > 3) {
          if (board[i - z][j + z] === color) {
            count++;
          }
        }
      }
      if (count === 4) {
        return color;
      }
    }
  }

  return draw;
}

// Yellow
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

// Red
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

// Red
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

// Draw
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



console.log("1. ", whoIsWinner(test1) === "Yellow", whoIsWinner(test1));
console.log("2. ", whoIsWinner(test2) === "Red", whoIsWinner(test2));
console.log("3. ", whoIsWinner(test3) === "Draw", whoIsWinner(test3));
console.log("4. ", whoIsWinner(test4) === "Red", whoIsWinner(test4));
console.log("5. ", whoIsWinner(test5) === "Draw", whoIsWinner(test5));
