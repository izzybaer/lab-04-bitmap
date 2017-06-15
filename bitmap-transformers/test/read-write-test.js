'use strict'

const readWrite = require('../lib/read-write.js');
const expect = require('expect');
let filePath = '../../assets/house.bmp'

describe('testing read write function', () => {
  it('should return a buffer', () => {
    expect(readWrite.read(filePath).toBe(!null));
  })
})
