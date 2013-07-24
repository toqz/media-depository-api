/*
* 1. load modules (express, fs, mongoose)
* 2. load config (development | production)
* 3. init mongoose
* 4. load models
* 5. load express settings
* 6. bootstrap routes
* 7. start server
**/

var express = require('express')
    , fs = require('fs')
    , mongoose = require('mongoose')
    

// Load configurations
// if test env, load example file
var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env]

mongoose.connect(config.db)

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    console.log("mongoose connected");

});

// bootstrap models
var models_path = __dirname + '/app/models';
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) 
    require(models_path + '/' + file)
});

// express settings
var app = express();
require('./config/express')(app, config)


// Bootstrap routes
require('./config/routes')(app)
 
// Start the app by listening on <port>
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// expose app
exports = module.exports = app
