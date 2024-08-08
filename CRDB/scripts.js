const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('click', () => {
        const content = service.querySelector('.service-content');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            services.forEach(s => s.querySelector('.service-content').style.display = 'none');
            content.style.display = 'block';
        }
    });
});

const adverts = [
    'adverts.jpeg',
    'adverts1.jpeg',
    'images.jpeg'
];

let currentAdvertIndex = 0;

const advertImage = document.querySelector('.advert');

document.getElementById('left-arrow').addEventListener('click', () => {
    currentAdvertIndex = (currentAdvertIndex > 0) ? currentAdvertIndex - 1 : adverts.length - 1;
    advertImage.src = adverts[currentAdvertIndex];
});

document.getElementById('right-arrow').addEventListener('click', () => {
    currentAdvertIndex = (currentAdvertIndex < adverts.length - 1) ? currentAdvertIndex + 1 : 0;
    advertImage.src = adverts[currentAdvertIndex];
});
