package com.megan.Leet;

public class May5JumpGame {
//  Challenge link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge-2021/598/week-1-may-1st-may-7th/3732/
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

  public static void runProblem() {
      int[] test1 = {2, 3, 1, 1, 4};
      System.out.println("1) " + jump(test1) + " -> 2");
      int[] test2 = {1, 2, 3, 4};
      System.out.println("2) " + jump(test2) + " -> 2");
      int[] test3 = {0};
      System.out.println("3) " + jump(test3) + " -> 0");
      int[] test4 = {2, 1};
      System.out.println("4) " + jump(test4) + " -> 1");
      int[] test5 = {1, 2};
      System.out.println("5) " + jump(test5) + " -> 1");
      int[] test6 = {1, 2, 3};
      System.out.println("6) " + jump(test6) + " -> 2");
      int[] test7 = {1, 2, 1, 1, 1};
      System.out.println("7) " + jump(test7) + " -> 3");
  }

}
