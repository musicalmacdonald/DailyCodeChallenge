package com.megan.Leet;

public class May5JumpGame {
  /* Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

  Each element in the array represents your maximum jump length at that position.

  Your goal is to reach the last index in the minimum number of jumps.

  You can assume that you can always reach the last index. */

  public static int jump(int[] nums) {
    int jumps = 0;
    int i = 0;
//    System.out.printf("i: %d val: %d %n", i, nums[i]);
    if(nums.length == 1) return 0;
    if(nums[i] >= nums.length) jumps++;
    while ((i + nums[i]) < nums.length) {
      int maxValue = 0;
      int nextIndex = i;

      for (int j = i+1; j <= nums[i]+i; j++) {
        if (nums[j] > maxValue) {
          maxValue = nums[j];
          nextIndex = j;
        }
      }
      i=nextIndex;
      jumps++;
    }

    return jumps;
  }

}
