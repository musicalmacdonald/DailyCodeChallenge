// Challenge link: https://www.codewars.com/kata/5855777bb45c01bada0002ac/javascript

function encodeResistorColorsOriginal(ohmsString) {
  const resistBands = {
    0: "black",
    1: "brown",
    2: "red",
    3: "orange",
    4: "yellow",
    5: "green",
    6: "blue",
    7: "violet",
    8: "gray",
    9: "white",
  };
  const tol = "gold";

  const resistance = ohmsString.split(" ")[0];

  let bands = [];
  let power = 0;
  const value = parseFloat(resistance, 10);

  if (value < 10) {
    bands.push(resistBands[Math.floor(value % 10)]);
    bands.push(resistBands[Math.floor((value % 1) * 10)]);
    power--;
  } else if (value > 9 && value < 100) {
    bands.push(resistBands[Math.floor(value / 10)]);
    bands.push(resistBands[value % 10]);
  } else {
    bands.push(resistBands[Math.floor(value / 100)]);
    bands.push(resistBands[Math.floor((value % 100) / 10)]);
    power++;
  }

  if (resistance.includes("k")) {
    power += 3;
  } else if (resistance.includes("M")) {
    power += 6;
  } 

  bands.push(resistBands[power]);
  bands.push(tol);

  return bands.join(" ");
}

// Exploration of solution inspired from user 4thana
function encodeResistorColors(ohmsString) {
  const resistBands = {
    0: "black",
    1: "brown",
    2: "red",
    3: "orange",
    4: "yellow",
    5: "green",
    6: "blue",
    7: "violet",
    8: "gray",
    9: "white",
  };
  const tol = "gold";

  let resistance = ohmsString.replace(' ohms', '');
  let value = '';
  
  if (resistance.endsWith('k')) {
    value = String(resistance.slice(0, -1) * 1e3);
  } else if (resistance.endsWith('M')) {
    value = String(resistance.slice(0, -1) * 1e6);
  } else {
    value = resistance;
  }

  const [first, second, ...zeros] = value.split('');
  const firstBand = resistBands[first];
  const secondBand = resistBands[second];
  const thirdBand = resistBands[zeros.length];

  // console.log({first, second, zeros});

  return `${firstBand} ${secondBand} ${thirdBand} ${tol}`;
}




console.log(encodeResistorColors("10 ohms") === "brown black black gold");
console.log(encodeResistorColors("47 ohms") === "yellow violet black gold");
console.log(encodeResistorColors("100 ohms") === "brown black brown gold");
console.log(encodeResistorColors("220 ohms") === "red red brown gold");
console.log(encodeResistorColors("330 ohms") === "orange orange brown gold");
console.log(encodeResistorColors("470 ohms") === "yellow violet brown gold");
console.log(encodeResistorColors("680 ohms") === "blue gray brown gold");
console.log(encodeResistorColors("1k ohms") === "brown black red gold");
console.log(encodeResistorColors("4.7k ohms") === "yellow violet red gold");
console.log(encodeResistorColors("10k ohms") === "brown black orange gold");
console.log(encodeResistorColors("22k ohms") === "red red orange gold");
console.log(encodeResistorColors("47k ohms") === "yellow violet orange gold");
console.log(encodeResistorColors("100k ohms") === "brown black yellow gold");
console.log(encodeResistorColors("330k ohms") === "orange orange yellow gold");
console.log(encodeResistorColors("1M ohms") === "brown black green gold");
console.log(encodeResistorColors("2M ohms") === "red black green gold");
