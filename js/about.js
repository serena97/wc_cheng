$(document).ready(function() {

$(".normal-c #about").click(function(){
    //change background
    $(".site-wrapper").css("background", "url(img/about.jpg) no-repeat center scroll")

    var desc = "Currently studying in London college of fashion specialising in Fashion illustration. <br />"+
              "Most of the work are portraits as I am really interested in experimenting different styles <br />"+
              "to draw faces. Currently focusing on digitalising hand drawn work."

    $("#content-placeholder .container").html(
      '<div class="row animated fadeIn">'+
        '<h4 style="font: 100 18px Helvetica, sans-serif;">'+
        desc+
        '</h4>'+
      '</div>'

    )
    $(".footer").css("display", "block")
});

//toggle illustration dropdown contents upon clicking illustration, good use for smartphones
$('.dropbtn-c').click(function(){
  var x = $('.dropdown-content-c');
  if (x.css('display') === 'none') {
      x.css('display','block')
  } else {
      x.css('display','none')
  }
});


});
