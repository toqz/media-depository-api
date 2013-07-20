
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , User = mongoose.model("User")

// Save
// user1.save(function (err, user1) {
//   console.log("save");
// })

// var mongoose = require('mongoose')
//   , User = mongoose.model('User')
//   , utils = require('../../lib/utils')  // ??? handling errors

  
/**
 *  get all user
 */

exports.all = function (req, res) {
  
  User.find(function (err, users) {
   res.send(users);
  })
  
}

  
/**
 *  get one user
 */

exports.me = function (req, res) {
  
  res.send({todo: 'should display user by id'})
  
}