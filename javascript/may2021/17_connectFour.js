// Challenge link: https://www.codewars.com/kata/56882731514ec3ec3d000009/train/javascript

// still getting wrong values from diagonal section
function whoIsWinner(piecesPositionList) {
  const draw = "Draw";
  let winner = "";
  const columns = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
  const board = [[], [], [], [], [], [], []];
  
  for (let play = 0; play < piecesPositionList.length; play++) {
    const column = columns[piecesPositionList[play].slice(0, 1)];
    const color = piecesPositionList[play].slice(2);
    board[column].push(color);
    const check = checkForWin(column);
    // console.log({check})
    if (check === "Red" || check === "Yellow") {
      winner = check;
      break;
    }
    
  }
  // console.log(board)
  return winner !== "" ? winner : draw;

  function checkForWin(column) {
    const row = board[column].length - 1;
    const color = board[column][row];
    let count = 0;

    // check column (y == board[x].length - 1)
    for (let j = row; j > 0; j--) {
      count = (board[column][j] === color) ? count + 1 : 0;
      if (count === 4) { 
        return color;
      }
    }

    // check row
    for(let col of board) {
      count = col[row] === color ? count + 1 : 0;
      if (count === 4) {
        return color;
      }
    }
    
    // check diagonals
    for (let i = 0; i < board.length; i++) {
      // rows above index 2 don't have enough space to get 4 in a row
      for (let j = 0; j < 3; j++) {
        let diagColor = board[i][j];
        let diagCount = 1;
        if (diagColor === undefined) {
          break;
        }
        for (let z = 1; z < 4; z++) {
          // for columns A-D diagonal has to go up & right
          if (i < 4) {
            if (board[i + z][j + z] === diagColor) {
              diagCount++;
            }
            // for columns D-G has to go up & left
          } else if (i > 3) {
            if (board[i - z][j + z] === diagColor) {
              diagCount++;
            }
          }
        }
        if (diagCount === 4) {
          return diagColor;
        }
      }
    }

    return draw;
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



console.log("1. ", whoIsWinner(test1) === "Yellow", whoIsWinner(test1));
console.log("2. ", whoIsWinner(test2) === "Red", whoIsWinner(test2));
console.log("3. ", whoIsWinner(test3) === "Draw", whoIsWinner(test3));
console.log("4. ", whoIsWinner(test4) === "Red", whoIsWinner(test4));
console.log("5. ", whoIsWinner(test5) === "Draw", whoIsWinner(test5));
console.log("6. ", whoIsWinner(test6) === "Yellow", whoIsWinner(test6));
