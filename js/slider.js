let slides = document.querySelectorAll(".slide");
let indice = 0;

function mostrarSlide() {
  slides.forEach(slide => slide.classList.remove("activo"));
  slides[indice].classList.add("activo");
  indice = (indice + 1) % slides.length;
}

setInterval(mostrarSlide, 3000);