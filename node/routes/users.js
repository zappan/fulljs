// Repositories
var repository = require("../data/UsersRepository").Repository
  , commons = require("./commons");

/*
 * GET users
 */
exports.index = function(req, res){
  commons.index(repository, req, res);
};

/*
 * POST /users
 * Creates new user
 */
exports.create = function(req, res) {
  commons.create(repository, req, res);
};

/*
 * PUT /users/id
 * Updates existing user
 */
exports.update = function(req, res) {
  commons.update(repository, req, res);
};

/*
 * DELETE /users/id
 * Deletes existing user
 */
exports.delete = function(req, res) {
  commons.delete(repository, req, res);
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
  repository.save(newUser, function(err){
    if (err) res.json(err, 500);
    else res.redirect("/users");
  });
};
