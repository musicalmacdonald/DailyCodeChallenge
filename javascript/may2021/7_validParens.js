// Challenge link: https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

const validParentheses = (parens) => {
  if (parens.length % 2 !== 0) {
    return false;
  }
  let count = 0;
  [...parens].forEach((paren) => {
    if (count < 0) {
      return false;
    }
    if (paren === "(") {
      count++;
    } else {
      count--;
    }
  });
  return count === 0;
};

console.log("() ", validParentheses("()"), " -> true");
console.log("()) ", validParentheses("())"), "-> false");
console.log("(())((()())()) ", validParentheses("(())((()())())"), "-> true");
