// Challenge link: https://www.codewars.com/kata/566be96bb3174e155300001b/javascript

const maxBall = (v0) => {
  //   translate v0 into m/s
  const vel = (v0 * 1000) / 3600;
  //   using max height = v^2 / (2g) we get h formula into the right form so we can use the quadratic formula
  //   0 = gt^2/2 - vt + v^2/2g so A = g/2, B = -v, C = v^2/2g
  //   t = -(-v) +- Sqrt(v^2 - 4gv^2/4g)/g == v +- 0 /g == v/g
  //   finally get the answer into 10ths of a second
  return Math.round((vel / 9.81) * 10);
};


console.log("maxBall(37) === 10", maxBall(37) === 10);
console.log("maxBall(45) === 13", maxBall(45) === 13);
console.log("maxBall(99) === 28", maxBall(99) === 28);
console.log("maxBall(85) === 24", maxBall(85) === 24);
console.log("maxBall(136) === 39", maxBall(136) === 39);
console.log("maxBall(52) === 15", maxBall(52) === 15);
console.log("maxBall(16) === 5", maxBall(16) === 5);
console.log("maxBall(127) === 36", maxBall(127) === 36);
console.log("maxBall(137) === 39", maxBall(137) === 39);
console.log("maxBall(14) === 4", maxBall(14) === 4);