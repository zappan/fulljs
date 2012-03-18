MyApplication.View.Users = Backbone.View.extend({
  initialize: function () {
    _.bindAll(this,'render');
    this.collection.bind('add', this.render);
    this.collection.bind('remove', this.render);
    this.collection.bind('reset', this.render);
  },
  
  events:{
    'click #new-user': 'click_newUser'    // opens a modal with new user form
  },
  
  render: function () {
    var $users,
        usersCollection = this.collection;

    this.$el.html(ich.users_template({}));          // fills template with no data
    $users = this.$(".users");                       //sets the place in rendered HTML view (template from initialize function)
    
    usersCollection.each(function(user) {
      var userView = new MyApplication.View.User({
        model: user,
        collection: usersCollection                 // passes this collection as an argument
      });
      
      $users.append(userView.render().el)               // appends the user view to the collection template
    });
    
    return this;
  },
  
  click_newUser: function(){
    $('input', '#myModal').val("");
    $('#myModal').modal('show');
    setTimeout(function(){             // needs to be delayed otherwise focus() does not work
      $('input', '#myModal').focus();  
    }, 300);
  }
  
});
