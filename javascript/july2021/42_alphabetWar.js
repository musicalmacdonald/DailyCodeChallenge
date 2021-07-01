// Challenge link: https://www.codewars.com/kata/59377c53e66267c8f6000027

const alphabetWar = (fight) => {
  // left is positive, right negative
  const letterPower = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };

  let diff = 0;
  [...fight].forEach((letter) => {
    diff += Object.keys(letterPower).includes(letter) ? letterPower[letter] : 0;
  });

  if (diff > 0) {
    return "Left side wins!";
  } else if (diff < 0) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
};
