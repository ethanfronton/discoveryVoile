const swiper = new Swiper(".swiper", {
  slidesPerView: 3, // Nombre de cartes visibles
  spaceBetween: 20, // Espacement entre les cartes
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Boucle infinie
});
