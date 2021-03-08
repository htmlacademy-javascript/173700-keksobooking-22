import {getRandomIntegerNumber} from './get-random-number.js';

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

export {getRandomAdvertType, getRandomAdvertFeatures};
