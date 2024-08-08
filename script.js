// script.js
document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".slideshow-track");
    const slides = Array.from(track.children);
    let index = 0;

    function moveToNextSlide() {
        index = (index + 1) % slides.length;
        const amountToMove = -index * (slides[0].offsetWidth + 20);
        track.style.transform = `translateX(${amountToMove}px)`;
    }

    // Move to the next slide every 5 seconds
    setInterval(moveToNextSlide, 5000);
});
