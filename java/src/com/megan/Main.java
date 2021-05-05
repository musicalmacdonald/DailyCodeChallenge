package com.megan;

public class Main {

    public static void main(String[] args) {
        // Challenge 4
//	      Queens.queensHit();


//      Leet May 4 "Tests"
      int[] test1 = {3, 4, 2, 3};
      System.out.println("1) " + LeetMay4.checkPossibility(test1) + " -> false");
      int[] test2 = {1, 2, 3, 4};
      System.out.println("2) " + LeetMay4.checkPossibility(test2) + " -> true");
      int[] test3 = {4, 2, 3};
      System.out.println("3) " + LeetMay4.checkPossibility(test3) + " -> true");
      int[] test4 = {4, 3, 2, 5};
      System.out.println("4) " + LeetMay4.checkPossibility(test4) + " -> false");
      int[] test5 = {4, 2};
      System.out.println("5) " + LeetMay4.checkPossibility(test5) + " -> true");
      int[] test6 = {1};
      System.out.println("6) " + LeetMay4.checkPossibility(test6) + " -> true");
      int[] test7 = {1, 1, 1};
      System.out.println("7) " + LeetMay4.checkPossibility(test7) + " -> true");
      int[] test8 = {5, 7, 1, 8};
      System.out.println("8) " + LeetMay4.checkPossibility(test8) + " -> true");
      int[] test9 = {-1, 4, 2, 3};
      System.out.println("9) " + LeetMay4.checkPossibility(test9) + " -> true");
      int[] test10 = {4, 2, 1};
      System.out.println("10) " + LeetMay4.checkPossibility(test10) + " -> false");
      int[] test11 = {1, 2, 4, 5, 3};
      System.out.println("10) " + LeetMay4.checkPossibility(test11) + " -> true");
    }
}
