document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const nombre = contactForm.querySelector('input[type="text"]').value;
        const correo = contactForm.querySelector('input[type="email"]').value;

        const mensaje = `¡Formulario enviado con éxito!

Nombre: ${nombre}
Correo: ${correo}`;

        alert(mensaje);

        contactForm.reset();
    });
});