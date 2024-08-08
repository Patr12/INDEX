document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.display = 'block';
    }

    setInterval(showNextTestimonial, 3000);
});
