// app/models/party.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Party', {
  date: Date,
  name: String,
  description: String,
  nbPlace: Number,
  soft: [String],
  alcohol: [String],
  toEat: [String],
  budget: Number,
  comment: String,
  toBring: String
});