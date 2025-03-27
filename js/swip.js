document.addEventListener("DOMContentLoaded", () => {
  console.log("Swiper script chargé !");
  console.log("Swiper existe ?", typeof Swiper !== "undefined");

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    on: {
      init: function () {
        console.log("Swiper initialisé !");
      },
    },
  });

  // Gestion des clics pour appliquer l'image de fond
  const slides = document.querySelectorAll(".swiper-slide");
  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      const bgImage = slide.getAttribute("data-bg");
      if (bgImage) {
        document.body.style.backgroundImage = `url(${bgImage})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
      }
    });
  });

  console.log(swiper);
});
