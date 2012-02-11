// Repositories
var UsersRepository = require("../data/UsersRepository").UsersRepository

/*
 * GET users
 */
exports.index = function(req, res){
  UsersRepository.findAll(function(err, docs) {
    if (err) res.json(err, 500);
    else res.json(docs);
  });
};

exports.new = function(req, res) {
  var newUser = {
      email : "john.doe@example.com"
  }

  // using repository
  UsersRepository.save(newUser, function(err){
    if (err) res.json(err, 500);
    else res.redirect("/users");
  });
}
