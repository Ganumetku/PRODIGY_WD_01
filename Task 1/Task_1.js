// index.js
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});
