// Challenge link: https://www.codewars.com/kata/5902bc7aba39542b4a00003d/train/javascript

const whoEatsWho = (zoo) => {
  let zooTimelapse = [zoo];
  let zooArr = zoo.split(',');
  
  let i = 0;
  while (i < zooArr.length && zooArr.length >= 1) {
    const current = zooArr[i];
    const next = i < zooArr.length - 1 ? zooArr[i + 1] : null;
    const previous = i > 0 ? zooArr[i-1] : null;

    if ( i > 0 && doesEat(current, previous)) {
      zooArr.splice(i - 1, 1);
      zooTimelapse.push(eats(current, previous));
      i = i > 1 ? i - 2 : 0;
      continue;
    }
    
    if (i < zooArr.length - 1 && doesEat(current, next)) {
      zooArr.splice(i + 1, 1);
      zooTimelapse.push(eats(current, next));
      continue;
    }
    i++;
  }
  zooTimelapse.push(zooArr.join(','))
  return zooTimelapse;
}

const zooFoodChain = {
  antelope: ['grass'],
  'big-fish': ['little-fish'],
  bug: ['leaves'],
  bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
  chicken: ['bug'],
  cow: ['grass'],
  fox: ['chicken', 'sheep'],
  giraffe: ['leaves'],
  lion: ['antelope', 'cow'],
  panda: ['leaves'],
  sheep: ['grass'],
  grass: [],
  leaves: [],
}

const eats = (pred, prey) => {
  return `${pred} eats ${prey}`;
}

const doesEat = (pred, potentialPrey) => {
  return zooFoodChain[pred] ? zooFoodChain[pred].includes(potentialPrey) : false;
}

// Used for "testing" below
const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const input = "fox,bug,chicken,grass,sheep";
const expected = [
  "fox,bug,chicken,grass,sheep",
  "chicken eats bug",
  "fox eats chicken",
  "sheep eats grass",
  "fox eats sheep",
  "fox",
];
console.log('1. ', arraysEqual(whoEatsWho(input), expected), whoEatsWho(input));

const input2 = "bear,big-fish,lion,cow,bug,leaves";
const expected2 = [
  "bear,big-fish,lion,cow,bug,leaves",
  "bear eats big-fish",
  "lion eats cow",
  "bug eats leaves",
  "bear,lion,bug",
];
console.log('2. ', arraysEqual(whoEatsWho(input2), expected2), whoEatsWho(input2));

const input3 = "giraffe,leaves,leaves,leaves,bear,bug,leaves,leaves,panda";
const expected3 = [
  "giraffe,leaves,leaves,leaves,bear,bug,leaves,leaves,panda",
  "giraffe eats leaves",
  "giraffe eats leaves",
  "giraffe eats leaves",
  "bear eats bug",
  "bear eats leaves",
  "bear eats leaves",
  "giraffe,bear,panda",
];
console.log('3. ', arraysEqual(whoEatsWho(input3), expected3), whoEatsWho(input3));

const input4 = "fox,chicken,tree,chicken,bug,banana,bug,bear";
const expected4 = [
  "fox,chicken,tree,chicken,bug,banana,bug,bear",
  "fox eats chicken",
  "chicken eats bug",
  "bear eats bug",
  "fox,tree,chicken,banana,bear",
];
console.log('4. ', arraysEqual(whoEatsWho(input4), expected4), whoEatsWho(input4));
