'use strict';

var _HA_FKING_LAST_MODULE_ID = 1;

function hash(str) {
  return 'HA_MODULE_'+(_HA_FKING_LAST_MODULE_ID++);
}

module.exports = hash;
