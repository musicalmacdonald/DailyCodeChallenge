// Ran 2 practices w/ a team member

// 1) Given an array of integers, print out each value recursively

const intsArr = [1, 2, 3];

const printArr = (ints) => {
  if (ints.length > 0) {
    console.log(ints[0]);
    const newArr = ints.slice(1);
    printArr(newArr);
  }
};

printArr(intsArr);

// 2) Given a string write a function to return either # of vowels or an array of the vowels

const giveMeTheVowels = (str) => {
  // create array to hold vowels
  const vowelArr = [];
  const vowels = ["a", "e", "i", "o", "u"];
  // loop
  [...str].forEach((vowel) => {
    if (vowels.includes(vowel.toLowerCase())) {
      vowelArr.push(vowel.toLowerCase());
    }
  });
  // Remove duplicates
  // Is it ok to return a set?
  return new Set(vowelArr);
};

// remember to ask for test cases
console.log(giveMeTheVowels("something with VOWELS"));