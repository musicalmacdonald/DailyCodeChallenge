package com.megan;

// #41
// Challenge link: https://www.codewars.com/kata/5c2fd9188e358f301f5f7a7b

public class No41_BirdRiverJune2021 {

  public static int[] dryGround(char[][] terrain) {
    int[] days = new int[4];
    if(hasVal(terrain, '-')) {
      char[][] elevation = terrainElevation(terrain);
      printTerrain(elevation);

      days = dryCount(elevation);
    } else {
      int totalArea = terrain.length * terrain[0].length;
      days = new int[] {totalArea, totalArea, totalArea, totalArea};
    }
    System.out.printf("Answer: %d %d %d %d \n", days[0], days[1], days[2], days[3]);
    return days;
  }

  private static int[] dryCount(char[][] terrain) {
    int day = 0;
    char checkChar = ' ';
    int totalArea = terrain.length * terrain[0].length;
    int[] dryLand = new int[4];

    int[] startPosition = getStartOfRiver(terrain);
//     System.out.printf("start: %d %d \n", startPosition[0], startPosition[1]);
    int[] nextPosition = getNextRiverPos(terrain, startPosition[0], startPosition[1]);
    System.out.printf("start: %d %d \n next: %d %d", startPosition[0], startPosition[1], nextPosition[0], nextPosition[1]);

    while (day < 4) {
//       start from river, flood
//        int[] nextPosition = getStartOfRiver(terrain);
      flood(startPosition[0], startPosition[1], terrain, checkChar);
      flood(nextPosition[0], nextPosition[1], terrain, checkChar);
//       count leftover land
      int flooded = valCount(terrain, '-');
      dryLand[day] = totalArea - flooded;
//       update checkChar to next elevation
      System.out.printf("\n %d: \n", day);
      checkChar = Character.forDigit(day++,10);
      printTerrain(terrain);
    }

    return dryLand;
  }

  private static void flood(int x, int y, char[][] arr, char checkVal) {
    int width = arr.length;
    int depth = arr[0].length;
    for (int i = x - 1; i <= x + 1; i++) {
      if (i < 0 || i > (width - 1)) continue;
      for (int j = y - 1; j <= y + 1; j++) {
        if (j < 0 || j > (depth - 1)) {
          continue;
        } else if (arr[i][j] == checkVal || arr[i][j] == ' ') {
          System.out.printf("updating %d %d", i, j);
          arr[i][j] = '-';
          flood(i, j, arr, checkVal);
        }
//         else if (arr[i][j] == '-') {
//           int[] pos = getNextRiverPos(arr, i, j);
//           flood(pos[0], pos[1], arr, checkVal);
//         }
      }
    }
  }

  public static char[][] terrainElevation(char[][] terrain) {
    int count = 1;
    char checkChar = ' ';
    char checkChar2 = '-';

    while (hasVal(terrain, '^')) {
      for (int i = 0; i < terrain.length; i++) {
        for (int j = 0; j < terrain[i].length; j++) {
          if (terrain[i][j] == '^') {
            if (count == 1) {
              if(checkTBRL(terrain, i, j, checkChar, checkChar2)) {
                terrain[i][j] = Character.forDigit(count,10);
              }
            } else {
              if(checkTBRL(terrain, i, j, checkChar)) {
                terrain[i][j] = Character.forDigit(count,10);
              }
            }
          }
        }
      }
      checkChar = Character.forDigit(count,10);
      count++;
    }

    return terrain;
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

  private static int[] getStartOfRiver (char[][] arr) {
    for(int i = 0; i < arr.length; i++) {
      for(int j = 0; j < arr[0].length; j++) {
        if(arr[i][j] == '-' && checkTBRL(arr, i, j, ' ', false))
          return new int[]{i, j};
      }
    }
    return new int[] {0, 0};
  }

  private static int[] getNextRiverPos (char[][] arr, int excludeI, int excludeJ) {
    for(int i = excludeI + 1; i < arr.length; i++) {
      for(int j = excludeJ; j < arr[0].length; j++) {
        if(arr[i][j] == '-' && checkTBRL(arr, i, j, ' ', false)) return new int[]{i, j};
      }
    }
    return new int[] {0, 0};
  }

  private static int valCount(char[][]arr, char checkVal) {
    int count = 0;
    for (char[] subArray : arr) {
      for(char current: subArray) {
        if(current == checkVal) {
          count++;
        }
      }
    }
    return count;
  };

  private static boolean checkTBRL(char[][] arr, int i, int j, char checkChar) {
    try {
      boolean top = arr[i - 1][j] == checkChar;
      boolean bottom = arr[i + 1][j] == checkChar;
      boolean right = arr[i][j + 1] == checkChar;
      boolean left = arr[i][j - 1] == checkChar;

      return top || bottom || right || left;
    } catch (ArrayIndexOutOfBoundsException e) {
      return true;
    }
  };

  private static boolean checkTBRL(char[][] arr, int i, int j, char checkChar, boolean defaultForEdge) {
    try {
      boolean top = arr[i - 1][j] == checkChar;
      boolean bottom = arr[i + 1][j] == checkChar;
      boolean right = arr[i][j + 1] == checkChar;
      boolean left = arr[i][j - 1] == checkChar;

      return top || bottom || right || left;
    } catch (ArrayIndexOutOfBoundsException e) {
      return defaultForEdge;
    }
  };

  private static boolean checkTBRL(char[][] arr, int i, int j, char checkChar, char checkChar2) {
    try {
      boolean top = arr[i - 1][j] == checkChar || arr[i - 1][j] == checkChar2;
      boolean bottom = arr[i + 1][j] == checkChar || arr[i + 1][j] == checkChar2;
      boolean right = arr[i][j + 1] == checkChar || arr[i][j + 1] == checkChar2;
      boolean left = arr[i][j - 1] == checkChar || arr[i][j - 1] == checkChar2;

      return top || bottom || right || left;
    } catch (ArrayIndexOutOfBoundsException e) {
      return true;
    }
  };

  private static void printTerrain(char[][] arr) {
    for (char[] subArray : arr) {
      for(char current: subArray) {
        System.out.print(current);
      }
      System.out.println();
    }
  }

}
