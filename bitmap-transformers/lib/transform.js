'use strict';

const transform = module.exports = {};

transform.scale = (colorTable) => {
  for (var i = 0; i < colorTable.length; i+= 4) {
    colorTable[i] = 255;
    colorTable[i+1] = 0;
    colorTable[i+2] = 0;
    colorTable[i+3] = 0;
  }
  return colorTable;
};
