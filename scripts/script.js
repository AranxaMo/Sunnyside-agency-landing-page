const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".nav-content");
const arrow = document.querySelector("hero__arrow");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("show");
    arrow.classList.toggle("hidden");
});