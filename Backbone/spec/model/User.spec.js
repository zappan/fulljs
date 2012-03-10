describe("User model", function() {
  
  beforeEach(function() {
    this.user = new MyApplication.Model.User({
      username: "Matt Damon"
    });    
  })
  
  describe("when instantiated", function() {
    it("should exhibit attributes", function() {
      expect(this.user.get('username')).toEqual("Matt Damon")
    });
  })
  
  describe("custom methods", function() {
    
    beforeEach(function() {
      this.eventSpy = sinon.spy();
      this.user.bind('change', this.eventSpy);
    })
    
    it("should not be in edit state by default", function(){
      expect(this.user.isInEditState()).toBeFalsy();
    });
    
    it("should enter edit state on enterEditState call", function() {
      expect(this.user.isInEditState()).toBeFalsy();
      this.user.enterEditState();
      expect(this.user.isInEditState()).toBeTruthy();
    });
    
    it("should trigger 'change' event on enterEditState call", function() {
      this.user.enterEditState();
      expect(this.eventSpy).toHaveBeenCalledOnce();
    });
  
    it("should leave edit state on leaveEditState call", function() {
      this.user.enterEditState();
      expect(this.user.isInEditState()).toBeTruthy();
      this.user.leaveEditState();
      expect(this.user.isInEditState()).toBeFalsy();
    });
    
    it("should trigger 'change' event on leaveEditState call", function() {
      this.user.enterEditState();   // we have to call this method so leaveEditState calls trigger
      this.user.leaveEditState();
      expect(this.eventSpy).toHaveBeenCalledTwice();
    });
    
  });
});