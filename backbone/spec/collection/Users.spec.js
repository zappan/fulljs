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


// ===== SPECS TO IMPLEMENT =====
// "should reject duplicate email address"
// "should reject email addresses identical up to case"

// 
// # validations for user authentication
// describe "authenticate method" do
// "should return null for an email address with no user" do
// "should return null on email/password mismatch" do
// "should return the user on email/password match" do

});
