'use strict';

const bitmap = require('../lib/bitmap.js');
const expect = require('expect');
const fs = require('fs');

describe('test the bitmap constructor', ()=>{
  it('should instentiate a new bitmap image', (done)=>{
   let readFile =  fs.readFile('../assets/house.bmp', (err,data)=> {
     let fileHeader = data.slice(0, 13);
     let dibHeader = data.slice(14, 53);
     let colorTable = data.slice(54, 1077);
     let pixelArray = data.slice(1078);
    //  console.log('testing constructor', UnitfileHeader);
     let newBitmapImage = new bitmap.Constructor(fileHeader, dibHeader, colorTable,pixelArray);
      // console.log('newB', newBitmapImage.fileHeader)
        expect(newBitmapImage.fileHeader).toEqual(fileHeader);
     done();
   });

  })
})
