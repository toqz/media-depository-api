
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Book = mongoose.model("Book")
  
/**
 *  get all user
 */

exports.all = function (req, res) {
  
  res.send({todo: 'should display all books'})
  
}

  
/**
 *  get one user
 */

exports.findOne = function (req, res) {
  
  res.send({todo: 'should display book by id = ' + req.params.id })
  
}