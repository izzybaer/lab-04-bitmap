'use strict';

const readWrite = require('../lib/read-write.js');
const expect = require('expect');

let filePath = '../assets/house.bmp';

describe('testing read write function', () => {
  it('should return a buffer', (done) => {
    console.log('test', filePath);
    readWrite.read(filePath, (err, data) => {
      expect(err).toBe(null);
      expect(Buffer.isBuffer(data)).toEqual(true);
      done();
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
