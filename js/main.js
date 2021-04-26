
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("nav").addClass("fixed-top");
    } else {
        $("nav").removeClass("fixed-top");
    }
});

$(document).ready(function(){
  $(".btn1").click(function(){

    $(".slider").slideToggle("slow");

  });

});
function myFunction() {
var toggle =  document.getElementById("ok");
  if (toggle.innerHTML === "See More"){
    toggle.innerHTML = "See less";
  }
  else {
    toggle.innerHTML = "See More";

  }
}
