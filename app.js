/*Autor Pius Ganter A904784*/

var main = function() {
  $('.ride').click(function() {
    $('.ride').removeClass('current');/* makes the grey background of the last klicked row disappear*/
    $('.description').hide();	/*hides last pull down window*/

    $(this).addClass('current'); /*grey background for current row*/
    $(this).children('.description').show(); /*displays the new pull down window*/
  });

  
}

$(document).ready(main); /*execute main as soon html is loaded*/