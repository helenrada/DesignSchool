$(function () {
  $(".skills__slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".question").click(function (event) {
    if ($(".questions-answer__inner").hasClass("one")) {
      $(".question").not($(this)).removeClass("active");
      $(".answer").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });

  $(".testimonials__slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".testimonials__slider-nav",
  });
  $(".testimonials__slider-nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".testimonials__slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });

  $(".menu-btn").on("click", function () {
    $(".menu ul").slideToggle();
  });

  new WOW().init();

  var mixer = mixitup(".homework__inner");
});
