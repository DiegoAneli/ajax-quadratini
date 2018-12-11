$(document).ready(function() {

  for (var i = 0; i < 36; i++) {
    var templateGen = $('.template .square').clone();
    $('.container').append(templateGen);
  }

  $(".square").click(function(){

    var thisSquare= $(this);

    $.ajax ({

      url: 'https://www.boolean.careers/api/random/int',
      method: 'GET',
      success: function(data)
      {
        console.log(data);

        var num = data.response;

        if (num <= 5) {
          thisSquare.addClass('yellow');
          thisSquare.text(num);

        }
        else {
        thisSquare.addClass('green');
        thisSquare.text(num);
        }
      },

      error: function(){
        alert('errore');

      }


    });


  });
});
