document.addEventListener('DOMContentLoaded', () => {
    const videoHelp = document.getElementById('video-help');

    // YouTube puede bloquear embeds si la página se abre como archivo local (file://).
    if (window.location.protocol === 'file:' && videoHelp) {
        videoHelp.hidden = false;
    }

    // Obtener todas las secciones y los enlaces del menú
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');

    // Función para cambiar la clase activa en el menú al hacer scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Si el scroll está dentro de esta sección (con un pequeño offset)
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Scroll suave al hacer clic en los enlaces internos solamente
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Solo aplicar scroll suave si es un enlace interno (comienza con #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // Si no comienza con #, dejar que el navegador maneje el enlace normalmente
        });
    });
});