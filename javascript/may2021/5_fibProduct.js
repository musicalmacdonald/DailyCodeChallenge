const productFib = (prod) => {
  let nMinus = 1;
  let n = 1;
  do {
    if (nMinus * n === prod) {
      return [nMinus, n, true];
    }
    const nextFib = nMinus + n;
    nMinus = n;
    n = nextFib;
  } while (nMinus * n <= prod);
  // instead of explicitly returning true/false should have put test (nMinus*n === prod)
  return [nMinus, n, false];
};

console.log(productFib(4895), [55, 89, true]);
console.log(productFib(5895), [89, 144, false]);
console.log(productFib(74049690), [6765, 10946, true]);
console.log(productFib(84049690), [10946, 17711, false]);
console.log(productFib(193864606), [10946, 17711, true]);
console.log(productFib(447577), [610, 987, false]);
console.log(productFib(602070), [610, 987, true]);

// This was a poor way to start - as soon as I realized I would need to
// create the fibonacci sequence after already looping through prod and then divisors,
// I realized I was on the wrong track
const productFibWrong = (prod) => {
  const divisors = getDivisors(prod);
  const isFibArr = divisors.map((value) => {
    return { value, isFibNum: isFib(value) };
  });
};

const getDivisors = (num) => {
  //   throws out 1* result since that won't be consecutive in fibonacci
  return Array.from({ length: num - 2 }, (_, i) => i + 2).filter(
    (value) => num % value === 0
  );
};

const isFib = (num) => {
  const testA = isPerfectSquare(5 * num * num + 4);
  const testB = isPerfectSquare(5 * num * num - 4);
  return testA || testB;
};

const isPerfectSquare = (num) => {
  const sqroot = Math.sqrt(num);
  return sqroot * sqroot === num;
};
