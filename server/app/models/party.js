// app/models/party.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Party', {
  //photo: String,
  promoter: { type: String, required: true},
  date: Date, // hour can be put with the datepicker
  name: { type: String, required: true},
  description: { type: String, required: true},
  nbPlace: Number,
  soft: [String],
  softPrice: Number,
  alcohol: [String],
  alcoholPrice: Number,
  toEat: [String],
  toEatPrice: Number,
  freePrice: Boolean,
  budget: Number,
  comment: [String],
  toBring: [String],
  registration: [String],
  paid: [String]
});

// miaou
