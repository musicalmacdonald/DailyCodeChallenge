// Challenge link: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/dart

int century(year) {
  int centNum = year > 1000 ? (year / 100).toInt() : 1;
  if (year > 1000 && year % 100 != 0) {
    centNum += 1;
  }
  return centNum;
}
//  can be simplified down to:
// int century(year) => (year / 100).ceil();

// Also did Java and JS for this challenge:
// 
// const century = year => Math.ceil(year/100)
// 
// public class Solution {
//   public static int century(int number) {
//     return (int) Math.ceil(number / 100.0);
//   }
// }