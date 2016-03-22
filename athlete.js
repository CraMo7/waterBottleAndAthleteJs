var athlete = {
  hydration: 100,
  distanceCovered: 0,
  run: function(){
    if (this.hydration >= 10){
      this.distanceCovered += 1;
      this.hydration -= 10;
    }
    else {
      this.distanceCovered += this.hydration/10
      this.hydration = 0;
    }
  },
  drink: function(bottle, quantity){
    if (quantity === undefined) {
      quantity = 10;
    }
    this.hydration += bottle.drink(quantity); // that replaces the whole if statement below:
    // if (bottle.volume >= quantity){
    //   bottle.drink(quantity);
    //   this.hydration += quantity;
    // }
    // else {
    //   quantity = bottle.volume
    //   bottle.drink(quantity);
    //   this.hydration += quantity;
    // }
  }
};

// //////////////////////////////////////////////////
module.exports = athlete;