import fs from 'fs';

const filePath = './codes.txt';
const dataArr = fs.readFileSync(filePath, 'utf8').split('\n');

const getCode = (arr) => {
  return arr.reduce((acc, el) => getDigit(el) + acc, 0);
};

const getDigit = (codeString) => {
  const digitRegex = /\d/g;
  const arrayOfDigits = codeString.match(digitRegex);
  return getNumber(arrayOfDigits);
};

const getNumber = (array) => {
  return +(array.length > 1 ? `${array[0]}${array[array.length - 1]}`: `${array[0]}${array[0]}`);
};

console.log(getCode(dataArr));