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
  }
};




// //////////////////////////////////////////////////
module.exports = athlete;