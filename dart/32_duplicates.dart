// Challenge link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/dart

int duplicateCount(String text) {
  int count = 0;
  var letDict = new Map();

  text.toLowerCase().split("").forEach((let) {
    if (letDict.containsKey(let)) {
      int nextLetCount = letDict[let] + 1;
      letDict[let] = nextLetCount;
      if (nextLetCount == 2) {
        count++;
      }
    } else {
      letDict[let] = 1;
    }
  });

  return count;
}
