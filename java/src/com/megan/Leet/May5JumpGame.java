package com.megan.Leet;

public class May5JumpGame {
  /* Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

  Each element in the array represents your maximum jump length at that position.

  Your goal is to reach the last index in the minimum number of jumps.

  You can assume that you can always reach the last index. */

  public static int jump(int[] nums) {
    if(nums.length == 1) return 0;

    int jumps = 0;
    int endIndex = nums.length - 1;
    int currentIndex = 0;
    int currentReach = currentIndex + nums[currentIndex];

    if(currentReach >= endIndex) {
      return jumps + 1;
    }

    do {
      jumps++;

      int nextIndex = currentIndex;
      int nextReach = currentReach;

      for (int j = currentIndex + 1; j <= currentReach; j++) {
        int possMaxIndex = j + nums[j];
        if (nextReach < possMaxIndex) {
          nextIndex = j;
          nextReach = possMaxIndex;
          if (nextReach >= endIndex) return jumps + 1;
        }
      }

      currentIndex = nextIndex;
      currentReach = nextReach;

    } while (currentReach < endIndex);

    return jumps;
  }

}
