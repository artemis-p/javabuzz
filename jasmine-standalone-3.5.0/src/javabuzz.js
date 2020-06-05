class JavaBuzz {
  _isDivisibleBy(divisor, number) {
    return (number % divisor === 0);
  }

  play(number) {
    if (this._isDivisibleBy(15, number)) {
      return 'JavaBuzz';
    } else if (this._isDivisibleBy(3, number)) {
      return 'Java';
    } else if (this._isDivisibleBy(5, number)) {
      return 'Buzz';
    } else {
      return number;
    }
  }
}
var javaBuzz = new JavaBuzz;

for (var i = 1; i <= 100; i++) {
  console.log(javaBuzz.play(i));
}