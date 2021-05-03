// Challenge link: https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
  const results = [];
  for (let i = 1; i < integer; i++) {
    if (integer % i === 0){
      results.push(i);
    }
  }
  const ans = results.filter(value => value !== 1);
  return ans.length === 0 ? `${integer} is prime`: ans;
}
