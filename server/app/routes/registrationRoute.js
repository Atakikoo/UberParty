var User = require('../models/user.js');
var Party = require('../models/party.js');
var Registration = require('../models/registration.js');

// je m'inscris et jeviens avec un guest

module.exports = function(app) {

  /*-----PARTY CRUD-----*/

   app.post('/uberParty/registration', function(req, res) {
    Party.create({
	  soft: [req.body.soft],
	  alcohol: [req.body.alcohol],
	  toEat: [req.body.toEat],
	  freePrice: req.body.freePrice,
	  budget: req.body.budget,
	  comment: req.body.comment,
	  toBring: req.body.toBring,
	  registration: [req.body.registration],
	  paid: [req.body.paid]
    }, function(err, party) {
      if (err)
        res.send(err);
      res.status(200).end();
    });
  });


   // get all users
    app.get('/uberParty/registrations', function(req, res) {
    User.find(function(err, registration) {
      if (err)
        res.send(err);
      res.json(registrations);
    });
  });

    // create party
   app.post('/uberParty/registration', function(req, res) {
    Party.create({
      soft: req.body.soft,
	  alcohol: req.body.alcohol,
	  toEat: req.body.toEat,
	  freePrice: req.body.freePrice,
	  budget: req.body.budget,
	  comment: req.body.comment,
	  toBring: req.body.toBring,
	  registration: req.body.registration,
	  paid: req.body.paid,
    }, function(err, registration) {
      if (err)
        res.send(err);
      res.status(200).end();
    });
  });

    // delete party    BAD!!!!!!!!
  app.delete('/uberParty/parties/:registration_id', function(req, res) {
    Party.remove({
      _id: req.params.id
    }, function(err, registration) {
      if(err)
        res.send(err);
      res.status(200).end();
    })
  });

  // update registration
  app.put('/uberParty/registration /:party_id', function(req, res){
    var data = {};
    if (req.body.soft)
      data.soft = req.body.soft;
    if (req.body.name)
      data.name = req.body.name;
  	if (req.body.budget)
      data.budget = req.body.budget;
    if (req.body.toBring)
      data.toBring = req.body.toBring;
  	if (req.body.alcoholPrice)
      data.alcoholPrice = req.body.alcoholPrice;
  	if (req.body.paid)
      data.paid = req.body.paid;
  	if (req.body.freePrice)
      data.freePrice = req.body.freePrice;

    Registration.update({
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