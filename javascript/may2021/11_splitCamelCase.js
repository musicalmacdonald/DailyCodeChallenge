// Challenge link: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
const solution = (string) => {
  return string.split(/(?=[A-Z])/).join(" ");
}; 
 
const test = solution("camelCasing") === "camel Casing";
console.log(
  test,
  solution("camelCasing"),
  " -> ",
  "camel Casing",
);
const test2 = solution("camelCasingTest") === "camel Casing Test";
console.log(
  test2,
  solution("camelCasingTest"),
  " -> ",
  "camel Casing Test"
);
