// Challenge link: https://www.codewars.com/kata/5c09ccc9b48e912946000157

const peakHeight = (mountain) => {
  let count = 1;
  let checkChar = " ";

  while (find2DArr(mountain, "^")) {
    for (let i = 0; i < mountain.length; i++) {
      for (let j = 0; j < mountain[i].length; j++) {
        if (
          mountain[i][j] === "^" &&
          checkTBRL(mountain, { i, j }, checkChar)
        ) {
          mountain[i][j] = count;
        }
      }
    }
    checkChar = count;
    count++;
  }

  // remove last count increase
  return count - 1;
};

const find2DArr = (arr, str) => {
  return arr.find((row) => row.find((i) => i === str));
};

const checkTBRL = (arr, { i, j }, checkChar) => {
  // if you hit an edge return true (the else case below)
  const top = i > 0 ? arr[i - 1][j] === checkChar : true;
  const bottom = i < arr.length - 1 ? arr[i + 1][j] === checkChar : true;
  const right = j < arr[i].length - 1 ? arr[i][j + 1] === checkChar : true;
  const left = j > 0 ? arr[i][j - 1] === checkChar : true;

  return top || bottom || right || left;
};
