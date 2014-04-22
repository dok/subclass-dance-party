var NormalWorker = function(top, left){
  // this = Object.create(BlinkyDancer.prototype)

  Worker.call(this, top, left, 'NormalWorker');
  this.timeBetweenSteps = 1000;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // return this;
};

NormalWorker.prototype = Object.create(Worker.prototype);

NormalWorker.prototype.oldStep = NormalWorker.prototype.step;

NormalWorker.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  window.total++;
  // console.log(total);
  this.$node.toggle();
};
