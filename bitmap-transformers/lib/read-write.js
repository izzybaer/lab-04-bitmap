'use strict';

const fs = require('fs');
const bitmap = require('./bitmap.js');

let readWrite = module.exports = {};

readWrite.result

readWrite.read = (filePath, callback) => {
  return fs.readFile(filePath, (err, data) => {
    let bitmapHeader = data.slice(0, 13);
    let dibHeader = data.slice(14, 53);
    let colorTable = data.slice(54, 1077);
    let pixelArray = data.slice(1078);
    let image = new bitmap.Constructor(bitmapHeader, dibHeader, colorTable, pixelArray);
    console.log(image)
  });
};

// let x = readWrite(../assets/house.bmp);
// unfinished write code >>>
readWrite.write = (read, callback) => {
  return fs.writeFile(fileName, buffer, (err, data) => {
    console.log(readWrite.read());
    callback(null, data);
  });
};
