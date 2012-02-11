MyApplication.Collection.Users = Backbone.Collection.extend({
  
  model : MyApplication.Model.User,
  
  url : function() {
    return "/users";
  }
});