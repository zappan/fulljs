MyApplication = {};
MyApplication.Collection = {};
MyApplication.Model = {};
MyApplication.View = {};
MyApplication.Collection.Mixin = {};
MyApplication.Model.Mixin = {};
MyApplication.View.Mixin = {};

$(window.document).ready(function(){
  window.Application = new MyApplication.Router();
  Backbone.history.start();
});
