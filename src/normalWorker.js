var NormalWorker = function(top, left){
  // this = Object.create(BlinkyDancer.prototype)

  Worker.call(this, top, left, 'NormalWorker', 1000, 1);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // return this;
};

NormalWorker.prototype = Object.create(Worker.prototype);

NormalWorker.prototype.oldStep = NormalWorker.prototype.step;

NormalWorker.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  window.game.add(1);
  this.$node.toggle();
};
