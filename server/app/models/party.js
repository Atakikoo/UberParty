// app/models/party.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Party', {
  name: String,
  lastname: String,
  username: String,
  password: String,
  type: String
});