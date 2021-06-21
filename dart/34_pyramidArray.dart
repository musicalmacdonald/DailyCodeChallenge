// Challenge link: https://www.codewars.com/kata/515f51d438015969f7000013

List<List<int>> pyramidDeprecated(int n) {
  // List constructor is deprecated so new answer below
  List<List<int>> pyramidList = [];
  for (int i = 0; i < n; i++) {
    pyramidList.add(List.filled(i + 1, 1));
  }
  return pyramidList;
}

List<List<int>> pyramid(int n) {
  return List.generate(n, (int i) => List.filled(i + 1, 1));
}
