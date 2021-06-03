// Challenge link: https://www.codewars.com/kata/58485a43d750d23bad0000e6

const fizzBuzzCuckooClock = (time) => {
  const [hourStr, minuteStr] = time.split(":");
  let clockReturn = "";
  const hours = parseInt(hourStr, 10);
  const minutes = parseInt(minuteStr, 10);

  if (minutes % 15 === 0) {
    clockReturn = "Fizz Buzz";
  } else if (minutes % 3 === 0) {
    clockReturn = "Fizz";
  } else if (minutes % 5 === 0) {
    clockReturn = "Buzz";
  } else {
    clockReturn = "tick";
  }

  if (minutes === 0) {
    const repeat = hours % 12 || 12;
    clockReturn = "Cuckoo ".repeat(repeat).trim();
  } else if (minutes === 30) {
    clockReturn = "Cuckoo";
  }

  return clockReturn;
};
