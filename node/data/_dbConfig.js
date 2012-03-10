// config hash using env variables with fallback to dev config file
var dbConfig = process.env['dbname']
  ? {
        name : process.env['dbname']
      , host : process.env['dbhost']
      , port : process.env['dbport']
      , user : process.env['dbusername']
      , pass : process.env['dbpassword']
    }
  : require("./_db.config").dbConfig;

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
