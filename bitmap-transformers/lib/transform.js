'use strict';

const transform = module.exports = {};

transform.scale = (colorTable) => {
  for (var i = 0; i < colorTable.length; i+= 4) {
    //colorTable[i] = 0; //Blue
    //colorTable[i+1] = 0; //Green
    colorTable[i+2] = 255; //Red
    //colorTable[i+3] = 0; // Throw
  }
  return colorTable;
};
