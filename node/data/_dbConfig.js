var dbConfig = require("../data/_db.config").dbConfig

    // "username:password@example.com/mydb"
var databaseUrl =       dbConfig.user + ':' + dbConfig.pass 
                + '@' + dbConfig.host + ':' + dbConfig.port
                + '/' + dbConfig.name
  , collections = ["users"];

// connect to mongodb via MongoJS + MongoDB native
module.exports = {
    db : require("mongojs").connect(databaseUrl, collections)
  , ObjectId : require("mongojs").ObjectId
}