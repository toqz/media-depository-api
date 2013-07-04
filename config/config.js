
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , notifier = {
      service: 'postmark',
      APN: false,
      email: false, // true
      actions: ['comment'],
      // tplPath: templatePath,
      key: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }


module.exports = {
  development: {
    db: 'mongodb://heroku_app16679768:o354pkduai33i438d6f0d2a4k7@ds031948.mongolab.com:31948/heroku_app16679768',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Nodejs Express Mongoose Demo'
    }
  },
  test: {
    
  },
  production: {
    
  }
}
