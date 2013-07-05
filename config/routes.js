
/*!
 * Module dependencies.
 */

// var async = require('async')

/**
 * Controllers
 */

var users = require('../app/controllers/users')
, books = require('../app/controllers/books')

/**
 * Expose routes
 */

module.exports = function (app) {
  
  app.get('/users', users.all)
  app.get('/me', users.me)
  app.get('/books', books.all)
  app.get('/books/:id', books.findOne)
  
}