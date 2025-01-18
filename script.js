function redirectToPage(page) {
            window.location.href = page;
        }

function toggleMenu() {
    const mobileMenu = document.getElementById("mobilemenu");
    // Alterna la clase 'show' para mostrar/ocultar el menú móvil
    mobileMenu.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', () => {
            const navbar = document.querySelector('.navbar');
            console.log('Navbar al cargar:', navbar); // Asegúrate de que el navbar se detecta

            if (navbar) {
                window.addEventListener('scroll', () => {
                    console.log('Scroll detectado en el archivo original');
                    console.log(`ScrollY: ${window.scrollY}`); // Verificar el scroll
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                });
            } else {
                console.log("Navbar no encontrado");
            }

            
});

