export function initBusquedaController() {
  const form = document.getElementById('form-busqueda');
  const resultsArea = document.getElementById('results-area');

  if (!form || !resultsArea) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('search-input').value.trim();

    if (!query) {
      resultsArea.innerHTML = '<p>Por favor, ingrese un término de búsqueda.</p>';
      return;
    }

    resultsArea.innerHTML = `
      <h3>Resultados para la búsqueda de "${query}":</h3>
      <ul>
        <li>Producto sugerido A - $250</li>
        <li>Producto sugerido B - $890</li>
        <li>Producto sugerido C - $1,200</li>
      </ul>
    `;
  });
}