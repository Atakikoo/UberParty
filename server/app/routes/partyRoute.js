var User = require('../models/user.js');
var Party = require('../models/party.js');

module.exports = function(app) {

  app.get('/uberParty/parties', Party.findAll);

  app.get('/uberParty/parties/:id', Party.findById);

  app.post('/uberParty/parties', Party.create);

  app.put('/uberParty/parties/:id', Party.update);
    
  app.delete('/uberParty/parties/:id', Party.delete);

}
 