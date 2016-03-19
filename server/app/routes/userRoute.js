//     user route


var User = require('../models/user.js');
var Party = require('../models/party.js');

module.exports = function(app) {

  app.get('/uberParty/users', User.findAll);

  app.get('/uberParty/users/:id', User.findById);

  app.post('/uberParty/users', User.create);

  app.put('/uberParty/users/:id', User.update);

  app.delete('/uberParty/users/:id', User.delete);

}