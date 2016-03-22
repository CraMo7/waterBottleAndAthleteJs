var assert = require("chai").assert;
var bottle = require("../water_bottle.js")

describe("Water Bottle", function(){
  it("should be empty at start.", function(){
    bottle.empty();
    assert.equal(0, bottle.volume);
  });
  it("should be 100 when filled.", function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  });
  it("should lower by 10 when drunk.", function(){
    // bottle.fill();
    bottle.drink();
    assert.equal(90, bottle.volume);
  })
  it("should be 0 when emptied.", function(){
    bottle.empty();
    assert.equal(0, bottle.volume);
  })
  it("should not drop below 0 when drunk.", function(){
    bottle.drink();
    assert.equal(0, bottle.volume);
  })
  it("should return the amount drunk", function(){
    bottle.fill();
    assert.equal(10, bottle.drink(10));
  })
  it("should return the dregs", function(){
    bottle.volume = 5;
    assert.equal(5, bottle.drink(10));
  })
});


//   for (var i = 0; i < 11; i++){
//   bottle.drink();
// }