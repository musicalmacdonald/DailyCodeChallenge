package com.megan;

// #41
// Challenge link: https://www.codewars.com/kata/5c2fd9188e358f301f5f7a7b

public class No41_BirdRiverJune2021 {
//   My general approach is to recreate the Bird's calculation by manipulating terrain to show the elevation, 
//   then flooding, and fianlly count the leftover dry land for each day

/**
 * dryGround
 * @param terrain - 2D array representation of topography
 * @return array of dry land left at the end of 3 consecutive days of flooding, handles non-flooding cases
 */
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
    
    System.out.printf("dry: %d %d %d %d", days[0], days[1], days[2], days[3]);
    return days;
  }
  
/**
 * dryCount
 * @param terrain - 2D array representation of topography
 * @return array of dry land left at the end of 3 consecutive days of flooding (does not account for non-flood capable landscapes)
 */
  private static int[] dryCount(char[][] terrain) {
    int totalArea = terrain.length * terrain[0].length;
    int[] dryLand = new int[4];
    dryLand[0] = totalArea - valCount(terrain, '-');
    
    int day = 1;
    char checkChar = ' ';

     while (day < 4) {
       int[] startPosition = getStartPos(terrain, checkChar);
       
//        keep flooding until no river '-' are directly next to any checkChar
       while(startPosition != null) {
         flood(startPosition[0], startPosition[1], terrain, checkChar);
         startPosition = getStartPos(terrain, checkChar);
       }
//       count leftover land
       int flooded = valCount(terrain, '-');
       dryLand[day] = totalArea - flooded;
//       update checkChar to next elevation
       checkChar = Character.forDigit(day++,10);
       printTerrain(terrain);
    }

    return dryLand;
  }
  
/**
 * flood  
 * @param x, y - location in array to begin
 * @param arr - 2D array representation of topography
 * @param checkVal - target character to replace with river character
 * @return VOID recursively replaces characters in arr with river character '-'
 */
  private static void flood(int x, int y, char[][] arr, char checkVal) {
    int width = arr.length;
    int depth = arr[0].length;
    for (int i = x - 1; i <= x + 1; i++) {
      if (i < 0 || i > (width - 1)) continue;
      for (int j = y - 1; j <= y + 1; j++) {
        if (j < 0 || j > (depth - 1)) {
          continue;
        } else if (arr[i][j] == checkVal || arr[i][j] == ' ') {
          arr[i][j] = '-';
          flood(i, j, arr, checkVal);
        } 
      }
    }
  }
  
/**
 * getStartPos 
 * @param arr - 2D array representation of topography
 * @param checkChar - character to check
 * @return array representing the location ([x, y]) in the array (arr[x][y]) where checkChar is next 
 *         (above, below, right or left) of a river character '-'
 *        Use with result to initiate flood method
 */
  private static int[] getStartPos (char[][] arr, char checkChar) {
    for(int i = 0; i < arr.length; i++) {
      for(int j = 0; j < arr[0].length; j++) {
        if(arr[i][j] == '-' && checkTBRL(arr, i, j, checkChar, false)) 
          return new int[]{i, j};
      }
    }
    return null;
  }

/**
 * terrainElevation 
 * @param terrain - 2D array representation of topography
 * @return 2D array representing the elevation differences in topography
 */
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
              if(checkTBRL(terrain, i, j, checkChar, true)) {
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

/**
 * hasVal 
 * @param arr - 2D array of characters
 * @param checkVal - target value
 * @return boolean indication if checkVal is present in arr
 */  
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
  

/**
 * valCount 
 * @param arr - 2D array of characters
 * @param checkVal - target value
 * @return integer count of the number of checkVal found in arr
 */  
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
  
/**
 * checkTBRL 
 * @param arr - 2D array of characters
 * @param i, j - array location
 * @param checkChar - target character to look for
 * @param defaultForEdge - expected return for locations along the boundaries of arr
 * @return boolean indicating if the checkChar is present 
 */
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
  
/**
 * checkTBRL 
 * @param arr - 2D array of characters
 * @param i, j - array location
 * @param checkChar - target character to look for
 * @param checkChar2 - second target character to look for
 * @return boolean indicating if the checkChar is present or if the location is an edge
 */
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
  
/**
 * printTerrain 
 * @param arr - 2D array of characters
 * @return VOID prints a human readable version of arr to the console
 */ 
  private static void printTerrain(char[][] arr) {
    for (char[] subArray : arr) {
      for(char current: subArray) {
        System.out.print(current);
      }
      System.out.println();
    }
    System.out.println();
  }

}
