var db = require("../data/_dbConfig").db
  , ObjectId = require("../data/_dbConfig").ObjectId
  , commonRepository = require("./CommonRepository").Repository;

UsersRepository = function() {};

// findAll
UsersRepository.prototype.findAll = function(callback) {
  commonRepository.findAll(db.users, callback);
};

// findById
UsersRepository.prototype.findById = function(id, callback) {
  commonRepository.findById(db.users, callback);
};

// save
UsersRepository.prototype.save = function(user, callback) {
  commonRepository.save(db.users, user, callback);
};

// update
UsersRepository.prototype.update = function(user, callback) {
  commonRepository.update(db.users, user, callback);
};

exports.Repository = new UsersRepository();