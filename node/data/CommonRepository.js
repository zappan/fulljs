var db = require("../data/_dbConfig").db
  , ObjectId = require("../data/_dbConfig").ObjectId;

CommonRepository = function() {};

// findAll
CommonRepository.prototype.findAll = function(dbCollection, callback) {
  dbCollection.find({}, function(err, models) {
    if (err) return callback(err)
    else callback(null, models);
  });
};

// findById
CommonRepository.prototype.findById = function(dbCollection, id, callback) {
  dbCollection.findOne({ _id : id }, function(err, models) {
    if (err) return callback(err)
    else callback(null, models);
  });
};

// save
CommonRepository.prototype.save = function(dbCollection, model, callback) {
  dbCollection.insert(model, function(err, result) {
    if (err) return callback(err)
    else callback(null, model);
  });
};

// update
CommonRepository.prototype.update = function(dbCollection, model, callback) {
  var modelId = ObjectId(model._id);
  delete model._id;

  dbCollection.update({ "_id" : modelId }, { $set : model }, function(err, result) {
    if (err || !result) return callback(err)
    else callback(null, model);
  });
};

exports.Repository = new CommonRepository();