
/**
 * Sudoku class.
 *
 * @constructor
 * @param {array} 2 dimensional array representing the solved sudoku.
 */
class Sudoku {
  constructor(data) {
    this.array = data;
    this.n = data.length;
    let tempArr = [];
    for (let i = 1; i < data.length + 1; i++) {
      tempArr.push(i);
    }
    this.range = tempArr;
  }

  //   Private methods
  // -------------------------

  /**
   * Check if row contains values 1 through n
   * @return {boolean} true if all rows have necessary values.
   */
  areRowSumsValid() {
    const { array, n, range } = this;
    let rowsValid = true;

    for (let col = 0; col < n; col++) {
      rowsValid = [...array[col]]
        .sort((a, b) => a - b)
        .every((curr, i) => curr === range[i]);
      if (!rowsValid) {
        break;
      }
    }
    return rowsValid;
  }

  /**
   * Check if the column contains values 1 through n.
   * @return {boolean} true if all columns have necessary values.
   */
  areColumnsValid() {
    const { array, n, range } = this;
    let columnsValid = true;

    for (let row = 0; row < n; row++) {
      let colArr = [];
      for (let col = 0; col < n; col++) {
        if (typeof array[col][row] === 'number') {
          colArr.push(array[col][row]);
        } else {
          columnsValid = false;
          break;
        }
      }
      columnsValid = colArr.sort((a, b) => a - b).every((curr, i) => curr === range[i]);
      if (!columnsValid) {
        break;
      }
    }
    return columnsValid;
  }

  /**
   * Check if the sum of the "little square" contains values 1 through n.
   * @param {array} 2 dimensional array containing values 1-n.
   * @return {boolean} true if all squares match the sum of 1 to n.
   */
  areSquaresValid() {
    const { array, n, range } = this;
    const nSqrt = Math.sqrt(n);

    let squaresValid = true;

    for (let i = 0; i < n; i += nSqrt) {
      for (let j = 0; j < n; j += nSqrt) {
        let squareArr = [];
        for (let col = i; col < nSqrt + i; col++) {
          for (let row = j; row < nSqrt + j; row++) {
            squareArr.push(array[col][row]);
          }
        }
        squaresValid = squareArr
          .sort((a, b) => a - b)
          .every((curr, iter) => curr === range[iter]);
        if (!squaresValid) {
          break;
        }
      }
    }
    return squaresValid;
  }

  //   Public methods
  // -------------------------

  /**
   * Check if the Sudoku is correctly solved.
   * @return {boolean} true if all rows, columns, and "little squares" are valid.
   */
  isValid() {
    return (
      this.areRowSumsValid() && this.areColumnsValid() && this.areSquaresValid()
    );
  }
}

const goodSudoku1 = new Sudoku([
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],

  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],

  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4],
]);

const goodSudoku2 = new Sudoku([
  [1, 4, 2, 3],
  [3, 2, 4, 1],

  [4, 1, 3, 2],
  [2, 3, 1, 4],
]);

const badSudoku1 = new Sudoku([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
]);

const badSudoku2 = new Sudoku([[1, 2, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 4], [1]]);


const trickySudoku = new Sudoku([
  [1, 3, 3, 3],
  [3, 3, 3, 1],
  [3, 1, 3, 3],
  [3, 3, 1, 3],
]);

