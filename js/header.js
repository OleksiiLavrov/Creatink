const animHeader = document.querySelector('.header__section')
const animHeaderHeight = animHeader.offsetHeight
const scrollTop = 500

window.addEventListener('scroll', animOnScroll, { passive: true });

function animOnScroll() {
   if (document.documentElement.scrollTop > scrollTop) {
      animHeader.classList.add('_animated');
   } else {
      animHeader.classList.remove('_animated');
   }
}