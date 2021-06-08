// Challenge link: https://www.codewars.com/kata/58649884a1659ed6cb000072

const updateLight = (current) => {
  const lightMap = {
    green: "yellow",
    yellow: "red",
    red: "green",
  };
  return lightMap[current];
};
