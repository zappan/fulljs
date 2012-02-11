var db = require("../data/_dbConfig").db

UsersRepository = function() {};

//findAll
UsersRepository.prototype.findAll = function(callback) {
  db.users.find({}, function(err, users) {
    if (err) return callback(err)
    else callback(null, users);
  });
};

//findById
UsersRepository.prototype.findById = function(id, callback) {
  db.users.findOne({ _id : id }, function(err, users) {
    if (err) return callback(err)
    else callback(null, users);
  });
};

//save
UsersRepository.prototype.save = function(user, callback) {
  db.users.insert(user, function(err, result) {
    if (err) return callback(err)
    else callback(null, user);
  });
};

exports.UsersRepository = new UsersRepository();