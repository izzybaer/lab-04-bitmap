'use strict';

const colorScale = require('./lib/transform.js');
const bitmapFileRead  = require('./lib/read-write.js');
const bitmap = require('./lib/bitmap.js');
const filepath = process.argv[2];

let buff = bitmapFileRead.read(filepath, colorScale.greyScale);
