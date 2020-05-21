class Javabuzz {
  _isDivisibleBy(divisor, number) {
    return (number % divisor === 0);
  }

  play(number) {
    if (this._isDivisibleBy(3, number)) {
      return 'Fizz';
    } else {
      return number;
    }
  }
}