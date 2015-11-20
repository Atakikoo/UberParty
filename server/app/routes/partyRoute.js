var User = require('../models/user.js');
var Party = require('../models/party.js');
var registration = require('../models/registration.js');

module.exports = function(app) {

  /*-----PARTY CRUD-----*/

   app.post('/uberParty/parties', function(req, res) {
    Party.create({
      photo: req.body.pseudo,
	  promoter: req.body.planer,
	  date: req.body.date,
	  name: req.body.name,
	  description: req.body.description,
	  nbPlace: req.body.nbPlace,
	  softPrice: req.body.softPrice,
	  alcoholPrice: req.body.alcoholPrice,
	  ToEatPrice: req.body.ToEatPrice,
	  freePrice: req.body.freePrice,
    }, function(err, party) {
      if (err)
        res.send(err);
      res.status(200).end();
    });
  });

    

}
