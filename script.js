document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;

    document.getElementById("mensaje").textContent =
        "Gracias " + nombre + ", tu mensaje fue enviado correctamente.";
});
