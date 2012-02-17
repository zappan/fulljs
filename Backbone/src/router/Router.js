MyApplication.Router = Backbone.Router.extend({

  /** Application data collections **/
  Collections : null,
  
  /** Application routes **/
  routes: {
    '': 'home'
  },
  
  initialize: function(){
    this.Collections = {};
    this.Collections.Users = new MyApplication.Collection.Users();
  },

  home: function(){
    var users = this.Collections.Users
      , usersView;

    usersView = new MyApplication.View.Users({collection: users});

	  $('#users-container').append(usersView.render().el);
	  
  	users.fetch();
  }
});