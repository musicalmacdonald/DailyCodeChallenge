// Challenge link: https://www.codewars.com/kata/5531abe4855bcc8d1f00004c/javascript

function bowlingScore(frames) {
  const perfectGame = "X X X X X X X X X XXX";

  if (frames === perfectGame) {
    return 300;
  }

  let finalScore = 0;
  const rollMultiplier = [
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1, 1],
  ];
  const frameArr = frames.split(' ');

  frameArr.forEach((frame, i) => {
    frame.split("").forEach((score, j) => {
      switch (score) {
        case "X":
          finalScore += 10 * rollMultiplier[i][j];
          increaseMultipliersAfterStrike(i);
          break;
        case "/":
          const scoreUpdate = 10 - parseInt(frameArr[i][j - 1]);
          finalScore += scoreUpdate * rollMultiplier[i][j];
          increaseMultipliersAfterSpare(i);
          break;
        default:
          finalScore += parseInt(score, 10) * rollMultiplier[i][j];
          break;
      }
    });
  });

  return finalScore;

  function increaseMultipliersAfterStrike(currFrame) {
    if (currFrame + 1 < 10) {
      if (frameArr[currFrame + 1].length >= 2) {
        rollMultiplier[currFrame + 1][0] += 1;
        rollMultiplier[currFrame + 1][1] += 1;
      } else if (frameArr[currFrame + 1].length == 1) {
        rollMultiplier[currFrame + 1][0] += 1;
        if (currFrame + 2 < 10) {
          rollMultiplier[currFrame + 2][0] += 1;
        }
      }
    }
  }

  function increaseMultipliersAfterSpare(currFrame) {
    if (currFrame + 1 < 10) {
      rollMultiplier[currFrame + 1][0] +=  1;
    }
  }
}
