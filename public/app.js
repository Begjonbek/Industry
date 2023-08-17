var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 18,
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 8,
      } , 
      
      768: {
        slidesPerView: 1.8,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },})