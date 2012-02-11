MyApplication.Router = Backbone.Router.extend({
  routes: {
    '': 'home'
  },
  
  initialize: function(){
    
  },

  home: function(){
    users = new MyApplication.Collection.Users();
    usersView = new MyApplication.View.Users({collection: users});

	  $('#users-container').append(usersView.render().el);
	  
  	users.fetch();
  }
  
});