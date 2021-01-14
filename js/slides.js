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

var styles = {
  opacity: "1",
  animation: " animation: slider2 ease-in-out infinite 30s;",
};

var slideIndex = 1;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0.3";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  Object.assign(slides[slideIndex - 1].style, styles);

  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
// $(".slider").slick({
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   arrows: false,
//   autoplay: true,
//   mobileFirst: true,
//   infinite: true,
//   centerMode: true,
//   centerPadding: "0px",
//   focusOnSelect: true,
//   swipeToSlide: true,

//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,

//         centerMode: true,
//         centerPadding: "0px",
//       },
//     },
//   ],
// });
