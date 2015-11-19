var User = require('../models/user.js');
var Party = require('../models/party.js');

module.exports = function(app) {

  /*-----USER CRUD-----*/

    // get all users
  //   app.get('/uberParty/users', function(req, res) {
  //   User.find(function(err, users) {
  //     if (err)
  //       res.send(err);
  //     res.json(users);
  //   });
  // });

  // create user
  app.post('/uberParty/users', function(req, res) {
    User.create({
      speudo: req.body.speudo,
      password: req.body.password,
      type: "user"
    }, function(err, user) {
      if (err)
        res.send(err);
      res.status(200).end();
    });
  });

//   // delete user
//   app.delete('/uberParty/users/:user_id', function(req, res) {
//     User.remove({
//       _id: req.params.user_id
//     }, function(err, user) {
//       if(err)
//         res.send(err);
//       res.status(200).end();
//     })
//   });

//   // update user
//   app.put('/api/users/:user_id', function(req, res){
//     User.update({
//         _id: req.params.user_id
//     }, {$set: {speudo: req.body.username,
//               password: req.body.password},
//         $inc: {__v: 1}
//     }, {overwrite: true}, function(err){
//       if (err)
//         res.send(err);
//       res.status(200).end();
//     })
//   });

// //checkUser
//   app.post('/api/login', function(req, res) {
//     User.find({
//       username: req.body.username,
//       password: req.body.pwd
//     }, function(err, user){
//       if (err || user.length == 0)
//           res.status(404).end();
//       res.status(200).end();
//     })
//   });
}
