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
      , usersView
      , newUserView;

    usersView = new MyApplication.View.Users({collection: users});
    newUserView = new MyApplication.View.NewUser({collection: users});

	  $('#users-container').append(usersView.render().el);
	  $('#myModal').append(newUserView.render().el);
	  
  	users.fetch();
  }
});