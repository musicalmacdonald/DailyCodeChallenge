package com.megan.Leet;

public class May4NonDecArr {
  //  Challenge link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge-2021/598/week-1-may-1st-may-7th/3731/
  /* Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
  We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2)*/
  public static boolean checkPossibility(int[] nums) {
//    if less than 3, true
    if(nums.length < 3) {
      return true;
    }

    int[] numsCopy = nums.clone();
    boolean[] trends = new boolean[numsCopy.length];
    int ascCount = 0;
    int descCount = 0;
    int modifyIndex = 0;

    for (int i = 1; i < numsCopy.length; i++) {
      if (numsCopy[i-1] > numsCopy[i]) {
        descCount++;
        modifyIndex = i-1;
        trends[i] = false;
      } else {
        ascCount++;
      }
    }
//    If all values are not descending, removing any value will result w/ ascending
    if (ascCount >= numsCopy.length - 1) {
      return true;
    }
    if(descCount == 1) {
      if (modifyIndex > 0 && modifyIndex < nums.length - 2) {
        numsCopy[modifyIndex] = (nums[modifyIndex-1] + nums[modifyIndex+1])/2;
        boolean modifyIndexFixes = isOrdered(numsCopy);
        numsCopy[modifyIndex] = nums[modifyIndex];
        numsCopy[modifyIndex+1] = (nums[modifyIndex] + nums[modifyIndex+2])/2;
        boolean modifyNextIndexFixes = isOrdered(numsCopy);

        return modifyIndexFixes || modifyNextIndexFixes;
      } else if (modifyIndex == 0) {
        numsCopy[modifyIndex] = numsCopy[modifyIndex+1]-1;
        return isOrdered(numsCopy);
      } else if (modifyIndex == nums.length - 2) {
        return true;
      }
    }
    return false;
  }

  static boolean isOrdered(int[] arr) {
    for(int i=0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) return false;
    }
    return true;
  }

  public static void runProblem() {
    int[] test1 = {3, 4, 2, 3};
    System.out.println("1) " + checkPossibility(test1) + " -> false");
    int[] test2 = {1, 2, 3, 4};
    System.out.println("2) " + checkPossibility(test2) + " -> true");
    int[] test3 = {4, 2, 3};
    System.out.println("3) " + checkPossibility(test3) + " -> true");
    int[] test4 = {4, 3, 2, 5};
    System.out.println("4) " + checkPossibility(test4) + " -> false");
    int[] test5 = {4, 2};
    System.out.println("5) " + checkPossibility(test5) + " -> true");
    int[] test6 = {1};
    System.out.println("6) " + checkPossibility(test6) + " -> true");
    int[] test7 = {1, 1, 1};
    System.out.println("7) " + checkPossibility(test7) + " -> true");
    int[] test8 = {5, 7, 1, 8};
    System.out.println("8) " + checkPossibility(test8) + " -> true");
    int[] test9 = {-1, 4, 2, 3};
    System.out.println("9) " + checkPossibility(test9) + " -> true");
    int[] test10 = {4, 2, 1};
    System.out.println("10) " + May4NonDecArr.checkPossibility(test10) + " -> false");
    int[] test11 = {1, 2, 4, 5, 3};
    System.out.println("10) " + May4NonDecArr.checkPossibility(test11) + " -> true");
  }

}
