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
    let transformedImageBuffer = Buffer.concat(newBitmapArr);
    console.log('x', transformedImageBuffer);
    readWrite.write('./assets/sample.bmp', data);
  });
};



// let x = readWrite(../assets/house.bmp);
// unfinished write code >>>
readWrite.write = (outputPath, buff, callback) => {
  fs.writeFile(outputPath, buff , (err) =>{
    if(err) console.error(err);
    return true;
  });
};
