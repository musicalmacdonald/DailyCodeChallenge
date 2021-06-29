// Challenge link: https://www.codewars.com/kata/59cf0ba5d751dffef300001f

function verticalHistogramOf(s) {
  const letterCounts = {};
  let max = 0;
  const sArr = s.replace(/\s/g, "").split("");

  // count the capital letter occurances
  for (let i = 0; i < sArr.length; i++) {
    const letter = sArr[i];

    if (letter.match(/([A-Z])/g)) {
      letterCounts[letter] = (letterCounts[letter] || 0) + 1;
      // convenience for later loop
      if (letterCounts[letter] > max) {
        max = letterCounts[letter];
      }
    }
  }

  const histArr = [];
  // sort letters first so it's less expensive
  const letters = Object.keys(letterCounts).sort((a, b) => a.localeCompare(b));

  // create histogram - build line by line from top down
  for (let lineIndex = max; lineIndex > 0; lineIndex--) {
    // start each line as array of characters then join
    const line = new Array(letters.length);

    for (let lettIndex = 0; lettIndex < letters.length; lettIndex++) {
      const letterCount = letterCounts[letters[lettIndex]];
      line[lettIndex] = letterCount >= lineIndex ? "*" : " ";
    }
    // only trimEnd to keep correct spacing
    histArr.push(line.join(" ").trimEnd());
  }
  // add the bottom letter labels
  histArr.push(letters.join(" "));

  // return a string
  return histArr.join("\n");
}
