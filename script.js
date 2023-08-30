const btn = document.querySelector("ham-Burger");
const menu = document.querySelector(".hidden");

btn.addEventListener("click", () => {
    menu.classList.toggle();
});