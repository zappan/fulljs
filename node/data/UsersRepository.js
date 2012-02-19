var db = require("../data/_dbConfig").db
  , CommonRepository = require("./CommonRepository").CommonRepository;

UsersRepository = function() {};
UsersRepository.prototype = new CommonRepository;
UsersRepository.prototype.constructor = UsersRepository;
UsersRepository.prototype.dbCollection = db.users;

exports.Repository = new UsersRepository();
