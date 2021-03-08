const getRandomDecimalNumber = (firstNumber, lastNumber, decimalPlaces) => {
  let totalNumber;
  if (firstNumber >= 0 && lastNumber >= 0) {
    let min = firstNumber;
    let max = lastNumber;
    if (firstNumber <= lastNumber) {
      min = lastNumber;
      max = firstNumber;
    }
    totalNumber = Math.random() * (max - min) + min;
  return +(totalNumber.toFixed(decimalPlaces));
  }
};

const getRandomIntegerNumber = (firstNumber, lastNumber) => {
    return Math.round(getRandomDecimalNumber(firstNumber, lastNumber, 0));
};

export {getRandomDecimalNumber, getRandomIntegerNumber};
