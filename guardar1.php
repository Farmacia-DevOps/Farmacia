<?php
// Habilitar errores para depuración
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Verificar si se enviaron datos por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario y limpiar espacios en blanco
    $nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $fecha = isset($_POST['fecha']) ? trim($_POST['fecha']) : '';
    $comentarios = isset($_POST['comentarios']) ? trim($_POST['comentarios']) : '';

    // Validar que los campos no estén vacíos
    if (empty($nombre) || empty($email) || empty($fecha) || empty($comentarios)) {
        die("Error: Todos los campos son obligatorios.");
    }



    // Validar el formato del correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Error: El correo electrónico no es válido.");
    }

    // Crear una cadena con los datos en el formato correcto
    $datos = "Nombre: $nombre, Correo: $email, Fecha: $fecha, Comentarios: $comentarios\n";

    // Nombre del archivo de texto
    $archivo = "contacto.txt";

    // Abrimos el archivo en modo de escritura (si no existe, se crea)
    $manejador = fopen($archivo, 'a');

    // Verificar si el archivo se abrió correctamente
    if (!$manejador) {
        die("Error: No se pudo abrir el archivo.");
    }

    // Escribir los datos en el archivo
    if (fwrite($manejador, $datos)) {
        echo "Contacto guardado correctamente.";
    } else {
        echo "Error al guardar el contacto.";
    }

    // Cerrar el archivo
    fclose($manejador);
} else {
    echo "No se recibieron datos del formulario.";
}
?>