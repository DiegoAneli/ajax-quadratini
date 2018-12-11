$(document).ready(function() {

  // var nuovoTemplate = document.getElementById("template").innerHTML;
  // var nuovoTemplate = Handlebars.compile(source);
  for (var i = 0; i < 36; i++) {
    var templateGen = $('.template .square').clone();
    $('.container').append(templateGen);
  }

});
