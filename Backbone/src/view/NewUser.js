MyApplication.View.NewUser = Backbone.View.extend({
  initialize: function () {
    _.bindAll(this,'render', 'userCreateSuccess', 'userCreateError', 'click_createUser', 'click_hideModal', 'keyupEnter_submit');

    $('#myModal').modal({ show: false });
  },
  
  events:{
    'click #create-new-user': 'click_createUser',
    'click #cancel-new-user': 'click_hideModal',
    'keyup input': 'keyupEnter_submit'
  },
  
  render: function () {
    this.$el.html(ich.user_new_template({}));
    
    return this;
  },
  
  click_createUser: function(){
    var newUserEmail, thisView = this;
    
    newUserEmail = this.$("input[name='new-user-email']").val();

    this.collection.create({email: newUserEmail},{
      success: thisView.userCreateSuccess,
      error:   thisView.userCreateError
    });
    
    $('#myModal').modal('hide');
  },
  
  click_hideModal: function() { 
    $('#myModal').modal('hide');
  },
  
  userCreateSuccess: function(){
    this.collection.trigger('reset');
  },
  
  userCreateError: function() {
    alert("User create unsuccessful!");
  },
  
  keyupEnter_submit: function(e) {
    //thisView = this;  // isn't needed here
    if (e.which === 13 ) {
      this.click_createUser();
    }
  }

});