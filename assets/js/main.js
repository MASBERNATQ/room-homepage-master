/* -------------------
CAROUSEL
------------------- */
$("#carousel-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  asNavFor: "#carousel-nav",
  prevArrow: "#carousel-prev",
  nextArrow: "#carousel-next",
  autoplay: true,
  autoplaySpeed: 5000,
});

$("#carousel-nav").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  asNavFor: "#carousel-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  draggable: false,
});
