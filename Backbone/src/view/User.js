MyApplication.View.User = Backbone.View.extend({
  initialize: function () {
    _.bindAll(this,'render');
    this.model.bind('change', this.render);
  },
  
  render: function () {
    var renderedContent = ich.user_template(this.model.toJSON());   // fills the template with values
    this.$el.html(renderedContent);                                 // attachs to parent? => [TC] attaches rendered HTML to the view's top-level DOM element
    return this;                                                    // enables chaining
  }
  
});