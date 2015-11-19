// app/models/user.js

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {  
  pseudo:  { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false }
});
