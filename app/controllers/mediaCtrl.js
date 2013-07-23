
/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , Media = mongoose.model("Media")
  , utils = require('util')


/**
 *  get all media
 */
exports.all = function (req, res) {
  var results = {};
  Media.find(function (err, allMedia) {
    results.media = allMedia;
    res.send(results);
  })
}


/**
 *  Add media
 */
exports.add = function(req, res) {

  var data = req.body;

  if(data){

    var media = new Media(data);

    media.save(function(err, m) {

      if(err){
        res.send({success: 'false'})
      }else{
        res.send({success: 'true'});  
      }
      
    });
  }
 
}

/**
 *  Get media with id: id
 */
exports.findOne = function (req, res) {
  
  var searchparam = req.params.searchparam
      , searchExp = new RegExp(searchparam);

      Media.findOne({src: searchExp}, function(err, results) {

      if(err) return err; 

      res.send(results);

    });

  // Media
  //   .find({ occupation: /host/ })
  //   .where('name.last').equals('Ghost')
  //   .where('age').gt(17).lt(66)
  //   .where('likes').in(['vaporizing', 'talking'])
  //   .limit(10)
  //   .sort('-occupation')
  //   .select('name occupation')
  //   .exec(callback);

}


/**
 *  Delete Media with id: id
 */
exports.remove = function (req, res) {
  var response = {}  
    , mediaId = req.params.id;

  return Media.findById(mediaId, function(err, results) {

    if (results){

      return results.remove(function() {

        if(! err) {
        
         res.send('');
        
        }else{
        
          console.log(err);
        
        }

      });

    }else{

      response.success = 'false';
      res.send(response);

    }
    
  })

}


/**
 *  Update Media
 */
exports.update = function (req, res) {
  var response = {}  
    , mediaId = req.params.id
    , data = req.body;


  return Media.findById(mediaId, function(err, media) {
    
    media.rating = data.rating;

    if (media){

      return media.save(function() {

        if(! err) {
        
         console.log('updated');
        
        }else{
        
          console.log(err);
        
        }

        res.send(media);

      });

    }else{

      response.success = 'false';
      res.send(response);

    }
    
  })

}