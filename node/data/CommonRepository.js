var ObjectId = require("../data/_dbConfig").ObjectId;

CommonRepository = function() {};

// findAll
CommonRepository.prototype.findAll = function(callback) {
  if (!this.dbCollection || !this.dbCollection.find)
    return callback("Fatal error! Missing repository's dbCollection");
  
  this.dbCollection.find({}, function(err, models) {
    if (err) return callback(err);
    else callback(null, models);
  });
};

// findById
CommonRepository.prototype.findById = function(id, callback) {
  if (!this.dbCollection || !this.dbCollection.findOne)
    return callback("Fatal error! Missing repository's dbCollection");
  
  this.dbCollection.findOne({ _id : id }, function(err, models) {
    if (err) return callback(err);
    else callback(null, models);
  });
};

// save
CommonRepository.prototype.save = function(model, callback) {
  if (!this.dbCollection || !this.dbCollection.save)
    return callback("Fatal error! Missing repository's dbCollection");
  
  this.dbCollection.insert(model, function(err, result) {
    if (err) return callback(err);
    else callback(null, model);
  });
};

// update
CommonRepository.prototype.update = function(model, callback) {
  if (!this.dbCollection || !this.dbCollection.update)
    return callback("Fatal error! Missing repository's dbCollection");
  
  var modelId = ObjectId(model._id);
  delete model._id;

  this.dbCollection.update({ "_id" : modelId }, { $set : model }, function(err, result) {
    if (err || !result) return callback(err);
    else callback(null, model);
  });
};

// delete
CommonRepository.prototype.delete = function(modelId, callback) {
  if (!this.dbCollection || !this.dbCollection.remove)
    return callback("Fatal error! Missing repository's dbCollection");
  
  modelId = ObjectId(modelId);
  this.dbCollection.remove({ "_id" : modelId }, function(err, result) {
    if (err || !result) return callback(err);
    else callback(null);
  });
};

exports.CommonRepository = CommonRepository;
