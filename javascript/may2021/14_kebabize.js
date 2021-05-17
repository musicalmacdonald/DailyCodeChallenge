// Challenge link: https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

const kebabize = (str) => {
  return str
    .replace(/\d/g, "")
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
};


console.log(
  "kebabize('myCamelCasedString') -> 'my-camel-cased-string'",
  kebabize("myCamelCasedString") === "my-camel-cased-string"
);
console.log(
  "kebabize('myCamelHas3Humps') => 'my-camel-has-humps'",
  kebabize("myCamelHas3Humps") === "my-camel-has-humps"
);
