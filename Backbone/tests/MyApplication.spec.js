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


describe("Users collection", function() {
  
  beforeEach(function() {
    this.server = sinon.fakeServer.create();
    this.users = new MyApplication.Collection.Users();
  });
  
  afterEach(function() {
    this.server.restore();
  });
  
  it("should make the correct server request", function() {
    this.users.fetch();
    expect(this.server.requests.length).toEqual(1);
    expect(this.server.requests[0].method).toEqual("GET");
    expect(this.server.requests[0].url).toEqual("/users");
  });
  
});


describe("User model view", function() {
  beforeEach(function() {
    this.collection = new Backbone.Collection();
    this.model = new MyApplication.Model.User({
      username: "Mark"
    });
    this.spyModel = sinon.stub(this.model, "isInEditState").returns(true);  // we need to have a real model for this because view rendering depends upon model variable
    //this.model.isInEditState.returns(false);
    
    // ovaj dio nije jasan - ne mogu izrenderirat edit view podesavanjem isInEditState responsea
    
    this.view = new MyApplication.View.User({collection: this.collection, model: this.model});
  });
  
  describe("Instantiation", function() {
    it("should create a div element", function() {
      expect(this.view.el.nodeName).toEqual("DIV");
    });
  });
  
  describe("Rendering", function() {
    
    it("returns the view object", function() {
      //this.view.model._isStateEdit = true;
      expect(this.view.render()).toEqual(this.view);
    });
    
    it("returns the view object in view edit mode", function() {
      //this.view.model.leaveEditState();
      expect(this.view.render()).toEqual(this.view);
    });
    
    describe("Template for listing", function() {
      beforeEach(function() {
        //this.view.model._isStateEdit = false;
        this.view.render();
      });
      
      it("should have span4 element", function() {
        expect(this.view.$el.find('.span4')).toBeDefined();
      });
      
      it("should have edit and delete buttons", function() {
        expect(this.view.$el.find('button.edit-button')).toBeDefined();
        expect(this.view.$el.find('button.delete-button')).toBeDefined();
      });
    })
    
    describe("Template for editing", function() {
      beforeEach(function() {
        this.view.render();
      })
      
      // ovo nije nastavljano jer ne znam kako dobit renderiranje edit templatea
      
    });
    
  });
  
  
  describe("Events", function() {
    beforeEach(function() {
      this.view.render();
    });
    
    it("should render edit form on edit button click", function() {
      this.renderSpy = sinon.spy(this.view, "click_enterEditState");
      //this.renderSpy = sinon.spy(MyApplication.View.User.prototype, "click_enterEditState");
      
      var $btn = this.view.$el.find('button.edit-button');
      expect($btn).toBeDefined();
      
      $btn.click();
      expect(this.renderSpy.callCount).toBe(1);
      expect(this.renderSpy).toHaveBeenCalledOnce();
    });
    
  });
  
  
});