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
    if (bottle.volume >= 10){
      bottle.drink(quantity);
      this.hydration += 10;
    }
  }
};




// //////////////////////////////////////////////////
module.exports = athlete;