// Challenge link: https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

// seconds != epoch seconds
// 0 <= seconds <= 359999 (99:59:59)
const humanReadable = (seconds) => {
  const hours = padZero(Math.floor(seconds / 3600));
  const minutes = padZero(Math.floor((seconds % 3600) / 60));
  const sec = padZero(seconds % 60);

  return `${hours}:${minutes}:${sec}`;
};

const padZero = (num) => {
  return ("0" + num).slice(-2);
};
