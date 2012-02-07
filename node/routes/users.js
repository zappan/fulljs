// Repositories
var UsersRepository = require("../data/UsersRepository").UsersRepository

var mongoose = require('mongoose')
  , User = mongoose.model('User')

/*
 * GET users
 */
exports.index = function(req, res){
  //res.json({ user : "some user" });              // returns json

  // using repository
  UsersRepository.findAll(function(err, docs) {
    if (err) res.json(err, 500);
    else res.json(docs);
  });

  // using mongoose direct, without repository
  /*
  User.find({}, function(err, users) {
    if (err) res.json(err, 500);
    else res.json(users);
  });
  */
};

exports.new = function(req, res) {
  var newUser = new User();
  newUser.email = "zappan@kset.org"

  // using repository
  UsersRepository.save(newUser, function(err){
    if (err) res.json(err, 500);
    else res.redirect("/users");
  });

  // using mongoose direct, without repository
  /*
  newUser.save(function (err) {
    if (err) res.json(err, 500);
    else res.redirect("/users");
  });
  */
}
