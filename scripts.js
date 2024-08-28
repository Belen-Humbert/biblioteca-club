// scripts.js

// Manejar el desplazamiento suave para los enlaces de navegación
document.querySelectorAll('nav a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Cambiar el color de fondo de la barra de navegación al desplazarse
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) { // Ajusta el valor según sea necesario
        navbar.classList.add('bg-solid');
    } else {
        navbar.classList.remove('bg-solid');
    }
};

