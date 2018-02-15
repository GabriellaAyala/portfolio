$(document).ready(function(){
  $("#learned .jQuery-examples li:nth-child(1)").click(function() {
    $("#learned .jQuery-examples li:nth-child(1)").css("color", "blue");
  });
  $("#learned .jQuery-examples li:nth-child(2)").click(function() {
    $("#learned .jQuery-examples li:nth-child(2)").effect("shake");
  });
  $("#learned .jQuery-examples li:nth-child(3)").click(function() {
    $("#learned .jQuery-examples li:nth-child(3)").effect("bounce");
  });
  $(".navbar a:nth-child(1)").click(function() {
    if (!$(".navbar a:nth-child(1)").hasClass("active")) {
      $(".navbar a:nth-child(1)").addClass("active");
      $(".navbar a:nth-child(2)").removeClass("active");
      $(".navbar a:nth-child(3)").removeClass("active");
    }
  });

  $(".navbar a:nth-child(2)").click(function() {
    if (!$(".navbar a:nth-child(2)").hasClass("active")) {
      $(".navbar a:nth-child(2)").addClass("active");
      $(".navbar a:nth-child(1)").removeClass("active");
      $(".navbar a:nth-child(3)").removeClass("active");
    }
  });

  $(".navbar a:nth-child(3)").click(function() {
    if (!$(".navbar a:nth-child(3)").hasClass("active")) {
      $(".navbar a:nth-child(3)").addClass("active");
      $(".navbar a:nth-child(1)").removeClass("active");
      $(".navbar a:nth-child(2)").removeClass("active");
    }
  });
});
