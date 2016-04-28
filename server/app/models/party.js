// app/models/party.js

var mongoose = require('mongoose');
var Party = require('../models/party.js');

var partySchema = new mongoose.Schema({
  //photo: String,
  promoter: String,
  // {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User',
  //     required: true
  // },
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
  // comment: [String],
  // toBring: [String],
  registration: [String],
  paid: [String]
});

//inclure les check box dans la registration

  /*-----PARTY CRUD-------------------------------*/

var Party = {
  model: mongoose.model('Party', partySchema),

   // get all parties

    findAll: function(req, res) {
        Party.model.find({})
         //.populate("promoter", "-password")
        // .populate("entrant.user", "-password")
        .exec(function(err,parties) {
            res.json(parties);
    });
  },

    findById: function(req, res) {
    Party.model.findById(req.headers.id, function (err, party) {
       res.json(party);
    });
  },

    // create party
    create: function(req, res) {
      Party.model.create(req.body, function(err, party) {
        if (err)
          res.send(err);
        res.status(200).end();
      });
    },

    // update party
    update: function(req, res) {
      Party.model.findByIdAndUpdate(req.params.id, { $set: {
          // photo: req.body.photo,
          date: req.body.date,
          name: req.body.name,
          description: req.body.description,
          nbPlace: req.body.nbPlace,
          softPrice: req.body.softPrice,
          alcoholPrice: req.body.alcoholPrice,
          toEatPrice: req.body.toEatPrice,
          freePrice: req.body.freePrice
          }, $inc: {__v: 1} }, function(err, party) {
        res.sendStatus(200);
      });
    },

    // delete party
  delete: function(req,res) {
    Party.model.findByIdAndRemove(req.params.id, function(){
      res.sendStatus(200);
    })
  },

}

  module.exports = Party;