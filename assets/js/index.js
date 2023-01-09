const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const side_nav = document.querySelector('.side-nav');

hamburger.addEventListener('click', () => {
  side_nav.classList.add('show-nav');
});

close.addEventListener('click', () => {
  side_nav.classList.remove('show-nav');
});
