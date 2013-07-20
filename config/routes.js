
/*!
 * Module dependencies.
 */

// var async = require('async')

/**
 * Controllers
 */

var users = require('../app/controllers/userCtrl')
, media = require('../app/controllers/mediaCtrl')

/**
 * Expose routes
 */

module.exports = function (app) {
  
  app.get('/users', users.all)
  app.get('/me', users.me)


  app.get('/media', media.all)
  app.get('/media/:searchparam', media.findOne)
  app.get('/addmedia/:title', media.add)
  app.get('/deletemedia/:id', media.remove)
  
}