var dbConfig = {
        name : "<db-name>"
      , host : "<host-address>"
      , port : <port>
      , user : "<username>"
      , pass : "<password>"
    }
  , databaseUrl =       dbConfig.user + ':' + dbConfig.pass 
                + '@' + dbConfig.host + ':' + dbConfig.port
                + '/' + dbConfig.name
                // "username:password@example.com/mydb"
  , collections = ["users"]


// connect to mongodb via MongoJS + MongoDB native
module.exports = {
    db : require("mongojs").connect(databaseUrl, collections)
  , ObjectId : require("mongojs").ObjectId
}