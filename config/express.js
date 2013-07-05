
/**
 * Module dependencies.
 */

var express = require('express')
  , mongoStore = require('connect-mongo')(express)
  // , helpers = require('view-helpers')  // don't need this yet
  , pkg = require('../package.json')


module.exports = function (app, config) {
 
  app.set('showStackError', true)
  
  app.use(express.static(config.root + '/public'))
  
  // don't use logger for test env
  if (process.env.NODE_ENV !== 'test') {
    app.use(express.logger('dev'))
  }
  
  // app.configure(function () {
  //   
  //   // express/mongo session storage
  //   app.use(express.session({
  //     secret: 'noobjs',
  //     store: new mongoStore({
  //       url: config.db,
  //       collection : 'sessions'
  //     })
  //   }))
  //   
  //   // routes should be at the last
  //   app.use(app.router)
  //       
  // })
  // 
  // // development env config
  // app.configure('development', function () {
  //   app.locals.pretty = true
  // })

}