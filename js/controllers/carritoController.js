export function initCarritoController() {
  const qtyInputs = document.querySelectorAll('.qty-input');
  const totalElement = document.getElementById('cart-total');
  const btnVaciar = document.getElementById('btn-vaciar-carrito');
  const cartCounter = document.getElementById('cart-counter');

  // Recalcular el total a pagar
  function calculateTotal() {
    let total = 0;
    qtyInputs.forEach(input => {
      let val = parseInt(input.value);
      if (isNaN(val) || val < 0) {
        val = 0;
        input.value = 0;
      }

      const price = parseFloat(input.dataset.price);
      const subtotal = val * price;
      
      const row = input.closest('tr');
      row.querySelector('.subtotal').textContent = `$${subtotal.toLocaleString()}`;
      total += subtotal;
    });

    if (totalElement) {
      totalElement.textContent = `$${total.toLocaleString()}`;
    }
  }

  // Escuchar cambios en las cantidades
  qtyInputs.forEach(input => {
    input.addEventListener('input', calculateTotal);
  });

  // LÓGICA PARA REINICIAR EL CONTADOR
  if (btnVaciar) {
    btnVaciar.addEventListener('click', () => {
      // 1. Reiniciar en LocalStorage
      localStorage.setItem('cartCount', 0);

      // 2. Actualizar el contador en el menú
      if (cartCounter) {
        cartCounter.textContent = '0';
      }

      // 3. Opcional: Reiniciar cantidades de la tabla a 0 y recalcular
      qtyInputs.forEach(input => input.value = 0);
      calculateTotal();

      alert('El carrito ha sido vaciado.');
    });
  }
}