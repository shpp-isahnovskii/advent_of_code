import fs from 'fs';

const filePath = './codes.txt';
const dataArr = fs.readFileSync(filePath, 'utf8').split('\n');

const getCode = (arr) => {
  return arr.reduce((acc, el) => getCalibration(el) + acc, 0);
};

const getCalibration = (codeString) => {
  const digitChar = /\d/g;
  const arrayOfCodes = codeString.match(digitChar);
  return decryptAnArray(arrayOfCodes);
};

const decryptAnArray = (array) => {
  return +(array.length > 1 ? `${array[0]}${array[array.length - 1]}`: `${array[0]}${array[0]}`);
};

console.log(getCode(dataArr));