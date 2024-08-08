// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const items = Array.from(track.children);
    let index = 0;

    function moveToNextItem() {
        index = (index + 1) % items.length;
        const amountToMove = -index * 100;
        track.style.transform = `translateX(${amountToMove}%)`;
    }

    // Move to the next item every 5 seconds
    setInterval(moveToNextItem, 5000);
});
