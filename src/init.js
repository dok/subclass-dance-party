$(document).ready(function(){
  window.dancers = [];

  var $body = $('body');

  $(".addWorkerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var workerMakerFunctionName = $(this).data("worker-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var workerMakerFunction = window[workerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new workerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      workerMakerFunctionName
    );
    $body.append(dancer.$node);
  });

  $(".addNormalWorker").on("click", function(event) {
    var worker = new NormalWorker(
      $("body").height() * Math.random(),
      $("body").width() * Math.random()
    );
    $body.append(worker.$node);
  });

  $(".addEliteWorker").on("click", function(event) {
    if(window.game.getCurrent() > 1000) {
      var worker = new EliteWorker(
        $("body").height() * Math.random(),
        $("body").width() * Math.random()
      );
      $body.append(worker.$node);
      window.game.subtract(1000);
    }
  });

  $(".addMonthlyRent").on("click", function(event) {
    if(window.game.getCurrent() > 2000) {
      var worker = new EliteWorker(
        $("body").height() * Math.random(),
        $("body").width() * Math.random()
      );
      $body.append(worker.$node);
      window.game.subtract(2000);
    }
  });
  window.game = new Game();
});

