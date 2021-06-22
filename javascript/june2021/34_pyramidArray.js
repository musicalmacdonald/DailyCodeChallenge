// Challenge link: https://www.codewars.com/kata/515f51d438015969f7000013

const pyramid = (n) => {
  let pyramidArr = [];
  for (let i = 0; i < n; i++) {
    pyramidArr.push(Array.from({ length: i + 1 }).map((x) => 1));
  }
  return pyramidArr;
};
