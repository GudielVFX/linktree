



/* ------------------------------------------------- */

  const menuButton = document.querySelector('.menu-button');
  const card = document.querySelector('.card');
  const closeButton = document.querySelector('.close-button');
  
  function closeCard() {
    card.classList.remove('show');
  }
  
  function handleClickOutside(event) {
    // Verificar si el clic fue fuera de la tarjeta y del botón de menú
    if (!card.contains(event.target) && !menuButton.contains(event.target)) {
      closeCard();
    }
  }
  
  menuButton.addEventListener('click', () => {
    card.classList.add('show');
    // Añadir el event listener para detectar clics fuera después de que la tarjeta se muestre
    setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 0);
  });
  
  closeButton.addEventListener('click', () => {
    closeCard();
    // Remover el event listener cuando se cierra la tarjeta
    document.removeEventListener('click', handleClickOutside);
  });
  
  // También remover el event listener cuando se cierra la tarjeta haciendo clic fuera
  card.addEventListener('transitionend', (event) => {
    if (!card.classList.contains('show')) {
      document.removeEventListener('click', handleClickOutside);
    }
  });
