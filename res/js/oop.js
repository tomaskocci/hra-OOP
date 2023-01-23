class Calculator {
  sum(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }
  mul(a, b) {
    return a * b;
  }
  div(a, b) {
    return a / b;
  }
}

const myCalc = new Calculator();
console.log(myCalc.sum(5, 4));
console.log(myCalc.sub(5, 4));
console.log(myCalc.mul(5, 4));
console.log(myCalc.div(5, 4));

class StaticCalculator {
  static sum(a, b) {
    return a + b;
  }
  static sub(a, b) {
    return a - b;
  }
  static mul(a, b) {
    return a * b;
  }
  static div(a, b) {
    return a / b;
  }
}
console.log("Static :)");
console.log(StaticCalculator.sum(5, 4));
console.log(StaticCalculator.sub(5, 4));
console.log(StaticCalculator.mul(5, 4));
console.log(StaticCalculator.div(5, 4));
