$(function() {
  $(".skills__slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: ".arrows-dots",
    appendArrows: ".arrows-dots"
  });

  $(".question").on("click", function() {
    $(this).toggleClass("active");
    $(".answer").toggleClass("active");
  });
  $(".question.active").on("click", function() {
    $(this).removeClass("active");
  });

  var mixer = mixitup(".homework__inner");
});
