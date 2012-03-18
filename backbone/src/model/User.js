MyApplication.Model.User = Backbone.Model.extend({
  
  idAttribute: "_id",
  
  _isStateEdit: false,
  
  isInEditState: function() {
    return this._isStateEdit;
  },
  
  enterEditState: function() {
    if ( this.isInEditState() )    // checks edit state
      return;

    this._isStateEdit = true;
    this.trigger('change');
  },
  
  leaveEditState: function() {
    if ( !this.isInEditState() )    // checks edit state
      return;
      
    this._isStateEdit = false;
    this.trigger('change');
  }
  
});