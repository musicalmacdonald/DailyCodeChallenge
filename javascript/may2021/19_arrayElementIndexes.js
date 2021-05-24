// Challenge link: https://www.codewars.com/kata/59a9919107157a45220000e1/javascript

const findAll = (array, n) => {
  const returnArr = [];
  let indexFound = -1;
  do {
    indexFound = array.indexOf(n, indexFound + 1);
    if (indexFound !== -1) {
      returnArr.push(indexFound);
    }
  } while (indexFound > -1);
  return returnArr;
};

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

console.log('1. ', arraysEqual(findAll([6, 9, 3, 4, 3, 82, 11], 3), [2, 4]));
console.log("2. ", arraysEqual(findAll([6, 9, 3, 4, 3, 82, 11], 5), []));
console.log('3. ', arraysEqual(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16), [1, 9]));
console.log('4. ', arraysEqual(findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20), [0, 1, 8]));