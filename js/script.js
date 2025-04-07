document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo img");
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  // Ajoute la classe 'show' au logo et à la nav bar après un délai
  setTimeout(() => {
    logo.classList.add("show");
    navLinks.classList.add("show");
  }, 100); // Délai pour l'animation

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});
