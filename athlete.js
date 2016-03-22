var athlete = {
  hydration: 100,
  distanceCovered: 0,
  run: function(){
    this.distanceCovered += 1;
    this.hydration -= 10;
  }
};




// //////////////////////////////////////////////////
module.exports = athlete;