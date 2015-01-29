
$(document).ready(function() {
  var steps = {

  };

  $('button.reset').click(function() {
    steps = {}
    $('.achievement').text("");
  });
  window.ondevicemotion = function(event) {
    var x = Math.floor(event.accelerationIncludingGravity.x);
    var y = Math.floor(event.accelerationIncludingGravity.y);

    if (y >= 8) {
      steps.has_reached_8 = true;
    }
    if (y <= -8) {
      steps.has_reached_neg_8 = true;
    }

    $('.data').text("x: " + x + "  y: " + y);

    if (steps.has_reached_8 && steps.has_reached_neg_8) {
      $('.achievement').text("Lumos unlocked!")
    }
  }
});