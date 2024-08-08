document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const drawer = document.getElementById('drawer');
    
    menuButton.addEventListener('click', () => {
        drawer.style.display = drawer.style.display === 'block' ? 'none' : 'block';
    });
    
    const faqItems = document.querySelectorAll('.faq-item h3');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
