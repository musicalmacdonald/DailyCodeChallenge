// Challenge link: https://hyperskill.org/learn/step/2168  -> Originally for Java, you have to unlock basics before you can get to this challenge.  It's in the Conditional Statement section.

/* You are given coordinates of two queens on a chess board. Find out whether or not they hit each other.
  Input data format
  Four integer numbers x_1, y_1, x_2, y_2
  Output data format
  Type "YES" (uppercase) if they hit each other or "NO" if they don't.

  *** See QueensChessDiagram.png ****

  Sample Input 1:
  1 1 3 3
  Sample Output 1:
  YES
  Sample Input 2:
  1 1 4 3
  Sample Output 2:
  NO
  Sample Input 3:
  2 2 5 2
  Sample Output 3:
  YES
*/

const doQueensHit = (x1, y1, x2, y2) => {
  let answer = false;
  // if the slope of the line is 1 they'll hit
  const diagonalHit = Math.abs(y1 - y2) === Math.abs(x1 - x2);
  const verticalHit = y1 === y2;
  const horizontalHit = x1 === x2;
  if (diagonalHit || verticalHit || horizontalHit) {
    answer = true;
  }
  return answer ? "YES" : "NO";
};

// YES
console.log(doQueensHit(1, 1, 3, 3));
// NO
console.log(doQueensHit(1, 1, 4, 3));
// YES
console.log(doQueensHit(2, 2, 5, 2));
// YES
console.log(doQueensHit(4, 4, 6, 2));
