// Challenge link: https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  if (walk.length != 10) {
    return false;
  }
  const dest = { x: 0, y: 0 };
  walk.forEach((value) => {
    switch (value) {
      case "n":
        dest.y += 1;
        break;
      case "s":
        dest.y -= 1;
        break;
      case "e":
        dest.x += 1;
        break;
      case "w":
        dest.x -= 1;
        break;
      default:
        throw new Error(
          "Your walk included invalid directions.  Please try again"
        );
    }
  });
  return dest.x === 0 && dest.y === 0;
}
