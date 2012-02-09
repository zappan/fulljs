/*
var mongoose = require('mongoose')
  , User = mongoose.model('User')
*/

// connect to mongodb via MongoDB native
var db = require("../data/_dbConfig").db

UsersRepository = function() {};

//findAll
UsersRepository.prototype.findAll = function(callback) {
  // using mongoose
  /*
  User.find({}, function(err, users) {
    if (err) return callback(err)
    else callback(null, users)
  });
  */

  // using MongoJS over MongoDB native driver
  db.users.find({}, function(err, users) {
    if (err) return callback(err)
    else callback(null, users);
  });

};

//findById
UsersRepository.prototype.findById = function(id, callback) {
  // using mongoose
  /*
  User.findOne({_id: id}, function(err, users) {
    if (err) return callback(err)
    else callback(null, users)
  });
*/

  // using MongoJS over MongoDB native driver
  /*
  this.getCollection(function(error, colUsers) {
    if( error ) callback(error)
    else {
      colUsers.findOne({_id: colUsers.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
        if( error ) callback(error)
        else callback(null, result)
      });
    }
  });
  */
};

//save
UsersRepository.prototype.save = function(user, callback) {
  /*
  user.save(function (err) {
    callback(err);
  });
*/

  // using MongoJS over MongoDB native driver
  db.users.insert(user, function(err, result) {
    if (err) return callback(err)
    else callback(null, user);
  });

/*    
    this.getCollection(function(error, colUsers) {
      if( error ) callback(error)
      else {
        if( typeof(users.length)=="undefined")
          users = [users];

        for( var i=0; i<users.length; i++ ) {
          article = users[i];
          article.created_at = new Date();
          if( article.comments === undefined ) article.comments = [];
          for(var j =0;j< article.comments.length; j++) {
            article.comments[j].created_at = new Date();
          }
        }

        colUsers.insert(users, function() {
          callback(null, users);
        });
      }
    });
*/
};

exports.UsersRepository = new UsersRepository();