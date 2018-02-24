'use strict';

var MD5 = require('md5.js')

function hash(str) {
  str = str.replace(/\\/g, '/'); // this is required because Windows is creating paths with "\" vs "/" like all other systems, and will produce a different md5 hash
  str = str.replace(/(\r\n|\n|\r|\s)/gm,""); // same as above, but for whitespaces and new lines
  var md5hash = new MD5().update(str).digest('hex');

  return 'HA_MODULE_'+md5hash;
}

module.exports = hash;
