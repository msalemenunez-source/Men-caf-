// Ocultar todas las secciones
function ocultarTodo() {
    let secciones = document.querySelectorAll(".contenido");

    secciones.forEach(function(seccion) {
        seccion.style.display = "none";
    });
}

// Mostrar la sección seleccionada
function mostrar(id) {
    ocultarTodo();
    document.getElementById(id).style.display = "block";

    // Desplazamiento suave hasta la sección
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Al cargar la página no se muestra ninguna categoría
window.onload = function () {
    ocultarTodo();
};
