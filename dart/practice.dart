// taken from https://codelabs.developers.google.com/codelabs/from-java-to-dart?hl=en&continue=https%3A%2F%2Fcodelabs.developers.google.com%2F#3

// class Bicycle {
//   int cadence;
//   int _speed = 0;
//   int gear;

//   Bicycle(this.cadence, this.gear);

//   @override
//   String toString() => 'Bicycle: $_speed mph';

//   int get speed => _speed;

//   void applyBrake(int decrement) {
//     _speed -= decrement;
//   }

//   void speedUp(int increment) {
//     _speed += increment;
//   }
// }

// void main() {
//   var bike = Bicycle(2, 1);
//   print(bike.toString());
// }

import 'dart:math';

class Rectangle {
  int width;
  int height;
  Point origin;

  Rectangle({
    this.origin = const Point(0, 0),
    this.width = 0,
    this.height = 0,
  });

  @override
  String toString() =>
      'Origin: (${origin.x}, ${origin.y}), width: $width, height: $height';
}

main() {
  print(Rectangle(origin: const Point(10, 20), width: 100, height: 200));
  print(Rectangle(origin: const Point(10, 10)));
  print(Rectangle(width: 200));
  print(Rectangle());
} // Included main() to suppress uncaught exception.
