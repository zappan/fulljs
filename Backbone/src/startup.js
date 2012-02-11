MyApplication = {};
MyApplication.Collection = {};
MyApplication.Model = {};
MyApplication.View = {};

$(window.document).ready(function(){
  window.Application = new MyApplication.Router();
  Backbone.history.start();
});