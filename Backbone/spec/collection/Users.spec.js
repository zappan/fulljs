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