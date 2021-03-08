import {getRandomDecimalNumber, getRandomIntegerNumber} from './get-random-number.js';
import {getRandomAdvertType, getRandomAdvertFeatures} from './get-random-value.js';

const ADVERTTYPE = ['palace', 'flat', 'house', 'bungalow'];
const CHECKTIME = ['12:00', '13:00', '14:00'];
const ADVERTFEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const similarAdvertsCount = 10;

const createAdvert = () => {
  const advertLocationX = getRandomDecimalNumber(139.70000, 139.80000, 5);
  const advertLocationY = getRandomDecimalNumber(35.65000, 35.70000, 5);
  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntegerNumber(1, 8)}.png`
    },
    offer: {
      title: 'Сдается квартира в центре Токио',
      address: `${advertLocationX}, ${advertLocationY}`,
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
      x: advertLocationX,
      y: advertLocationY
    }
  };
};

const similarAdverts = new Array(similarAdvertsCount).fill(null).map(() => createAdvert());

console.log(similarAdverts);
