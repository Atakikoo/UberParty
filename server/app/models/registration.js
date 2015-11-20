// app/models/registration.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Registration', {
  soft: [String],
  alcohol: [String],
  toEat: [String],
  freePrice: Boolean,
  // comment: [String],
  // toBring: [String],
  registration: [String],
  paid: [String],
});