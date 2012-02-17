var db = require("../data/_dbConfig").db
  , ObjectId = require("../data/_dbConfig").ObjectId;

UsersRepository = function() {};

// findAll
UsersRepository.prototype.findAll = function(callback) {
  db.users.find({}, function(err, users) {
    if (err) return callback(err)
    else callback(null, users);
  });
};

// findById
UsersRepository.prototype.findById = function(id, callback) {
  db.users.findOne({ _id : id }, function(err, users) {
    if (err) return callback(err)
    else callback(null, users);
  });
};

// save
UsersRepository.prototype.save = function(user, callback) {
  db.users.insert(user, function(err, result) {
    if (err) return callback(err)
    else callback(null, user);
  });
};

// update
UsersRepository.prototype.update = function(user, callback) {
  var userId = ObjectId(user._id);
  delete user._id;

  db.users.update({ "_id" : userId }, { $set : user }, function(err, result) {
    if (err || !result) return callback(err)
    else callback(null, user);
  });
};

exports.UsersRepository = new UsersRepository();