var User = require('../models/user.js');
var Party = require('../models/party.js');
var registration = require('../models/registration.js');
var mongoose = require('mongoose');

module.exports = function(app) {

  /*-----USER CRUD-----*/

    // get all users
    app.get('/uberParty/users', function(req, res) {
    User.find(function(err, users) {
      if (err)
        res.send(err);
      res.json(users);
    });
  });

  // create user
  app.post('/uberParty/users', function(req, res) {
    User.create({
      pseudo: req.body.pseudo,
      password: req.body.password,
    }, function(err, user) {
      if (err)
        res.send(err);
      res.status(200).end();
    });
  });

   // delete user
  app.delete('/uberParty/users/:user_id', function(req, res) {
    User.remove({
      _id: req.params.id
    }, function(err, user) {
      if(err)
        res.send(err);
      res.status(200).end();
    })
  });

  // update user 
  app.put('/uberParty/users/:user_id', function(req, res){
    var data = {};
    if (req.body.pseudo)
      data.pseudo = req.body.pseudo;
    if (req.body.password)
      data.password = req.body.password;

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
