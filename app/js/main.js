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

  $(".testimonials__slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".testimonials__slider-nav"
  });
  $(".testimonials__slider-nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".testimonials__slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true
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
  // }

  var mixer = mixitup(".homework__inner");
});
