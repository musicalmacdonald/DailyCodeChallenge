// Challenge link: https://www.codewars.com/kata/57cf3dad05c186ba22000348

const decodeResistorColors = (bands) => {
  const resistBands = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
  };
  const tolBands = {
    gold: 5,
    silver: 10,
    default: 20,
  };

  const resistArr = bands.split(" ");
  const tol =
    resistArr.length === 4 ? tolBands[resistArr[3]] : tolBands.default;

  const resistance =
    (resistBands[resistArr[0]] * 10 + resistBands[resistArr[1]]) *
    Math.pow(10, resistBands[resistArr[2]]);

  let resistString = `${resistance}`;
  if (resistance >= 1000 && resistance < 1000000) {
    resistString = `${resistance / 1000}k`;
  } else if (resistance >= 1000000) {
    resistString = `${resistance / 1000000}M`;
  }

  return `${resistString} ohms, ${tol}%`;
};
