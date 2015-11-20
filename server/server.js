// server.js

// set up ========================
var express         = require('express');
var app    	        = express();                  // create our app w/ expressss
var mongoose        = require('mongoose');        // mongoose for mongodb
var morgan          = require('morgan');          // log requests to the console (express4)
var bodyParser      = require('body-parser');     // pull information from HTML POST (express4)
var methodOverride  = require('method-override'); // simulate DELETE and PUT (express4)

// load the config

var database = require('./config/database');
mongoose.connect(database.url);

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({extended: 'true'}));	            // parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'}));                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// on précise ici qu'on autorise toutes les sources
// puis dans le second header, quels headers http sont acceptés
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// dès qu'une requête de type options est envoyé à une url de l'api
// le serveur répond qu'il accepte les méthodes GET, PUT, POST, DELETE et OPTIONS
app.options('*', function (request, response, next) {
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    response.send();
});

// routes ==========================

require('./app/routes')(app);



// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");


