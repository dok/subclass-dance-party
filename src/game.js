var Game = function() {
  this.total = 0;

};
Game.prototype.subtract = function(value) {
  this.total -= value;
};
Game.prototype.add = function(value) {
  this.total += value;
};
Game.prototype.getCurrent = function() {
  return this.total;
};