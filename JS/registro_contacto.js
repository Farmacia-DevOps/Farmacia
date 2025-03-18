document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let comentarios = document.getElementById("comentarios").value.trim();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (nombre === "" || email === "" || comentarios === "") {
            alert("Todos los campos son obligatorios.");
            event.preventDefault();
            return;
        }
        
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            event.preventDefault();
            return;
        }
    });
    
    document.getElementById("fecha").value = new Date().toISOString().split('T')[0];
});