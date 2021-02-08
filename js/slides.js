$(document).ready(function () {
  $(".center").slick({
    // center: true,
    autoplay: true,
    arrows: false,
    mobileFirst: true,
    centerMode: true,
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
  $(".carousel__lista").slick({
    mobileFirst: true,
    centerMode: true,
    prevArrow:
      '<span aria-label="Anterior" class="carousel__anterior"><i class="fas fa-chevron-left carousel__anterior--chevron"></i></span>',
    nextArrow:
      ' <span aria-label="Siguiente" class="carousel__siguiente"><i class="fas fa-chevron-right carousel__anterior--chevron"></i>',
  });
});
