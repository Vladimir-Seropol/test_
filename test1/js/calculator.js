class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Ошибка: деление на ноль";
    }
    return a / b;
  }
}

const calculator = new Calculator();

console.log("Сложение: 1 + 1 =", calculator.add(1, 1));
console.log("Вычитание: 1 - 3 =", calculator.subtract(1, 3));
console.log("Умножение: 2 * 2 =", calculator.multiply(2, 2));
console.log("Деление: 2 / 2 =", calculator.divide(2, 2));
console.log("Деление на ноль: 1 / 0 =", calculator.divide(1, 0));
