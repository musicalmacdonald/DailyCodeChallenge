// Challenge link: https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/javascript

const getLength = (arr) => {
  const dataLength = arr.length === 0 ? 1 : arr.length;
  return parseFloat(dataLength);
}
​
const getRainArrAndLength = (town, strng) => {
  let rainArr = [];
  const start = strng.indexOf(town);
  const end = strng.indexOf('\n', start);
  const data = end === -1 ? strng.slice(start) : strng.slice(start, end);
  data.match(/([0-9]*[.][0-9])/g).forEach((val) => rainArr.push(parseFloat(val)));
  const dataLength = getLength(rainArr);
  return { rainArr, dataLength };
}
​
const isValidTown = (town, strng) => {
  return strng.includes(`${town}:`)
}
​
const mean = (town, strng) => {
  if (isValidTown(town, strng)) {
    const { rainArr, dataLength } = getRainArrAndLength(town, strng);
    return rainArr.reduce((acc, current) => acc + current) / dataLength;
  } else {
    return -1.0;
  }
}
​
​
const variance = (town, strng) => {
  if (isValidTown(town, strng)) {
    const varianceArr = [];
    const meanRain = mean(town, strng);
    const { rainArr, dataLength } = getRainArrAndLength(town, strng);
    rainArr.forEach(val => varianceArr.push(Math.pow(meanRain - val, 2)));
    const varianceFinal = varianceArr.reduce((acc, current) => acc + current) / dataLength;
    return varianceFinal;
  } else {
    return -1.0;
  }
}