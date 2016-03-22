var assert = require("chai").assert;
var bottle = require("../water_bottle.js")

describe("Water Bottle", function(){
  it("should be empty at start.", function(){
    assert.equal(0, bottle.volume);
  });
  it("should be 100 when filled.", function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  });
  it("should lower by 10 when drunk.", function(){
    bottle.fill();
    bottle.drink();
    assert.equal(90, bottle.volume);
  })
});


