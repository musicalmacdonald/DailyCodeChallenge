// Challenge link: https://www.codewars.com/kata/598d91785d4ce3ec4f000018

const wordValue = (a) => {
  return a.reduce((acc, word, index) => {
    const count = [...word].reduce((accLet,letter) => acc + letterValue(letter), 0);
    accLet.push(count * (index + 1));
    return acc;
  }, []);
}
​
const letterValue = (letter) => {
  return letter === " " ? 0 : letter.charCodeAt(0) - 96;
}