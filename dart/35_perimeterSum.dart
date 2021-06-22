// Challenge link: https://www.codewars.com/kata/559a28007caad2ac4e000083

BigInt perimeter(int m) {
  return fibSum(m) * BigInt.from(4);
}

BigInt fibSum(int n) {
  BigInt fib0 = BigInt.zero;
  BigInt fib1 = BigInt.one;
  BigInt sum = BigInt.zero;
  for (int i = 0; i <= n; i++) {
    sum += fib1;
    fib1 += fib0;
    fib0 = fib1 - fib0;
  }
  return sum;
}
