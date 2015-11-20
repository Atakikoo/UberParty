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

    

}