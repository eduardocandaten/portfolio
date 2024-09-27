const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetSection = document.querySelector(this.getAttribute('href'));
    const topPosition =
      targetSection.getBoundingClientRect().top + window.scrollY - 20;

    window.scrollTo({
      top: topPosition,
      behavior: 'smooth',
    });
  });
});
