// window.addEventListener("load", function () {

var slider = new Glider(document.querySelector(".carousel__lista"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  rewind: true,
  arrows: {
    prev: ".carousel__anterior",
    next: ".carousel__siguiente",
  },

  responsive: [
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: ".carousel__indicadores",
      },
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: ".carousel__indicadores",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
});

var slider2 = new Glider(document.querySelector(".carousel__lista--clientes"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  rewind: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: ".carousel__indicadores",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
});

// });
// slideAutoPaly(slider, ".glider");
slideAutoPaly(slider2, ".glider");

function slideAutoPaly(glider, selector, delay = 3000, repeat = true) {
  let autoplay = null;
  const slidesCount = glider.track.childElementCount;
  let nextIndex = 1;
  let pause = true;

  function slide() {
    autoplay = setInterval(() => {
      if (nextIndex >= slidesCount) {
        if (!repeat) {
          clearInterval(autoplay);
        } else {
          nextIndex = 0;
        }
      }
      glider.scrollItem(nextIndex++);
    }, delay);
  }

  slide();

  var element = document.querySelector(selector);
  element.addEventListener(
    "mouseover",
    (event) => {
      if (pause) {
        clearInterval(autoplay);
        pause = false;
      }
    },
    300
  );

  element.addEventListener(
    "mouseout",
    (event) => {
      if (!pause) {
        slide();
        pause = true;
      }
    },
    300
  );
}

$(document).ready(function () {
  $("#autoWidth").lightSlider({
    item: 1,
    autoWidth: true,
    auto: true,
    loop: true,
    pause: 3000,
    focuscenter: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 6,
        },
      },
    ],
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});
