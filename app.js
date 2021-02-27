const toggleBtn = document.getElementById('nav-toggle');
const navbar = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
});