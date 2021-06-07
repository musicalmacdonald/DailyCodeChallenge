// Challenge link: https://www.codewars.com/kata/55953e906851cf2441000032/javascript

const ScrambleWords = function(str) {
  const strArr = str.split(" ");
  const sentance = [];
  strArr.forEach((word) => {
    sentance.push(scrambleSingleWord2(word));
  });
  return sentance.join(" ");
};

// original
const scrambleSingleWord = function(word) {
  const wordArr = word.split("");
  const retainMap = {};
  let middle = [];
  for (let i = 0; i < wordArr.length; i++) {
    const isPunctuation = wordArr[i].match(/([^A-Z\d])/gi);
    if (
      i === 0 ||
      i === wordArr.length - 1 ||
      isPunctuation
    ) {
      retainMap[i] = wordArr[i];
      if (i === 0 && isPunctuation) {
        retainMap[i + 1] = wordArr[i + 1];
        i++;
      } else if (i === wordArr.length - 1 && isPunctuation) {
        retainMap[i - 1] = wordArr[i - 1];
        middle.pop();
        break;
      }
    } else {
      middle.push(wordArr[i]);
    }
  }

  middle.sort();
  for (let letrKey in retainMap) {
    middle.splice(letrKey, 0, retainMap[letrKey]);
  }
  return middle.join('');
}

const scrambleSingleWord2 = function (word) {
  const noPunc = [...word.replace(/([^A-Z\d])/gi, "")];
  const first = noPunc.shift();
  const last = noPunc.pop() || "";
  const scrambledWord = [first, ...noPunc.sort(), last];

  [...word].forEach((char, i) => {
    if (char.match(/([^A-Z\d])/gi)) {
      scrambledWord.splice(i, 0, char);
    }
  });
  return scrambledWord.join("");
};