const goodSudoku3 = new Sudoku([
  [
    17, 19, 1, 11, 15, 8, 24, 5, 16, 9, 4, 20, 22, 7, 21, 13, 6, 23, 12, 10, 2,
    18, 25, 3, 14,
  ],
  [
    4, 9, 14, 13, 8, 6, 21, 18, 17, 12, 1, 2, 3, 16, 15, 24, 25, 7, 5, 19, 11,
    10, 22, 23, 20,
  ],
  [
    24, 25, 7, 21, 12, 4, 1, 2, 20, 3, 13, 5, 23, 10, 11, 9, 22, 8, 18, 14, 15,
    19, 16, 6, 17,
  ],
  [
    16, 3, 23, 2, 5, 19, 13, 14, 22, 10, 6, 17, 18, 24, 25, 11, 20, 15, 4, 21,
    12, 1, 7, 9, 8,
  ],
  [
    20, 10, 18, 22, 6, 15, 25, 23, 11, 7, 12, 9, 8, 19, 14, 17, 1, 3, 16, 2, 4,
    24, 21, 13, 5,
  ],
  [
    19, 6, 20, 5, 25, 18, 2, 16, 15, 21, 17, 8, 7, 9, 23, 4, 12, 10, 14, 1, 24,
    3, 11, 22, 13,
  ],
  [
    11, 13, 3, 17, 10, 22, 20, 12, 9, 23, 25, 15, 24, 6, 5, 8, 2, 18, 19, 16,
    21, 4, 1, 14, 7,
  ],
  [
    15, 24, 9, 18, 21, 10, 7, 3, 4, 5, 14, 1, 11, 2, 16, 20, 13, 17, 23, 22, 6,
    25, 19, 8, 12,
  ],
  [
    14, 7, 16, 12, 2, 1, 17, 19, 6, 8, 21, 22, 4, 18, 13, 3, 24, 25, 15, 11, 10,
    20, 23, 5, 9,
  ],
  [
    8, 23, 22, 1, 4, 24, 11, 25, 13, 14, 3, 12, 10, 20, 19, 5, 9, 21, 7, 6, 18,
    16, 2, 17, 15,
  ],
  [
    12, 1, 5, 10, 24, 2, 3, 21, 14, 11, 15, 25, 6, 22, 17, 16, 8, 9, 13, 4, 20,
    23, 18, 7, 19,
  ],
  [
    23, 21, 2, 3, 17, 13, 12, 10, 7, 4, 8, 18, 19, 5, 9, 25, 15, 1, 20, 24, 22,
    14, 6, 16, 11,
  ],
  [
    18, 8, 11, 20, 14, 16, 9, 17, 25, 1, 24, 21, 12, 4, 7, 6, 19, 22, 2, 23, 13,
    5, 15, 10, 3,
  ],
  [
    6, 22, 25, 19, 13, 5, 8, 20, 18, 15, 23, 3, 16, 1, 2, 21, 11, 14, 10, 7, 9,
    17, 12, 4, 24,
  ],
  [
    9, 16, 4, 15, 7, 23, 6, 22, 24, 19, 10, 11, 13, 14, 20, 18, 17, 5, 3, 12,
    25, 21, 8, 2, 1,
  ],
  [
    7, 2, 13, 9, 20, 17, 16, 11, 21, 22, 18, 24, 14, 23, 1, 15, 3, 6, 25, 5, 8,
    12, 10, 19, 4,
  ],
  [
    22, 18, 19, 24, 16, 3, 4, 8, 12, 25, 5, 13, 17, 15, 6, 10, 7, 11, 1, 9, 14,
    2, 20, 21, 23,
  ],
  [
    5, 12, 6, 4, 1, 20, 18, 15, 23, 24, 16, 10, 2, 21, 3, 22, 14, 19, 8, 13, 7,
    9, 17, 11, 25,
  ],
  [
    25, 17, 8, 14, 3, 7, 10, 13, 1, 2, 20, 19, 9, 11, 22, 12, 23, 4, 21, 18, 16,
    15, 5, 24, 6,
  ],
  [
    10, 15, 21, 23, 11, 14, 19, 9, 5, 6, 7, 4, 25, 12, 8, 2, 16, 24, 17, 20, 1,
    13, 3, 18, 22,
  ],
  [
    3, 11, 24, 7, 18, 9, 23, 1, 8, 13, 19, 16, 21, 17, 12, 14, 10, 20, 22, 25,
    5, 6, 4, 15, 2,
  ],
  [
    13, 14, 15, 25, 19, 21, 22, 4, 10, 18, 2, 6, 1, 3, 24, 23, 5, 12, 11, 8, 17,
    7, 9, 20, 16,
  ],
  [
    2, 4, 17, 16, 9, 11, 15, 7, 19, 20, 22, 14, 5, 25, 10, 1, 18, 13, 6, 3, 23,
    8, 24, 12, 21,
  ],
  [
    21, 20, 12, 8, 22, 25, 5, 6, 3, 16, 9, 23, 15, 13, 18, 7, 4, 2, 24, 17, 19,
    11, 14, 1, 10,
  ],
  [
    1, 5, 10, 6, 23, 12, 14, 24, 2, 17, 11, 7, 20, 8, 4, 19, 21, 16, 9, 15, 3,
    22, 13, 25, 18,
  ],
]);


console.log("1 ", goodSudoku1.isValid(), true);
console.log("2 ", goodSudoku2.isValid(), true);
console.log("3 ", badSudoku1.isValid(), false);
console.log("4 ", badSudoku2.isValid(), false);
console.log("5 ", trickySudoku.isValid(), false);
console.log("6 ", goodSudoku3.isValid(), true);
