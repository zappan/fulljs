MyApplication.View.User = Backbone.View.extend({
  initialize: function () {
    this.template = _.template($('#user-template').html());   // initializes the jQuery template
  },
  
  render: function () {
    var renderedContent = this.template (this.model.toJSON());  // fills the template with values
    this.$el.html(renderedContent);                           // attachs to parent? => [TC] attaches rendered HTML to the view's top-level DOM element
    return this;                                                // enables chaining
  }
  
});