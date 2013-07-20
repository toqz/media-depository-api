/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , env = process.env.NODE_ENV || 'development'
  
/**
 * Getters
 */
  
  
/**
 * Setters
 */


/**
 * Book Schema
 */
var mediaSchema = new Schema({
  src: {type: String, default: ''},
  idKey: {type: String, default: ''},
  idVal: {type: String, default: ''},
  title: {type: String, default: ''},
  url: {type: String, default: ''},
  poster: {type: String, default: ''}
})


/**
 * Validations
 */
// mediaSchema.path('title').validate(function (title) {
//   return title.length > 0
// }, 'Book title cannot be blank')


/**
 * Pre-remove hook
 */


/**
 * Methods
 */
mediaSchema.methods = {

  /**
   * Save Book
   *
   * @param {Object} images
   * @param {Function} cb
   * @api private
   */
  // save: function (cb) {
  //    this.save();
  //    // console.log('save media');
  // }

}

mongoose.model('Media', mediaSchema);


