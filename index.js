$(document).ready(function() {
  $('button.reset').click(function() {
    steps = {}
    $('.achievement').text("");
  });

  window.ondevicemotion = function(event) {
    var x = Math.floor(event.accelerationIncludingGravity.x);
    var y = Math.floor(event.accelerationIncludingGravity.y);

    $('.data').text('x: ' + x + ' y: ' + y);

    if (x === -10 && y === -1) {
      $('.achievement').text("Lumos!")
    } else if (x === 0 && y === -10) {
      $('.achievement').text("Expelliarmus!")
    } else if (x === 0 && y === 0) {
      $('.achievement').text("Wingardium Leviosa!")
    }
  }
});