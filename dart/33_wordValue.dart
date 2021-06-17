// Challenge link: https://www.codewars.com/kata/598d91785d4ce3ec4f000018

List<int> wordValue(List<String> arr) {
  List<int> wordValueArr = new List<int>();

  for (int i = 0; i < arr.length; i++) {
    List<int> asciiValue = arr[i].codeUnits;

    int count = asciiValue.fold(
        0, (prev, asciiLet) => prev + (asciiLet == 32 ? 0 : (asciiLet - 96)));

    wordValueArr.add(count * (i + 1));
  }

  return wordValueArr;
}

List<int> wordValueFirstAttempt(List<String> arr) {
  List<int> wordValueArr = new List<int>();

  for (int i = 0; i < arr.length; i++) {
    List<int> asciiValue = arr[i].codeUnits;
    int totalValue = 0;

    asciiValue.forEach((asciiLet) {
      totalValue += asciiLet == 32 ? 0 : (asciiLet - 96);
    });

    wordValueArr.add(totalValue * (i + 1));
  }

  return wordValueArr;
}
