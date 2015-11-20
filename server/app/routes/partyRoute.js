var User = require('../models/user.js');
var Party = require('../models/party.js');
var Registration = require('../models/registration.js');
var mongoose = require('mongoose');

module.exports = function(app) {

  /*-----PARTY CRUD-----*/

   // get all users
    app.get('/uberParty/parties', function(req, res) {
    User.find(function(err, parties) {
      if (err)
        res.send(err);
      res.json(parties);
    });
  });

    // create party
   app.post('/uberParty/parties', function(req, res) {
    Party.create({
      photo: req.body.photo,
	  promoter: req.body.promoter,
	  date: req.body.date,
	  name: req.body.name,
	  description: req.body.description,
	  nbPlace: req.body.nbPlace,
	  softPrice: req.body.softPrice,
	  alcoholPrice: req.body.alcoholPrice,
	  toEatPrice: req.body.toEatPrice,
	  freePrice: req.body.freePrice,
    }, function(err, party) {
      if (err)
        res.send(err);
      res.status(200).end();
    });
  });

    // delete party
  app.delete('/uberParty/parties/:party_id', function(req, res) {
    Party.remove({
      _id: req.params.id
    }, function(err, party) {
      if(err)
        res.send(err);
      res.status(200).end();
    })
  });

  // update user 
  app.put('/uberParty/parties/:party_id', function(req, res){
    var data = {};
    if (req.body.photo)
      data.photo = req.body.photo;
    if (req.body.name)
      data.name = req.body.name;
  	if (req.body.description)
      data.description = req.body.description;
    if (req.body.softPrice)
      data.softPrice = req.body.softPrice;
  	if (req.body.alcoholPrice)
      data.alcoholPrice = req.body.alcoholPrice;
  	if (req.body.toEatPrice)
      data.toEatPrice = req.body.toEatPrice;
  	if (req.body.freePrice)
      data.freePrice = req.body.freePrice;

    User.update({
      _id: req.params.user_id
    }, {$set: data,
        $inc: {__v: 1}
    }, {overwrite: true}, function(err){
      if (err)
        res.send(err);
      res.status(200).end();
    })
  });

}
