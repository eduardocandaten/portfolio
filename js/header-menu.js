const btnMenu = document.querySelector("header:first-child button");
const menu = document.querySelector("header:first-child ul");

function openMenu(event) {
  const activeClass = "active";

  if (event.type === "touchstart") event.preventDefault();

  btnMenu.classList.toggle(activeClass);
  menu.classList.toggle(activeClass);

  if (menu.classList.contains(activeClass)) {
    btnMenu.setAttribute("aria-expanded", false);
    btnMenu.setAttribute("aria-label", "Fechar menu");
  } else {
    btnMenu.setAttribute("aria-expanded", true);
    btnMenu.setAttribute("aria-label", "Abrir menu");
  }
}

btnMenu.addEventListener("click", openMenu);
btnMenu.addEventListener("touchstart", openMenu);
