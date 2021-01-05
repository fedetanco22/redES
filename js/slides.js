window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    rewind: true,
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    /*  responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: ".carousel__indicadores",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
    ], */
  });
});
