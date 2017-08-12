$(document).ready(function() {

$(".dropdown-content-c a").click(function(){
    var linkName = $(this).attr('id')
    var noOfImg = 0
    switch(linkName) {
    case "underground":
        noOfImg = 9;
        break;
    case "playwithfire":
        noOfImg = 2;
        break;
    default:
        noOfImg = 0;
    }
    var pathname = "img/" + linkName
    console.log(pathname)

    //make background black
    $(".site-wrapper").css("background", "black")
    //disable footer
    $(".footer").css("display", "none")
    //replace container's contents with carousel, massive string is used instead of seperately $("#content-placeholder .container").html(somehtml) as </divs> are automatically added
    var s1 = '<div id="slideshow" class="carousel slide" data-ride="carousel">' +
             '<div class="carousel-inner">'

    $("#content-placeholder .container").html()
    var s2 = ""

    for(var i = 0; i < noOfImg; i++) {
      var imgName = "img/" + linkName + "\/"+ i + ".jpg";
      console.log(imgName)

      if(i == 0) {
        s2 +=  '<div class="item active">'+
  	      	       '<img src='+'"'+imgName+'"'+' alt= "'+imgName+'"'+ '/>' +
      		     '</div>'
      } else {
        s2 +=  '<div class="item">'+
  	      	       '<img src='+'"'+imgName+'"'+' alt= "'+imgName+'"'+ '/>' +
      		     '</div>'
      }

    }

    $("#content-placeholder .container").html(s1 + s2 +
      '</div>'+
      '</div>'+
      '</div>'+
      '<div class="carousel-controls">'+
        '<a class="left carousel-control" style="z-index: 1" href="#slideshow" data-slide="prev">' +
        '<span class="glyphicon glyphicon-chevron-left"></span>' +
        '</a>' +
        '<a class="right carousel-control" style="z-index: 1" href="#slideshow" data-slide="next">'+
        '<span class="glyphicon glyphicon-chevron-right"></span>'+
        '</a>'+
      '</div>'
    )

    $('.carousel').carousel({
      interval: false
    });
});

//return to homepage look
$("#watermark").click(function(){
    $(".site-wrapper").css("background", "url(../img/first-bg.png) no-repeat center scroll")
    $("#content-placeholder .container").html(
      '<div class="col-md-7 col-sm-7 christina animated fadeIn">CHRISTINA</div>'+
      '<div class="col-md-5 col-sm-5 cheng animated fadeInCheng">CHENG</div>'
    )
    $(".footer").css("display", "none")

});

});
