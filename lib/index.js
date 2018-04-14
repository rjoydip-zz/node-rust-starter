const ffi = require('ffi');
const path = require('path');
const process = require('process');

const isWin = /^win/.test(process.platform);

module.exports = ffi.Library(path.join(__dirname, '../target/release', (!isWin ? 'lib' : '') + 'embed'), {
  multiple: ['int', ['int', 'int']],
  addition: ['int', ['int', 'int']]
});