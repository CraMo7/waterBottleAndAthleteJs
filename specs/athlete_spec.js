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
  it("should be able to pass quantity to drink into athlete.drink(bottle, quantity)", function(){
    athlete.hydration = 0;
    bottle.fill();
    athlete.drink(bottle, 5);
    assert.equal(95, bottle.volume);
    assert.equal(5, athlete.hydration);
  });
  it("should automatically downscale quantity to drink all remaining water and hydrate appropriately if quantity to drink is more than what remains", function(){
    bottle.volume = 3;
    athlete.hydration = 50;
    assert.equal(0, bottle.volume);
    assert.equal(53, athlete.hydration);
  });
});