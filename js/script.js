import { initMainController } from './controllers/mainController.js';
import { initRegistroController } from './controllers/registroController.js';
import { initQuienesSomosController } from './controllers/quienesSomosController.js';
import { initCatalogoController } from './controllers/catalogoController.js';
import { initCarritoController } from './controllers/carritoController.js';
import { initBusquedaController } from './controllers/busquedaController.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializador global para el menú / contador
  initMainController();

  // Enrutado por presencia de elementos en el DOM
  if (document.getElementById('form-registro')) {
    initRegistroController();
  }

  if (document.getElementById('btn-ver-mas')) {
    initQuienesSomosController();
  }

  if (document.getElementById('catalog-grid')) {
    initCatalogoController();
  }

  if (document.getElementById('cart-items')) {
    initCarritoController();
  }

  if (document.getElementById('form-busqueda')) {
    initBusquedaController();
  }
});