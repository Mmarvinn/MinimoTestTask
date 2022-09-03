let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderImg = document.querySelector('.slider--img');
const slider = document.querySelector('.slider');
const sliderArrowNext = document.querySelector('.slider--next');
const sliderArrowPrev = document.querySelector('.slider--prev');

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
  setInterval(nextSlide, 5000);
}

function showSliderArrows() {
  sliderArrowNext.classList.toggle('slider--arrow__visible');
  sliderArrowPrev.classList.toggle('slider--arrow__visible');
}

document.querySelector('.slider--next').addEventListener('click', nextSlide);
document.querySelector('.slider--prev').addEventListener('click', prevSlide);
document.addEventListener('DOMContentLoaded', setSliderWidthAndHeight);
window.onresize = setSliderWidthAndHeight;
document.addEventListener('DOMContentLoaded', autoSlide);
slider.addEventListener('pointerover', showSliderArrows);
slider.addEventListener('pointerout', showSliderArrows);
sliderArrowNext.addEventListener('pointerover', showSliderArrows);
sliderArrowNext.addEventListener('pointerout', showSliderArrows);
sliderArrowPrev.addEventListener('pointerover', showSliderArrows);
sliderArrowPrev.addEventListener('pointerout', showSliderArrows);
