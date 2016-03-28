// app/models/user.js

var mongoose = require('mongoose');
var jwt      = require('jsonwebtoken');


var userSchema = new mongoose.Schema({
  username:  { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String,
           trim: true,
           unique: true,
           required: 'Email address is required',
           match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
  admin: { type: Boolean, default: false }
})


var User =  {
	model: mongoose.model('User', userSchema),

  /*-----USER CRUD-----*/

    // get one user
    find: function(username, password) {
    		User.model.findOne({
    			username: username,
          password: password
    		});
    },

    findAll: function(req, res) {
    		User.model.find({}, {password:0}, function (err, users) {
    			res.json(users);
    		})
    },

    findById: function(req, res) {
    		User.model.findById(req.headers.id, {password: 0}, function (err, user) {
			 res.json(user);
		});
    },

    create: function(req, res) {
    		User.model.create({
    			username: req.body.username,
  			  password: req.body.password,
          email: req.body.email
        }, function(err, user) {
        res.sendStatus(200);
    		});
    },

    update: function(req, res) {
    		User.model.findByIdAndUpdate(req.params.id, {
	    		username: req.body.username,
	    		password: req.body.password
    		}, function(err, user) {
    		res.sendStatus(200);
    	});
    },

    delete: function(req, res) {
	    	User.model.findByIdAndRemove(req.params.id, function(){
	    		res.sendStatus(200);
	    	});
    },

  //   app.get('/uberParty/users', function(req, res) {
  //   User.find(function(err, users) {
  //     if (err)
  //       res.send(err);
  //     res.json(users);
  //   });
  // });

  // // create user
  // app.post('/uberParty/users', function(req, res) {
  //   User.create({
  //     username: req.body.username,
  //     password: req.body.password,
  //   }, function(err, user) {
  //     if (err)
  //       res.send(err);
  //     res.status(200).end();
  //   });
  // });

   // delete user
  // app.delete('/uberParty/users/:user_id', function(req, res) {
  //   User.remove({
  //     _id: req.params.id
  //   }, function(err, user) {
  //     if(err)
  //       res.send(err);
  //     res.status(200).end();
  //   })
  // });

  // // update user 
  // app.put('/uberParty/users/:user_id', function(req, res){
  //   var data = {};
  //   if (req.body.username)
  //     data.username = req.body.username;
  //   if (req.body.password)
  //     data.password = req.body.password;

  //   User.update({
  //     _id: req.params.user_id
  //   }, {$set: data,
  //       $inc: {__v: 1}
  //   }, {overwrite: true}, function(err){
  //     if (err)
  //       res.send(err);
  //     res.status(200).end();
  //   })
  // });

  //   //checkUser
  //   app.post('/uberParty/login', function(req, res) {
  //   User.find({
  //     username: req.body.username,
  //     password: req.body.password
  //   }, function(err, user){
  //     if (err || user.length == 0)
  //         res.status(404).end();
  //     res.status(200).end();
  //   })
  // });

}


module.exports = User;