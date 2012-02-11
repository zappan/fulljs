/*
 * GET home page.
 */
exports.index = function(req, res){
  res.redirect('/index.html');     // returns text/html
};

exports.test = function(req, res){
  // uses view engine to render response (not configure, didn't need it)
  //res.render('index', { title: 'Express' });
  
  //res.writeHead(200);
  //res.end('Hello Http');      // returns undefined content-type response

  /// res.send() => that this method end()s the response, so you will want to use node’s res.write() for multiple writes or streaming
  //res.send('Hello Http');     // returns text/html
  //res.send({ a : "b" });      // automatically returns as content type 'application/json'

  /// res.json() => Send a JSON response with optional headers and status. This method is ideal for JSON-only APIs
  res.json({ a : "b" });                                   // returns as content-type json
  //res.json('Returns string with json content-type');     // returns as content-type json
  //res.json('Not found response', 404);                   // returns as content-type json
};
