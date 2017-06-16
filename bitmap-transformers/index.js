'use strict';

const bitmapFileRead  = require('./lib/read-write.js');
const bitmap = require('./lib/bitmap.js');
const filepath = process.argv[2];

let buff = bitmapFileRead.read(filepath, bitmap.Constructor);
