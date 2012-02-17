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

/*
 * POST /users
 * Creates new user
 */
exports.create = function(req, res) {
  UsersRepository.save(req.body, function(err){
    if (err) res.json(err, 500);
    else res.send(req.body);
  });
};

/*
 * PUT /users/id
 * Updates existing user
 */
exports.update = function(req, res) {
  UsersRepository.update(req.body, function(err){
    if (err) res.json(err, 500);
    else res.send(req.body);
  });
};


/*
 * Temporary testing method to create dummy user using GET request
 * Will be removed in the future
 */
exports.new = function(req, res) {
  var newUser = {
      email : "john.doe@example.com"
  }

  // using repository
  UsersRepository.save(newUser, function(err){
    if (err) res.json(err, 500);
    else res.redirect("/users");
  });
};
