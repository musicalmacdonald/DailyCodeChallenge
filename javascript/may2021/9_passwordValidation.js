// Challenge link: https://www.codewars.com/kata/52e1476c8147a7547a000811/solutions/javascript

function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/.test(password);
}

// ^ beginning of string

// (?=.*\d)  => Positive lookahead for a digit
// (?=.*[a-z]) => Positive lookahead for lowercase
// (?=.*[A-Z]) => Positive lookahead for upppercase

// [a-zA-Z\d] => charcter set of alphanumeric characters
// {6,} => 6 or more of preceding character set

// $ end of string

// (?=) => looks for match in following but does not capture (positive lookahead)
// . => any character except line break
// * => matches 1 or more of preceding token
// [] => character set
// \d => digits, will match non Latin numerals too
