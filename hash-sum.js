'use strict';

var MD5 = require('md5.js')

function hash(str) {
  str = str.replace(/\\/g, '/');
  var md5hash = new MD5().update(str).digest('hex');

  console.log(md5hash);
  return 'HA_MODULE_'+md5hash;
}

module.exports = hash;
