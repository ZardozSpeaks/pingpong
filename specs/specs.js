describe ("myGame", function(){

  it('should count up by an increment of 1', function() {
    expect(myCount(5)).to.equal([1, 2, 3, 4, 5]);
  });

  it('should replace numbers divisable by three with ping', function() {
    expect(myGame(4)).to.equal([1, 2, "ping", 4]);
  });

  it('should replace numbers divisable by five with pong', function() {
    expect(myGame(5)).to.equal([1, 2, "ping", 4, "pong"]);
  });

  it('should replace numbers divisable by fifteen with pingpong', function() {
    expect(myGame(15)).to.equal([1, 2, "ping", 4, "pong", 6, 7, 8, 9, "pong", 11, 12, 13, 14, "pingpong"]);
  });
});
