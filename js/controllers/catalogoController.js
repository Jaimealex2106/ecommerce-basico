import { catalogProducts } from '../models/data.js';

export function initCatalogoController() {
  const catalogGrid = document.getElementById('catalog-grid');
  if (!catalogGrid) return;

  catalogGrid.innerHTML = catalogProducts.map(p => `
    <div class="card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Precio: $${p.price}</p>
      <button class="btn-add-cart">Agregar al carrito</button>
    </div>
  `).join('');

  catalogGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add-cart')) {
      const cartCounter = document.getElementById('cart-counter');
      let currentCount = parseInt(cartCounter.textContent) || 0;
      currentCount++;
      cartCounter.textContent = currentCount;
      localStorage.setItem('cartCount', currentCount);
      alert('Producto agregado al carrito.');
    }
  });
}