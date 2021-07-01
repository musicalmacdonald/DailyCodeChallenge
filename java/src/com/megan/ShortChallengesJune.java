package com.megan;

import java.math.BigInteger;
import java.util.HashMap;

public class ShortChallengesJune {
   // #30
   // Challenge link: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/java
   public static int century(int number) {
     return (int) Math.ceil(number / 100.0);
   }

   // #31
   // Challenge link:https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/java
   public static int sumOfAngles(int n) {
     return (n - 2) * 180;
   }


  //  # 32
  //  Challenge link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/java
  public static int duplicateCount(String text) {
    int count = 0;
    HashMap<String, Integer> dict = new HashMap<String, Integer>();

    for (String letter: text.split("")) {
      String lowLetter = letter.toLowerCase();

      if (dict.containsKey(lowLetter)) {
        Integer nextLetCount = dict.get(lowLetter) + 1;
        dict.put(lowLetter, nextLetCount);

        // Adding this line removes the 2nd loop
        if (nextLetCount == 2) count++;
      } else {
        dict.put(lowLetter, 1);
      }
    }
    // for (Integer i : dict.values()) {
    //   if(i > 1) count++;
    // }
    return count;
  }

  // # 33
  // Challenge link: https://www.codewars.com/kata/598d91785d4ce3ec4f000018
  public static int [] nameValue(String [] arr){
    int[] values = new int[arr.length];

    for (int i=0; i < arr.length; i++) {
      int count = 0;

      for(char letter: arr[i].toCharArray()) {
        count += letter == ' ' ? 0 : (int) letter - 96;
      }

      values[i] = count * (i + 1);
    }
    return values;
  }

  // #35
  // Challenge link: https://www.codewars.com/kata/559a28007caad2ac4e000083
  public static BigInteger perimeter(BigInteger n) {
    return fibSum(n).multiply(BigInteger.valueOf(4));
  }

  static BigInteger fibSum(BigInteger n) {
    BigInteger fib0 = BigInteger.ZERO;
    BigInteger fib1 = BigInteger.ONE;
    BigInteger sum = BigInteger.ZERO;
    for (int i = 0; i <= n.intValue(); i++) {
      sum = sum.add(fib1);
      fib1 = fib1.add(fib0);
      fib0 = fib1.subtract(fib0);
    }
    return sum;
  }

  // #40
  // Challenge link: https://www.codewars.com/kata/5c09ccc9b48e912946000157
  public static int peakHeight(char[][] mountain) {
    int count = 1;
    char checkChar = ' ';

    while (hasVal(mountain, '^')) {
      for (int i = 0; i < mountain.length; i++) {
        for (int j = 0; j < mountain[i].length; j++) {
          if (
              mountain[i][j] == '^' &&
                  checkTBRL(mountain, i, j, checkChar)
          ) {
            mountain[i][j] = (char) count;
          }
        }
      }
      checkChar = (char) count;
      count++;
    }

    // remove last count increase
    return count - 1;
  }

  private static boolean hasVal(char[][]arr, char checkVal) {
    boolean isPresent = false;
    for (char[] subArray : arr) {
      for(char current: subArray) {
        if(current == checkVal) {
          isPresent = true;
          break;
        }
      }
    }
    return isPresent;
  };

  private static boolean checkTBRL(char[][] arr, int i, int j, char checkChar) {
    // if you hit an edge return true (the else case below)
    boolean top = i > 0 ? arr[i - 1][j] == checkChar : true;
    boolean bottom = i < arr.length - 1 ? arr[i + 1][j] == checkChar : true;
    boolean right = j < arr[i].length - 1 ? arr[i][j + 1] == checkChar : true;
    boolean left = j > 0 ? arr[i][j - 1] == checkChar : true;

    return top || bottom || right || left;
  };




  public class Dinglemouse {



  }






}
