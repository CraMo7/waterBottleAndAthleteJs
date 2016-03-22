var assert = require("chai").assert;
var athlete = require("../athlete.js")

describe("Athlete", function(){
  it("should have hydration attribute which starts at 100.", function(){
    assert.equal(100, athlete.hydration);
  });
  it("should have a distance covered attribute starts at 0.", function(){
    assert.equal(0, athlete.distanceCovered);
  });
  it("should be able to run: increasing distance, decreasing hydration.", function(){
    athlete.run();
    assert.equal(1, athlete.distanceCovered);
    assert.equal(90, athlete.hydration);
    
  });
  it("should not move when running dehydrated: hydration at 0.", function(){
    assert.equal(expected, actual);
  });
  it("should be able to increase hydration by drinking from water bottle", function(){
    assert.equal(expected, actual);
  });
});