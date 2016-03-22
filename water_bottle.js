var waterBottle = {
  volume: 0,
  max: 100,
  min: 0,
  fill: function(){
    this.volume = this.max;
  },
  drink: function(){
    this.volume -= 10;
  }
};





// //////////////////////////////////////////////////
module.exports = waterBottle;