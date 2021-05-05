// Challenge link: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Solution 1:
var uniqueInOrder = function (iterable) {
  let arr = iterable;
  if (typeof iterable == "string") {
    arr = iterable.split("");
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr;
};

// Solution 2:
const uniqueInOrder2 = (iterable) => {
  const arr = typeof iterable == "string" ? iterable.split("") : iterable;
  return arr.filter((value, i) => value !== arr[i + 1]);
};

// can become
const uniqueInOrder3 = (iterable) => {
  return [...iterable].filter((value, i) => value !== iterable[i + 1]);
};

console.log(
  'uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"]'
);
console.log(uniqueInOrder2("AAAABBBCCDAABBB"));

console.log('uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"]');
console.log(uniqueInOrder2("ABBCcAD"));

console.log("uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]");
console.log(uniqueInOrder2([1, 2, 2, 3, 3]));
