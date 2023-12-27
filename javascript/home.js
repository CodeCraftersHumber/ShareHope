document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const sliderCards = document.querySelectorAll('.slider-card');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * (300 + 10)}px)`;
    }

    function nextSlide() {
        if (currentIndex < sliderCards.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  });