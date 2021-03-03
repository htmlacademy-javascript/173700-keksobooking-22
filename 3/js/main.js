"use strict";

// исходная версия Math.random() * (lastNumber - firstNumber) + firstNumber (с изменёнными переменными) взята с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

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

const ADVERTTYPE = ['palace', 'flat', 'house', 'bungalow'];
const CHECKTIME = ['12:00', '13:00', '14:00'];
const ADVERTFEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let similarAdvertsCount = 10;

const getRandomValue = (value) => {
  return getRandomIntegerNumber(0, value.length - 1);
};

const getRandomAdvertType = (advertType) => {
  return advertType[getRandomValue(advertType)];
};

const getRandomAdvertFeatures = (initialArray) => {
  const numberFeatures = getRandomValue(initialArray);
  let finalArray = [];
  for (let i = 0; i <= numberFeatures; i++) {
    finalArray.push(initialArray[getRandomValue(initialArray)]);
  }
  finalArray.sort();
  let i = 0;
  while (i <= finalArray.length - 1) {
    if (finalArray[i] === finalArray[i + 1]) {
      finalArray.splice(i + 1, 1);
      i--;
    }
    i++;
  }
  return finalArray;
};

const createAdvert = () => {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntegerNumber(1, 8)}.png`
    },
    offer: {
      title: 'Сдается квартира в центре Токио',
      address: `${getRandomDecimalNumber(139.70000, 139.80000, 5)}, ${getRandomDecimalNumber(35.65000, 35.70000, 5)}`,
      price: getRandomIntegerNumber(10000, 10000000),
      type: getRandomAdvertType(ADVERTTYPE),
      rooms: getRandomIntegerNumber(1, 200),
      guests: getRandomIntegerNumber(1, 200),
      checkin: getRandomAdvertType(CHECKTIME),
      checkout: getRandomAdvertType(CHECKTIME),
      features: getRandomAdvertFeatures(ADVERTFEATURES),
      description: 'Уютная квартира в центре Токио с видом на сквер, весной в котором можно любоваться цветущей сакурой, а осенью - багряными клёнами.',
      photos: `http://o0.github.io/assets/images/tokyo/hotel${getRandomIntegerNumber(1, 3)}.jpg`
    },
    location: {
      x: getRandomDecimalNumber(139.70000, 139.80000, 5),
      y: getRandomDecimalNumber(35.65000, 35.70000, 5)
    }
  };
};

const similarAdverts = new Array(similarAdvertsCount).fill(null).map(() => createAdvert());

console.log(similarAdverts);
