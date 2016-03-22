var waterBottle = {
  volume: 0,
  maximum: 100,
  minimum: 0,
  fill: function(){
    this.volume = this.maximum;
  },
  drink: function(){
    var drinkAmount = 10;
    if (this.volume >= drinkAmount){
    this.volume -= drinkAmount;
    }
    else {
      this.volume = this.minimum;
    }
  },
  empty: function() {
    this.volume = this.minimum;
  }
};





// //////////////////////////////////////////////////
module.exports = waterBottle;