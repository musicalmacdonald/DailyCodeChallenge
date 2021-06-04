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

// Test cases from the Kata (Empty array returns the number)
describe("fizzBuzzFactory", () => {
  var fizzarr = [
    [3, "Fizz"],
    [5, "Buzz"],
    [15, "FizzBuzz"],
  ];
  var fooarr = [
    [2, "Foo"],
    [4, "Bar"],
    [6, "FooBar"],
  ];
  it("works for " + JSON.stringify(fizzarr), () => {
    const fizz = fizzBuzzFactory(fizzarr);
    const test = (arg, exp) =>
      Test.assertEquals(fizz(arg), exp, `didn't work for ${arg}`);
    test(3, "Fizz");
    test(4, "4");
    test(5, "Buzz");
    test(15, "FizzBuzz");
  });
  it("works for " + JSON.stringify(fooarr), () => {
    const foo = fizzBuzzFactory(fooarr);
    const test = (arg, exp) =>
      Test.assertEquals(foo(arg), exp, `didn't work for ${arg}`);
    test(1, "1");
    test(2, "Foo");
    test(3, "3");
    test(4, "Bar");
    test(6, "FooBar");
    test(12, "FooBar");
    test(31, "31");
    test(32, "Bar");
  });
  it("works for empty arrays", () => {
    const echo = fizzBuzzFactory([]);
    for (let i = 0; i < 10; ++i) {
      const arg = Math.round(Math.random() * 1000);
      Test.assertEquals(echo(arg), "" + arg);
    }
  });
  it("works for filled arrays", () => {
    var arr = [];
    for (let i = 1; i <= 100; ++i) {
      arr.push([i, Test.randomToken()]);
    }
    const filled = fizzBuzzFactory([].concat(arr));
    for (let i = 0; i < 100; ++i) {
      const arg = 1 + Math.floor(Math.random() * 80);
      Test.assertEquals(
        filled(arg),
        arr[arg - 1][1],
        `returned wrong result on ${arg}`
      );
    }
  });
  it("works on random arrays", () => {
    for (let _i = 0; _i < 10; ++_i) {
      var arr = [];
      let max = 0;
      let arrlen = (Math.random() * 60 + 40) | 0;
      for (let i = 1; i <= 100; ++i) {
        const next = max + 1 + Math.round(Math.random() * 4);
        const test = [next, Test.randomToken()];
        arr.push(test);
        max = next;
      }

      const randfac = fizzBuzzFactory([].concat(arr));
      const solution = (n) => {
        for (let i = arr.length; i > 0; ) {
          if (n % arr[--i][0] === 0) return arr[i][1];
        }
        return "" + n;
      };

      for (let i = 0; i < 10; ++i) {
        const arg = 1 + Math.round(Math.random() * max * max * max);
        Test.assertEquals(
          randfac(arg),
          solution(arg),
          `returned wrong result on ${arg}, array was ${JSON.stringify(arr)}`
        );
      }
    }
  });
});
