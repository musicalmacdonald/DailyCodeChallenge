// Challenge link: https://www.codewars.com/kata/51e056fe544cf36c410000fb

const topThreeWords = (text) => {
  const words = text.replace(/[^\w'\s]/g, "").toLowerCase().split(/\s+/);
  const wordCounts = {};

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0 && words[i].match(/\w/)) {
      wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    }
  }

  const sorted = Object.keys(wordCounts)
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => wordCounts[b] - wordCounts[a]);

  return sorted.slice(0, 3);
};
