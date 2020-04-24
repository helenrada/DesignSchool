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

  // var contentSection = $(".content-section");
  // var navigation = $(".menu-indicator");
  // navigation.on("click", ".ind", function(event) {
  //   event.preventDefault();
  //   smoothScroll($(this.hash));
  // });

  // $(window).on("scroll", function() {
  //   updateNavigation();
  // });

  // function updateNavigation() {
  //   contentSection.each(function() {
  //     var sectionName = $(this).attr("id");
  //     var navigationMatch = $('.menu-indicator a[href="#' + sectionName + '"]');
  //     if (
  //       $(this).offset().top - $(window).height() / 2 < $(window).scrollTop() &&
  //       $(this).offset().top + $(this).height() - $(window).height() / 2 >
  //         $(window).scrollTop()
  //     ) {
  //       navigationMatch.addClass("active-section");
  //     } else {
  //       navigationMatch.removeClass("active-section");
  //     }
  //   });
  // }
  // function smoothScroll(target) {
  //   $("body,html").animate(
  //     {
  //       scrollTop: target.offset().top
  //     },
  //     800
  //   );
  $(".menu-btn").on("click", function () {
    $(".menu ul").slideToggle();
  });

  new WOW().init();

  var mixer = mixitup(".homework__inner");
});
