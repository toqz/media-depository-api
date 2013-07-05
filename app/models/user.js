
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  // , crypto = require('crypto')
  // , _ = require('underscore')
  // , authTypes = ['github', 'twitter', 'facebook', 'google']
  
/**
 * User Schema
 */

var UserSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  provider: { type: String, default: '' },
  hashed_password: { type: String, default: '' },
  salt: { type: String, default: '' },
  authToken: { type: String, default: '' },
  facebook: {},
  twitter: {},
  github: {},
  google: {}
})


/**
 * Validations
 */



/**
 * Pre-save hook
 */

// UserSchema.pre('save', function (next) {
//   if (!this.isNew) return next()
//   
//   if( !validatePresenceOf(this.password)) && authTypes.indexOf(this.provider) === -1 )
//     next(new Error('Invalid password'))
//   else
//     next()
// })


/**
 * Methods
 */

UserSchema.methods = {
  
  /**
   * Authenticate - check if the passwords are the same
   *
   * @param {String} plainText
   * @return {Boolean}
   * @api public
   */

  
}

mongoose.model('User', UserSchema)