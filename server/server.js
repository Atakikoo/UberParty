// server.js

// set up ========================
var express         = require('express');
var app    
var express         = express();                  // create our app w/ express
var express-session = require('express-session');                  // create our app w/ express
var mongoose        = require('mongoose');        // mongoose for mongodb
var morgan          = require('morgan');          // log requests to the console (express4)
var bodyParser      = require('body-parser');     // pull information from HTML POST (express4)
var methodOverride  = require('method-override'); // simulate DELETE and PUT (express4)
var database        = require('./app/config/database.js');

// load the config

var database = require('./config/database');
mongoose.connect(database.url);

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({extended: 'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'}));                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ==========================

require('/server/app/routes/userRoute.js')(app);
require('/server/app/routes/partyRoute.js')(app);


// listen (start app with node server.js) ======================================
app.listen(8060);
console.log("App listening on port 8060");
