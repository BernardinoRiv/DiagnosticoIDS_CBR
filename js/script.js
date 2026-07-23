document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del Navbar Activo al hacer Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 2. Intersection Observer para las animaciones de desplazamiento (Scroll Animations)
    // Seleccionamos todos los elementos con la clase "animate-on-scroll"
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Configuramos el observador
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // El elemento se animará cuando el 15% sea visible en pantalla
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase que dispara la animación CSS
                entry.target.classList.add('is-visible');
                // Dejamos de observar el elemento para que la animación solo ocurra una vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Activamos el observador en cada elemento
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
});