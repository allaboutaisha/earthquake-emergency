const mongoose = require('mongoose');

require('./category');
const packageSchema = require('./packageSchema');

module.exports = mongoose.model('Package', packageSchema);
