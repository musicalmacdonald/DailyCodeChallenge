// Challenge link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge-2021/598/week-1-may-1st-may-7th/3730/


// 104 ms for test case
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = [];
  for (let i = 0; i < nums.length; i++) {
    if (i - 1 > 0) {
      sum[i] = nums[i] + sum[i - 1];
    } else {
      sum[i] = nums[i];
    }
  }
  return sum;
};

// 108 ms for test case
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum2 = function (nums) {
  const sums = [];
  nums.reduce(function (acc, currentValue) {
    sums.push(currentValue + acc);
    return currentValue + acc;
  }, 0);
  return sums;
};
