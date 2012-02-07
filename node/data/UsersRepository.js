var mongoose = require('mongoose')
  , User = mongoose.model('User')

UsersRepository = function() {};

//findAll
UsersRepository.prototype.findAll = function(callback) {
  User.find({}, function(err, users) {
    if (err) return callback(err)
    else callback(null, users)
  });
};

//findById
UsersRepository.prototype.findById = function(id, callback) {
  User.findOne({_id: id}, function(err, users) {
    if (err) return callback(err)
    else callback(null, users)
  });
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
  user.save(function (err) {
    callback(err);
  });

/*    
    this.getCollection(function(error, colUsers) {
      if( error ) callback(error)
      else {
        if( typeof(users.length)=="undefined")
          users = [users];

        for( var i =0;i< users.length;i++ ) {
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