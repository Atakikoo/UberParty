// app/models/user.js

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  speudo: String,
  password: String,
  admin: Boolean
});
