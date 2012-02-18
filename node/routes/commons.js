/*
 * GET index
 */
exports.index = function(repository, req, res){
  repository.findAll(function(err, docs) {
    if (err) res.json(err, 500);
    else res.json(docs);
  });
};

/*
 * POST entity
 * Creates new entity
 */
exports.create = function(repository, req, res) {
  repository.save(req.body, function(err){
    if (err) res.json(err, 500);
    else res.send(req.body);
  });
};

/*
 * PUT entity
 * Updates existing entity
 */
exports.update = function(repository, req, res) {
  repository.update(req.body, function(err){
    if (err) res.json(err, 500);
    else res.send(req.body);
  });
};

