var assert = require("chai").assert;
var athlete = require("../athlete.js")
var bottle = require("../water_bottle.js")


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
    athlete.distanceCovered = 0;
    athlete.hydration = 0;
    athlete.run();
    assert.equal(0, athlete.distanceCovered);
  });
  it("should be able to increase hydration by drinking from water bottle", function(){
    bottle.fill();
    athlete.drink(bottle);
    assert.equal(10, athlete.hydration);
    assert.equal(90, bottle.volume);
  });
});