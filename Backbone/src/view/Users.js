MyApplication.View.Users = Backbone.View.extend({
  initialize: function () {
    this.template = _.template($('#users-template').html());   // initializes the jQuery template

    _.bindAll(this,'render');
    this.collection.bind('reset', this.render);
  },
  
  render: function () {
    var $users,
        usersCollection = this.collection;

    this.$el.html(this.template({}));              // fills template with no data
    $users = this.$(".users");                       //sets the place in rendered HTML view (template from initialize function)
    
    usersCollection.each(function(user) {
      var userView = new MyApplication.View.User({
        model: user,
        collection: usersCollection                 // passes this collection as an argument
      });
      
      $users.append(userView.render().el)               // appends the user view to the collection template
    });
    
    return this;
  }
});