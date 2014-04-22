var tier3 = function(top, left){
  // this = Object.create(BlinkyDancer.prototype)

  Worker.call(this, top, left, 'MyMonthlyRent', 3000, 500);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // return this;
};

tier3.prototype = tier3.create(Worker.prototype);

tier3.prototype.oldStep = EliteWorker.prototype.step;

tier3.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  window.game.add(500);
  this.$node.toggle();
};
