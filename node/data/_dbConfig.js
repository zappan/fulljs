var dbDevConfig = require("../data/_db.config").dbConfig

// config hash using env variables with fallback to dev config file
var dbConfig = {
        name : process.env['dbname']     || dbDevConfig.name
      , host : process.env['dbhost']     || dbDevConfig.host
      , port : process.env['dbport']     || dbDevConfig.port
      , user : process.env['dbusername'] || dbDevConfig.user
      , pass : process.env['dbpassword'] || dbDevConfig.pass
    };

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
