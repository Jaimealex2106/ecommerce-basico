export function initRegistroController() {
  const form = document.getElementById('form-registro');
  if (!form) return; // Si no estamos en registro.html, salimos pacíficamente

  const btnSubmit = document.getElementById('btn-submit');
  const checkboxTerminos = document.getElementById('terminos');
  const errorMsg = document.getElementById('error-message');

  const actualizarBoton = () => {
    btnSubmit.disabled = !checkboxTerminos.checked;
  };

  actualizarBoton();

  checkboxTerminos.addEventListener('change', actualizarBoton);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMsg.textContent = '';

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const fecha = document.getElementById('fechaNacimiento').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (!nombre || !email || !password || !fecha || !telefono) {
      errorMsg.textContent = 'Error: Todos los campos son obligatorios.';
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      errorMsg.textContent = 'Error: Por favor, ingrese un correo electrónico válido.';
      return;
    }

    alert('¡Registro exitoso!');
    form.reset();
    actualizarBoton();
  });
}