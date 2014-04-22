var EliteWorker = function(top, left){
  // this = Object.create(BlinkyDancer.prototype)

  Worker.call(this, top, left, 'EliteWorker', 2000, 100);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // return this;
};

EliteWorker.prototype = Object.create(Worker.prototype);

EliteWorker.prototype.oldStep = EliteWorker.prototype.step;

EliteWorker.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  window.game.add(100);
  this.$node.toggle();
};
