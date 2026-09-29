const state = {
  likes: 0,
  isHovering: false,
};

function getStatusMessage() {
  if (state.likes === 0) return 'Aún no hay likes. Haz Click en "Me gusta"';
  if (state.likes === 1) return 'Tienes 1 Like. Buen Inicio.';
  return `Tienes ${state.likes} Likes, Sigue!`;
}

function render() {
  const status = document.querySelector('#status');
  const btnLike = document.querySelector('#btn-like');
  const btnReset = document.querySelector('#btn-reset');

  const hoverZone = document.querySelector('#hover-zone');
  const hoverPill = document.querySelector('#hover-pill');
  const hoverTitle = document.querySelector('#hover-title');
  const hoverText = document.querySelector('#hover-text');

  status.textContent = getStatusMessage();

  btnReset.disabled = state.likes === 0;
  btnReset.style.opacity = state.likes === 0 ? '0.55' : '1';

  hoverZone.classList.toggle('is-hover', state.isHovering);
  hoverPill.textContent = state.isHovering ? 'mouse: dentro' : 'mouse: fuera';
  hoverTitle.textContent = state.isHovering ? 'Hover dectectado' : 'Pasa el mouse por aquí';
  hoverText.textContent = state.isHovering
    ? 'Este cambio se disparo por mouseenter'
    : 'Cuando entras/sales, cambias una clase y el texto.';
}

function setupEvents() {
  const btnLike = document.querySelector('#btn-like');
  const btnReset = document.querySelector('#btn-reset');
  const hoverZone = document.querySelector('#hover-zone');

  btnLike.addEventListener('click', () => {
    state.likes += 1;
    render();
  });

  btnReset.addEventListener('click', () => {
    state.likes = 0;
    render();
  });

  hoverZone.addEventListener('mouseenter', () => {
    state.isHovering = true;
    render();
  });

  hoverZone.addEventListener('mouseleave', () => {
    state.isHovering = false;
    render();
  });
}

function setupKeyboardLike() {
  document.addEventListener('keydown', (event) => {
    if (event.key?.toLocaleLowerCase() != 'l') return;
    state.likes += 1;
    render();
  });
}

setupEvents();
setupKeyboardLike();
render();