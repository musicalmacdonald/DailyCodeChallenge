// Challenge link: https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript

function perimeter(n) {
  return 4 * fibSum(n);
}
const fibSum = (num) => {
  let fib0 = 0;
  let fib1 = 1;
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += fib1;
    fib1 += fib0;
    fib0 = fib1 - fib0;
  }
  return sum;
};