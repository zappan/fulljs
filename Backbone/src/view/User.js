MyApplication.View.User = Backbone.View.extend({
  initialize: function () {
    _.bindAll(this, 'render', 'click_leaveEditState', 'click_delete', 'keyupEnter_update');
    this.model.bind('change', this.render);
  },
  
  events:{
    'click .edit-button' : 'click_enterEditState',
    'click .cancel-button' : 'click_leaveEditState',
    'click #update-user' : 'click_update',
    'click .delete-button': 'click_delete',
    'keyup #edit-user': 'keyupEnter_update'
  },
  
  render: function () {
    // ** this works by using function pointer to function template
    // var fnTemplate = this.model.isInEditState()
    //     ? ich.user_template_edit
    //     : ich.user_template
    //   , renderedContent = fnTemplate(this.model.toJSON());
    // 
    // 
    // ** model to json saved in var to keep stuff DRY
    // var modelJSON = this.model.toJSON()
    //   , renderedContent = this.model.isInEditState()
    //     ? ich.user_template_edit(modelJSON)
    //     : ich.user_template(modelJSON);

    var renderedContent = this.model.isInEditState()
      ? ich.user_edit_template(this.model.toJSON())
      : ich.user_template(this.model.toJSON());
        
    this.$el.html(renderedContent);
    return this;
  },
  
  click_enterEditState: function() {
    this.collection.each(function(user) {
      user.leaveEditState();
    })
    this.model.enterEditState();
  },
  
  click_leaveEditState: function() {
    this.model.leaveEditState();
  },
  
  click_update: function(e) {
    e.preventDefault();
    e.stopPropagation();

    this.update_user();    
  },
  
  update_user: function() {
    var thisView = this
      , email = this.$("input[name='email']").val();
    
    this.model.set({email: email});
    this.model.save(null, {
        success: thisView.click_leaveEditState
    });
  },
  
  click_delete: function(e) {
    var thisView = this;

    if ( !confirm("Do you want to delete the user " + this.model.get('email') + "?") ) {
      return false;
    }

    this.model.destroy({
      success: function() {
        thisView.displayAlert("success", "Delete successful!");
        thisView.collection.trigger('reset');   // collection should be reset after successful model deletion
      },
      error: function() {
        thisView.displayAlert("error", "Delete not successful!");
      },
      wait: true
    });
    
  },
  
  keyupEnter_update: function(e) {
    if (e.which === 13 ) {
      this.update_user();
    }
  },
  
  displayAlert: function(type, message) {
    var elem = '<div class="alert alert-' + type + ' span5 offset2">' + message + '</div>'
      , $alertArea = $('#alertDiv');
    
    $alertArea.empty();
    $(elem).appendTo($alertArea).fadeIn(600).delay(4e3).fadeOut(600, function() {
      $(this).remove();
    });
  }
  
});