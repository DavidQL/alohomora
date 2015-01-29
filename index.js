$(document).ready(function() {
  $('button.reset').click(function() {
    steps = {}
    $('.achievement').text("");
  });

  $('.gotit').click(function() {
    $(this).remove();

    window.ondevicemotion = function(event) {
      var x = Math.floor(event.accelerationIncludingGravity.x);
      var y = Math.floor(event.accelerationIncludingGravity.y);
      var spell;

      $('.data').text('x: ' + x + ' y: ' + y);

      if (x === -10 && y === -1) { // forward flick
        spell = "Lumos!"
        $('body').attr('class', 'one')
      } else if (x === 0 && y === -10) { // selfie
        spell = "Expelliarmus!"
        $('body').attr('class', 'two')
      } else if (x === 0 && y === 0) { // table
        spell = "Wingardium Leviosa!"
        $('body').attr('class', 'three')
      } else if (x === -6 && y === 0) { // down angled forward flick
        spell = "Alohomora"
        $('body').attr('class', 'four')
      }
      $('.achievement').text(spell);
    }

  });
});