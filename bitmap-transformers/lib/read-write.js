'use strict';

const fs = require('fs');

let readWrite = module.exports = {};

readWrite.read = (filePath, callback) => {
 let result =  fs.readFile(filePath, (err, data) => {
    console.log(data);
    callback(null, data);
  })
};
