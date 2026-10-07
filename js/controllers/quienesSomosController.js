export function initQuienesSomosController() {
  const btnVerMas = document.getElementById('btn-ver-mas');
  const infoExtra = document.getElementById('info-extra');

  if (btnVerMas && infoExtra) {
    btnVerMas.addEventListener('click', () => {
      infoExtra.classList.toggle('hidden');
      btnVerMas.textContent = infoExtra.classList.contains('hidden') ? 'Ver más' : 'Ver menos';
    });
  }
}