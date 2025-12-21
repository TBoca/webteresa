document.addEventListener('DOMContentLoaded', () => {
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

    // Scroll suave al hacer clic en los enlaces (opcional, ya que CSS scroll-behavior: smooth también funciona)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});