
/* https://groups.google.com/forum/#!msg/express-js/u5SO-nu9ptU/8CN5P7lv36AJ 
------------------------------------------------------------------------------ */

var home    = require("./home")
  , users   = require("./users")
  ;

exports.index = home.index;
exports.users = users.index;
exports.users.create = users.create;
exports.users.update = users.update;
exports.users.delete = users.delete;
exports.users.new = users.new;
