var db = require("./data/_dbConfig")
  , mongoose = require("mongoose")
  , Schema = mongoose.Schema
  ;

// example at
// https://github.com/LearnBoost/mongoose/blob/master/examples/schema.js

var User = new Schema({
    email: String
});

mongoose.model('User', User);
