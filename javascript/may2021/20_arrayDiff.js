// Challenge link: https://www.codewars.com/kata/523f5d21c841566fde000009/javascript

const arrayDiff = (a, b) => {
  return a.filter((value) => !b.includes(value));
};

console.log(
  arrayDiff([1, 2], [1]),
  ' => ', [2]
);
console.log(
  arrayDiff([1, 2, 2], [1]),
  ' => ', [2, 2]
);
console.log(
  arrayDiff([1, 2, 2], [2]),
  ' => ', [1]
);
console.log(
  arrayDiff([1, 2, 2], []),
  ' => ', [1, 2, 2]
);
console.log(arrayDiff([], [1, 2]), " => ", []);
console.log(
  arrayDiff([1, 2, 3], [1, 2]),
  ' => ', [3]
);