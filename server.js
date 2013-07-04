var express = require('express');
    // wines = require('./routes/wines');
 
// console.log("process.env.NODE_ENV", process);
 
// Load configurations
// if test env, load example file
var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env]
  , mongoose = require('mongoose')
 
mongoose.connect(config.db)

var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   // yay!
//   console.log("yay!");
//   
//   var kittySchema = mongoose.Schema({
//       name: String
//   });
//   
//   var Kitten = mongoose.model('Kitten', kittySchema);
//   
//   var silence = new Kitten({ name: 'Silence' })
//   console.log(silence.name) // 'Silence'
//   
//   kittySchema.methods.speak = function () {
//     var greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name"
//     console.log(greeting);
//   }
//   
//   
//   var Kitten = mongoose.model('Kitten', kittySchema)
//   
//   var fluffy = new Kitten({ name: 'fluffy' });
//   
//   fluffy.save(function (err, fluffy) {
//     if (err) // TODO handle the error
//     fluffy.speak();
//   });
//   
//   
//   Kitten.find(function (err, kittens) {
//     console.log("kittens", kittens);
//     // if (err) // TODO handle err
//     // console.log(kittens)
//   })
//   
// });

 
// bootstrap models
// var models_path = __dirname + '/app/models'
// fs.readdirSync(models_path).forEach(function (file) {
//   if (~file.indexOf('.js')) require(models_path + '/' + file)
// })


var app = express();
// express settings
// require('./config/express')(app, config, passport)
 
// Start the app by listening on <port>
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// expose app
exports = module.exports = app
