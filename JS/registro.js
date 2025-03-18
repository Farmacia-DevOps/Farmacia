document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registroForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío automático

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let fecha = document.getElementById("fecha").value.trim();
        let contraseña = document.getElementById("contraseña").value.trim();
        let ccontraseña = document.getElementById("ccontraseña").value.trim();

        let emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;

        // Validar que ningún campo esté vacío
        if (!nombre || !email || !fecha || !contraseña || !ccontraseña) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (contraseña !== ccontraseña) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Validar formato de correo electrónico
        if (!emailRegex.test(email)) {
            alert("Por favor, ingrese un correo electrónico válido (solo Gmail, Yahoo o Outlook).");
            return;
        }

        alert("Formulario validado correctamente. Enviando datos...");
        this.submit(); // Envía el formulario si todo está correcto
    });
});