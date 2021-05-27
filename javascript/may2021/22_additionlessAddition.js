// Challenge link: https://www.codewars.com/kata/536ce83e2f403659a5000d47/javascript


function add(x, y) {
  while (y !== 0) {
    let carry = x & y;
    x = x ^ y;
    y = carry << 1;
  }

  return x;
}
// function add(x, y) {
//   console.log({ x, y });
//   let result = "";
//   const binX = x.toString(2);
//   const binY = y.toString(2);

//   const maxLength = binX.length - binY.length ? binX.length : binY.length;
//   let carry = 0;

//   for (let i = maxLength - 1; i >= 0; i--) {
//     const tempX = binX[i];
//     const tempY = binY[i];
//     if (tempX === "1" && tempY === "1") {
//       result = carry ? "1".concat(result) : "0".concat(result);
//       carry = 1;
//     } else if (
//       (tempX === "1" && tempY !== "1") ||
//       (tempX !== "1" && tempY === "1")
//     ) {
//       // don't need to reassign carry because it will be the same after
//       result = carry ? "0".concat(result) : "1".concat(result);
//     } else {
//       result = carry ? "1".concat(result) : "0".concat(result);
//       carry = 0;
//     }
//     console.log({ i, tempX, tempY, carry, result });
//   }

//   result = `${carry}`.concat(result);
//   console.log({ result, parsed: parseInt(result, 2) });

//   return parseInt(result, 2);
// }


console.log(add(1, 1) === 2);
console.log(add(3, 2) === 5);