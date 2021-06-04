// Challenge link: https://www.codewars.com/kata/5645d1a4d907bd6009000052

function fizzBuzzFactory(arr) {
  return function (val) {
    let output = String(val);

    for (const input of arr) {
      const [modVal, str] = input;

      if (!(val % modVal)) {
        output = str;
      }
    }

    return output;
  };
}
