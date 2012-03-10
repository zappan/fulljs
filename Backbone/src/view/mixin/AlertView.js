MyApplication.View.Mixin.AlertView = {

  displayAlert: function(type, message) {
    var elem = '<div class="alert alert-' + type + ' span5 offset2">' + message + '</div>'
      , $alertArea = $('#alertDiv');
    
    $alertArea.empty();
    $(elem).appendTo($alertArea).fadeIn(600).delay(4e3).fadeOut(600, function() {
      $(this).remove();
    });
  }
};
