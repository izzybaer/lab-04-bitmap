'use strict';

const fs = require('fs');
const bitmap = require('./bitmap.js');

let readWrite = module.exports = {};


readWrite.read = (filePath, callback) => {
  return fs.readFile(filePath, (err, data) => {
    let bitmapHeader = data.slice(0, 13);
    let dibHeader = data.slice(14, 53);
    let colorTable = data.slice(54, 1077);
    let pixelArray = data.slice(1078);
    let image = new bitmap.Constructor(bitmapHeader, dibHeader, colorTable, pixelArray);
    // console.log(image.colorTable === newColorTable);
    // console.log('colorTable', image.colorTable);
    let newColorTable = callback(image.colorTable);
    // console.log('newColorTable', newColorTable);
    let newBitmapArr = [].concat(bitmapHeader, dibHeader, colorTable, pixelArray);
    let x = Buffer.concat(newBitmapArr);
    console.log('x', x);
    console.log('newBitmapArr', newBitmapArr);

    let newBitmap = Buffer.from(newBitmapArr);
    console.log(newBitmap);
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
