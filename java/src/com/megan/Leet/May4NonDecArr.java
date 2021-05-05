package com.megan.Leet;

public class May4NonDecArr {
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

}
