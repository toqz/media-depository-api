
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

  /**** Enable CORS request ****/
  app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.get('/users', users.all);
  app.get('/me', users.me);

  app.get('/media', media.all);
  app.get('/media/:searchparam', media.findOne);
  app.post('/media', media.add);
  app.delete('/media/:id', media.remove);
  app.put('/media/:id', media.update);
  
}