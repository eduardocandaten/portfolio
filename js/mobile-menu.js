const buttonMenu = document.getElementById('button-menu');

function openMenu(event) {
  const activeClass = 'active';

  // TouchStart double click
  if ((event.type = 'touchstart')) event.preventDefault();

  // Button
  const headerMenu = document.querySelector('.header-menu');
  buttonMenu.classList.toggle(activeClass);
  headerMenu.classList.toggle(activeClass);
  const active = headerMenu.classList.contains(activeClass);

  // Aria-expanded
  event.currentTarget.setAttribute('aria-expanded', active);

  // Aria-label
  if (active) event.currentTarget.setAttribute('aria-label', 'Fechar menu');
  else event.currentTarget.setAttribute('aria-label', 'Abrir menu');
}

buttonMenu.addEventListener('click', openMenu);
buttonMenu.addEventListener('touchstart', openMenu);
