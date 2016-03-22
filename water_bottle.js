var waterBottle = {
  volume: 0,
  max: 100,
  min: 0,
  fill: function(){
    this.volume = this.max;
  },
  drink: function(){
    if ()
    this.volume -= 10;
  },
  empty: function() {
    this.volume = 0;
  }
};





// //////////////////////////////////////////////////
module.exports = waterBottle;