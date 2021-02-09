$(document).ready(function () {
  $(".center").slick({
    // center: true,
    autoplay: true,
    arrows: false,
    mobileFirst: true,
    centerMode: true,
    centerPadding: "50px",
    autoWidth: true,
    slidesToShow: 1,
    variableWidth: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 996,
        settings: {},
      },
    ],
  });
});

$(document).ready(function () {
  $(".center2").slick({
    // autoplay: true,
    arrows: true,
    mobileFirst: true,
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    // focusOnSelect: true,
    // autoWidth: true,
    variableWidth: true,
    infinite: true,
    prevArrow:
      '<span aria-label="Anterior" class="carousel__anterior"><i class="fas fa-chevron-left carousel__anterior--chevron"></i></span>',
    nextArrow:
      ' <span aria-label="Siguiente" class="carousel__siguiente"><i class="fas fa-chevron-right carousel__anterior--chevron"></i>',
  });
});
