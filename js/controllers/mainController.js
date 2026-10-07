export function initMainController() {
  const cartCounter = document.getElementById('cart-counter');
  let count = localStorage.getItem('cartCount') || 0;
  if (cartCounter) {
    cartCounter.textContent = count;
  }
}