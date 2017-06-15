'use strict'

const readWrite = require('../lib/read-write.js');
const expect = require('expect');

let filePath = '../assets/house.bmp';

describe('testing read write function', () => {
  it('should return a buffer', (done) => {
    console.log(filePath);
    readWrite.read(filePath, (err, data) => {
      // expect(err).toBe(null);
      console.log(data);
      expect(typeof data).toEqual('object');
      done();
    })
  })
})
