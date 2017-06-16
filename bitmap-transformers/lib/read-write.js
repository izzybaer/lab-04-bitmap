'use strict';

const fs = require('fs');

let readWrite = module.exports = {};

readWrite.read = (filePath, callback) => {
  return fs.readFile(filePath, (err, data) => {
    callback(null, data);
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
