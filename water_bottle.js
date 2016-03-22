var waterBottle = {
  volume: 0,
  maximum: 100,
  minimum: 0,
  fill: function(){
    this.volume = this.maximum;
  },
  drink: function(quantity){
    if (quantity === undefined) {
      quantity = 10;
    }
    if (this.volume >= quantity){
      this.volume -= quantity;
    }
    else {
      quantity = this.volume;
      this.volume = this.minimum;   
    }
    return quantity;
  },
  empty: function() {
    this.volume = this.minimum;
  }
};





// //////////////////////////////////////////////////
module.exports = waterBottle;