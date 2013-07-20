
/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , Media = mongoose.model("Media")
  , utils = require('util')

/**
 *  get all user
 */
exports.all = function (req, res) {
  
  Media.find(function (err, allMedia) {
    // console.log(allMedia);
    res.send(allMedia);
    // if (err) // TODO handle err
    // console.log(kittens)
  })
}

exports.add = function(req, res) {

  var title = req.params.title;

  if(title){

    m = new Media({
      src: title
    });

    m.save(function(err, m) {
      res.send('save error:'+err);
    });
  }

}

/**
 *  get one user
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
 *  get one user
 */
exports.remove = function (req, res) {
  
  var mediaId = req.params.id
      , searchExp = new RegExp("'"+mediaId+"'");

      // console.log('searchExp', searchExp);

    Media.findById(mediaId, function(err, results) {

      if(err) {
        res.send('error: ' + err);
        return; 
      }

      if(results)
        Media.remove({_id:mediaId}, function(err) {
            
          if(err) {
            res.send('error removing: ' + err)
            return;
          };
          
          res.send('remove succes')
        })

    });
}