
const formulario = document.querySelector("#login-form");
const campoUsuario = document.querySelector("#usuario");
const campoContrasena = document.querySelector("#contrasena");
const errorUsuario = document.querySelector("#error-usuario");
const errorContrasena = document.querySelector("#error-contrasena");
const mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const usuarioVacio = campoUsuario.value.trim() === "";
  const contrasenaVacia = campoContrasena.value === "";

  errorUsuario.textContent = usuarioVacio
    ? "Escribe tu nombre de usuario."
    : "";

  errorContrasena.textContent = contrasenaVacia
    ? "Escribe tu contraseña."
    : "";

  if (usuarioVacio || contrasenaVacia) {
    mensaje.textContent = "Completa los campos requeridos.";
    return;
  }

  mensaje.textContent =
    "Campos completos. Esta demostración no autentica ni envía datos.";
});
