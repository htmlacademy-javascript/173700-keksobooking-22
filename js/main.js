// исходная версия Math.random() * (lastNumber - firstNumber) + firstNumber (с изменёнными переменными) взята с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// const getRandomIntegerNumber
(firstNumber, lastNumber) => {
  if (firstNumber >= 0, lastNumber >= 0) {
    if (firstNumber <= lastNumber) {
      return Math.round(Math.random() * (lastNumber - firstNumber) + firstNumber);
    }
    return Math.round(Math.random() * (firstNumber - lastNumber) + lastNumber);
  }
};

// const getRandomDecimalNumber
(firstNumber, lastNumber, decimalPlaces) => {
  let totalNumber;
  if (firstNumber >= 0, lastNumber >= 0) {
    if (firstNumber <= lastNumber) {
      totalNumber = Math.random() * (lastNumber - firstNumber) + firstNumber;
    }
    totalNumber = Math.random() * (firstNumber - lastNumber) + lastNumber;
  }
  return +(totalNumber.toFixed(decimalPlaces));
};
