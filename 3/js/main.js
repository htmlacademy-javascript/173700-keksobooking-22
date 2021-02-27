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

let advertLocationX = getRandomDecimalNumber(139.70000, 139.80000, 5);
let advertLocationY = getRandomDecimalNumber(35.65000, 35.70000, 5);
let advertType = ['palace', 'flat', 'house', 'bungalow'];
let checkTime = ['12:00', '13:00', '14:00'];
let advertFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let advertPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
let similarAdvertsCount = 3;

const getRandomAdvertType = (advertType) => {
  return advertType[getRandomIntegerNumber(0, advertType.length - 1)];
};

const getRandomAdvertFeatures = (initialArray) => {
  let numberFeatures = getRandomIntegerNumber(0, initialArray.length - 1);
  let finalArray = [];
  for (let i = 0; i <= numberFeatures; i++) {
    finalArray.push(initialArray[getRandomIntegerNumber(0, initialArray.length - 1)]);
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
      avatar: 'img/avatars/user' + ('0' + getRandomIntegerNumber(1, 8)) + '.png'
    },
    offer: {
      title: 'Сдается квартира в центре Токио',
      address: advertLocationX + ', ' + advertLocationY,
      price: getRandomIntegerNumber(10000, 10000000),
      type: getRandomAdvertType(advertType),
      rooms: getRandomIntegerNumber(1, 200),
      guests: getRandomIntegerNumber(1, 200),
      checkin: getRandomAdvertType(checkTime),
      checkout: getRandomAdvertType(checkTime),
      features: getRandomAdvertFeatures(advertFeatures),
      description: 'Уютная квартира в центре Токио с видом на сквер, весной в котором можно любоваться цветущей сакурой, а осенью - багряными клёнами.',
      photos: getRandomAdvertFeatures(advertPhotos)
    },
    location: {
      x: advertLocationX,
      y: advertLocationY
    }
  };
};

const similarAdverts = new Array(similarAdvertsCount).fill(null).map(() => createAdvert());

console.log(similarAdverts);
