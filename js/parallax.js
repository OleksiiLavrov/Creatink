let video = document.getElementById('parallax__video');

window.addEventListener('scroll', function () {
   let value = window.pageYOffset - 3225;
   // console.log('Offset:' + value);
   value = value * 0.4;
   video.style.transform = 'translateY( ' + value + 'px)';
})

