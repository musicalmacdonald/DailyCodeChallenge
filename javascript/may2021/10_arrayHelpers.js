// Challenge link: https://www.codewars.com/kata/525d50d2037b7acd6e000534/javascript

// Note: Had to write this way to pass tests, but I think I would create my own class that extends Array and add these to that class in a real world app.

Array.prototype.square = function () {
  return this.map((value) => Math.pow(value, 2));
};

Array.prototype.cube = function () {
  return this.map((value) => Math.pow(value, 3));
};

Array.prototype.sum = function () {
  return this.reduce((acc, value) => acc + value, 0);
};

Array.prototype.average = function () {
  return this.length > 0 ? this.sum() / this.length : NaN;
};

Array.prototype.even = function () {
  return this.filter((value) => value % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((value) => value % 2 !== 0);
};

// Something like this

class ArrayHelpers extends Array {
  square = () => {
    return this.map((value) => Math.pow(value, 2));
  };

  // etc
}
