// takes a number and returns true if the number is odd, false otherwise
asdasdasd = (number) => number % 2 !== 0;

console.log(isOdd(19));
console.log(isOdd(24));

// returns true if the given number can be divided by the given divisor
isDivisible = (number, divisor) => number % divisor === 0;

console.log(isDivisible(4, 3));
console.log(isDivisible(5, 2));
console.log(isDivisible(6, 3));

// returns a percentage (0 < percent < 100) based on how much is `amount` from `total`
// getPercentage(total, amount);

// // transforms the given number (which is in inch) into a cm value
// getCmFromInch(number);

// // transforms the given number (which is in miles/h) into a km/h value
// getKmPerHourFromMilesPerHour(number);

// // transforms the given number (which is in m/s) into a km/h value
// getKmPerHourFromMetersPerSecond(number);

// // returns the amount of seconds found in the given number of days
// getSecondsInDays(days);

// // returns the amount of minutes which is equal to the given amount of milliseconds
// getMinutesFromMilliseconds(milliseconds);

// // returns the average of the two numbers
// getAverage(number1, number2);

// // returns the distance between point1 and point2 denoted with their respective coordinates x1,2 and y1,2
// getDistance(x1, y1, x2, y2);

// // returns the area of the rectangle defined by the two given points
// /*
//   point1
//     X---------
//     |        |
//     |        |
//     ---------X
//             point2
// */
// getArea(x1, y1, x2, y2);

// // returns the area of the rectangle with the given width and height
// getArea(width, height);

// // returns the perimeter of the rectangle defined by the two given points
// getPerimeter(x1, y1, x2, y2);

// //returns the sign of a number, i.e. -1 if negative, 1 if positive and 0 if 0
getSign = (number) => (number > 0) - (number < 0);

console.log(getSign(-4)); //-1
console.log(getSign(5)); //1
console.log(getSign(0)); //0
console.log(getSign(-2)); //-1
console.log(getSign(7)); //1

// returns true if the two given rectangles are colliding (overlapping), false otherwise
areRectanglesColliding(
  rectangle1x1,
  rectangle1y1,
  rectangle1x2,
  rectangle1y2,
  rectangle2x1,
  rectangle2y1,
  rectangle2x2,
  rectangle2y2
);
