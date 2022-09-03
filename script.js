let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderImg = document.querySelector('.slider--img');
const slider = document.querySelector('.slider');

function nextSlide() {
  setSliderWidthAndHeight();
  offset += sliderImg.clientWidth;
  if (offset > sliderImg.clientWidth * 2) {
    offset = 0;
  }

  sliderLine.style.left = -offset + 'px';
}

function prevSlide() {
  setSliderWidthAndHeight();
  offset -= sliderImg.clientWidth;
  if (offset < 0) {
    offset = sliderImg.clientWidth * 2;
  }

  sliderLine.style.left = -offset + 'px';
}

function setSliderWidthAndHeight() {
  slider.style.width = sliderImg.clientWidth + 'px';
  slider.style.height = sliderImg.clientHeight + 'px';
}

function autoSlide() {
  setInterval(nextSlide, 3000);
}

document.querySelector('.slider--next').addEventListener('click', nextSlide);
document.querySelector('.slider--prev').addEventListener('click', prevSlide);
document.addEventListener('DOMContentLoaded', setSliderWidthAndHeight);
window.onresize = setSliderWidthAndHeight;
document.addEventListener('DOMContentLoaded', autoSlide);
