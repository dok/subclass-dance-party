var FlyDancer = function(top, left, timeBetweenSteps, name){
  // this = Object.create(BlinkyDancer.prototype)
  Dancer.call(this, top, left, timeBetweenSteps, name);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // return this;
};

FlyDancer.prototype = Object.create(Dancer.prototype);

FlyDancer.prototype.oldStep = FlyDancer.prototype.step;

FlyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  // move somewhere

  this._top -= Math.random()* 10;
  this._left -= Math.random()* 10;
  this.setPosition(this._top, this._left);

};
