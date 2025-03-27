document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo img");
  const navLinks = document.querySelector(".nav-links");

  // Ajoute la classe 'show' au logo et à la nav bar après un délai
  setTimeout(() => {
    logo.classList.add("show");
    navLinks.classList.add("show");
  }, 100); // Délai pour l'animation
});
