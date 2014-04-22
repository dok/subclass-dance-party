// Creates and returns a new dancer object that can step
var Worker = function(top, left, name, timeBetweenSteps, salary){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="worker ' + name + '">$'+salary+'</span>');
  this._timeBetweenSteps = timeBetweenSteps || 1000;
  this.step();
  this.setPosition(top, left);
  this._top = top;
  this._left = left;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};

//var dancer = new makeDancer(1,2,3000);
Worker.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    setTimeout(function() {
      that.step();
    }, this._timeBetweenSteps);
    //Refresh the total
    $('.title').text('Total: ' + window.game.getCurrent());
};

Worker.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
