let timer;
let left = 0;
let imgWidth = document.querySelector('.slider__image').clientWidth;
autoSlider();

function autoSlider() {
   timer = setTimeout(function () {
      let sliderBox = document.getElementById("slider-list");
      left = left - imgWidth;
      if (left < -(imgWidth * 13)) {
         left = 0;
         clearTimeout(timer);
      }
      sliderBox.style.left = left + 'px';
      autoSlider();
   }, 3000);
}
