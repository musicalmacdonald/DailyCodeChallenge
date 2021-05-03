package com.megan;

import java.util.Scanner;

public class Queens {
//  Challenge #4
// Challenge link: https://hyperskill.org/learn/step/2168  -> You have to unlock basics before you can get to this challenge.  It's in the Conditional Statement section.

/* You are given coordinates of two queens on a chess board. Find out whether or not they hit each other.
  Input data format
  Four integer numbers x_1, y_1, x_2, y_2
  Output data format
  Type "YES" (uppercase) if they hit each other or "NO" if they don't.

  *** See QueensChessDiagram.png ****

  Sample Input 1:
  1 1 3 3
  Sample Output 1:
  YES
  Sample Input 2:
  1 1 4 3
  Sample Output 2:
  NO
  Sample Input 3:
  2 2 5 2
  Sample Output 3:
  YES
*/

  public static void queensHit() {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Provide 4 integers for Queen locations in 'x1 y1 x2 y2' order.");
    double x1 = scanner.nextInt();
    double y1 = scanner.nextInt();
    double x2 = scanner.nextInt();
    double y2 = scanner.nextInt();
    scanner.close();

    double slope = Math.abs(y1 - y2)/Math.abs(x1 - x2);

    // System.out.printf("x1: %d y1: %d %n x2: %d y2: %d %n slope: %d ", x1, y1, x2, y2, slope);

    Boolean diagonalCollision = slope == 1d;
    Boolean xyCollision = x1 == x2 || y1 == y2;

    if (diagonalCollision || xyCollision) {
      System.out.println("YES");
    } else {
      System.out.println("NO");
    }
  }

}
