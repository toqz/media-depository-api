

/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , env = process.env.NODE_ENV || 'development'
  // , Imager = require('imager')
  // , config = require('../../config/config')[env]
  // , imagerConfig = require(config.root + '/config/imager.js')

  
  
/**
 * Getters
 */
  
  
/**
 * Setters
 */
  

/**
 * Book Schema
 */
  
var bookSchema = new Schema({
  title: {type: String, default: ''},
  author: {type: String, default: ''},
  source: {type: String, default: ''},
  image: {
    cdnUri: String,
    files: []
  }
})


/**
 * Validations
 */

bookSchema.path('title').validate(function (title) {
  return title.length > 0
}, 'Book title cannot be blank')


/**
 * Pre-remove hook
 */



/**
 * Methods
 */

bookSchema.methods = {

  /**
   * Save Book
   *
   * @param {Object} images
   * @param {Function} cb
   * @api private
   */

  save: function (cb) {
     this.save(cb)
  }

}


mongoose.model('Book', bookSchema)