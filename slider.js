let timer;
let left = 0;
autoSlider();

function autoSlider() {
   timer = setTimeout(function () {
      let sliderBox = document.getElementById("slider-list");
      left = left - 190;
      if (left < -2370) {
         left = 0;
         clearTimeout(timer);
      }
      sliderBox.style.left = left + 'px';
      autoSlider();
   }, 3000);
}


