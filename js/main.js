// исходная версия Math.random() * (lastNumber - firstNumber) + firstNumber (с изменёнными переменными) взята с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomDecimalNumber = (firstNumber, lastNumber, decimalPlaces) => {
  let totalNumber;
  if (firstNumber >= 0, lastNumber >= 0) {
    let min = firstNumber;
    let max = lastNumber;
    if (firstNumber <= lastNumber) {
      min = lastNumber;
      max = firstNumber;
    }
    totalNumber = Math.random() * (max - min) + min;
  } else {
    console.log("Одно или оба числа являются отрицательными.");
  }
  return +(totalNumber.toFixed(decimalPlaces));
};

const getRandomIntegerNumber = (firstNumber, lastNumber) => {
    return Math.round(getRandomDecimalNumber(firstNumber, lastNumber, 0));
};

console.log(getRandomIntegerNumber(2, 5));
