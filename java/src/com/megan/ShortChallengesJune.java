package com.megan;

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

}
