document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    let offset = 0;
    const imgWidth = 256;
    const imgMargin = 50;
    const maxOffset = (document.querySelectorAll('.slider__img').length - 1) * (imgWidth+imgMargin);
    const sliderLine = document.querySelector('.slider__line');
    const prevArrow = document.querySelector('.slider__prev');
    const nextArrow = document.querySelector('.slider__next');

    prevArrow.classList.add('slider__button--disabled');

    document.querySelector('.slider__next').addEventListener('click', function (e) {

        if (offset === maxOffset) {
            e.preventDefault();
        } else {
            if (offset === 0) prevArrow.classList.remove('slider__button--disabled');
            offset += imgWidth;
            offset += imgMargin;
            sliderLine.style.left = -offset + 'px';
            if (offset === maxOffset) {
                nextArrow.classList.add('slider__button--disabled');
            }
        }

    })
    document.querySelector('.slider__prev').addEventListener('click', function (e) {
        if (offset === 0) {
            e.preventDefault();
        } else {
            if (offset === maxOffset) nextArrow.classList.remove('slider__button--disabled');
            offset -= imgWidth;
            offset -= imgMargin;
            sliderLine.style.left = -offset + 'px';
            if (offset === 0) {
                prevArrow.classList.add('slider__button--disabled');
            }
        }

    })
});