// Xử lí sự kiện khi scroll chuột
$(window).scroll(function () {
  searchBtn.removeClass('fa-times');
  searchBar.removeClass('active');
  loginForm.removeClass('active');
})

// Begin js header

let formBtn = $('#login-btn');

// End Begin js header

//begin js login form



//end js login form

// js ảnh
// setInterval(function() {
//   $('.carousel-control-next').click()
// }, 3000)

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

$(document).ready(function () {
  // Ẩn menu-2 khi trang tải xong
  $('.menu-2').hide();

  // Xử lý khi nhấp vào icon1
  $('i.icon1').click(function () {
    $('.menu-2').toggle();
  });

});

