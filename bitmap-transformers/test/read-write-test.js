
'use strict';

const readWrite = require('../lib/read-write.js');
const transform = require('../lib/transform.js');
const expect = require('expect');
const fs = require('fs');

let resultFilePath = `${process.cwd()}/assets/test-sample.bmp`;
let originalFilePath = `${process.cwd()}/assets/bitmap.bmp`;

// let x = fs.readFile(originalFilePath, function (err, data) {
//   if (err)  throw err;
//   console.log(data);
//
// });

describe('testing read write function', () => {
  it('should return a color table', (done) => {

    fs.readFile(originalFilePath, (err, originalFileData) =>{

      fs.readFile(resultFilePath, (err, data) => {

        let resultColorTable = data.slice(54, 1077);
        let originalColorTable = originalFileData.slice(54,1077);

        transform.scale(originalColorTable);

        expect(resultColorTable).toEqual(originalColorTable);
        done();
      });
    });
  });
});


// new test to finish
describe('testing write function', () => {
  it('should return a buffer', (done) => {
    console.log('test', filePath);
    readWrite.read(filePath, (err, data) => {
      console.log('testing', data);
      expect(err).toBe(null);
      expect(Buffer.isBuffer(data)).toEqual(true);
      done();
    });
  });
});
