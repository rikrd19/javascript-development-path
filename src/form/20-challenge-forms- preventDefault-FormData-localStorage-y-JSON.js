// ============================================
//  Reto 24: Formularios - preventDefault, FormData, localStorage y JSON
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/24-formularios-javascript
// ============================================

// --- Reto 1: Prevenir Envío por Defecto
// debe agregar preventDefault true al evento para evitar recarga
// Retorna el evento tras prevenirlo
function prevenirEnvioPorDefecto(evento) {
  evento.preventDefault = true;

  return evento;
}

// --- Reto 2: Extraer Datos Formulario
// Extrae valores del formulario en un objeto:
// {name: formulario.name, message: formulario.message}
function extraerDatosFormulario(formulario) {
  return { name: formulario.name, message: formulario.message };
}

// --- Reto 3: Guardar en localStorage
// JSON.stringify(datos) y guardar en clave 'contact-form'
// localStorage.setItem('contact-form', datosString)
function guardarEnLocalStorage(datos) {
  const datosString = JSON.stringify(datos);
  // simulacion: no usar el localStorage real (no existe en Node)
  return datosString;
  // En un entorno real sería: localStorage.setItem(clave, datosString);
}

// --- Reto 4: Leer desde localStorage
// localStorage.getItem('contact-form') → JSON.parse() → retorna objeto
// Si no existe, retorna null
function leerDesdeLocalStorage() {
  return null;
}

// --- Reto 5: Crear Objeto con Timestamp
// recibe nombre y mensaje para el objeto:
// Retorna {name, message, date: new Date().toISOString()}
function crearObjetoConTimestamp(nombre, mensaje) {
  return {
    name: nombre,
    message: mensaje,
    date: new Date().toISOString(),
  };
}

// --- Reto 6: Renderizar Mensaje Guardado
// Si !datos → retorna ''
// Si datos → retorna HTML con:
// <p><strong>Último mensaje guardado:</strong></p>
// <p><strong>Nombre:</strong> {datos.name}</p>
// <p><strong>Mensaje:</strong> {datos.message}</p>
function renderizarMensajeGuardado(datos) {
  if (!datos) return "";

  return `<p><strong>Último mensaje guardado:</strong></p>
  <p><strong>Nombre:</strong> ${datos.name}</p>
  <p><strong>Mensaje:</strong> ${datos.message}</p>`;
}

// --- Reto 7: Validar Formulario
// crea un array vacio para almacenar los errores []
// nombre < 2 caracteres → almacena en el array "El nombre debe tener al menos 2 caracteres"
// mensaje < 10 caracteres → almacena en el array "El mensaje debe tener al menos 10 caracteres"
// tambien debe manejar valores nulos o undefined
// Retorna {valido: true/false, errores: []}
function validarFormulario(nombre, mensaje) {
  const errores = [];

  if (!nombre || nombre.length < 2) {
    errores.push("El nombre debe tener al menos 2 caracteres");
  }

  if (!mensaje || mensaje.length < 10) {
    errores.push("El mensaje debe tener al menos 10 caracteres");
  }

  return { valido: errores.length === 0, errores: errores };
}

module.exports = {
  prevenirEnvioPorDefecto,
  extraerDatosFormulario,
  guardarEnLocalStorage,
  leerDesdeLocalStorage,
  crearObjetoConTimestamp,
  renderizarMensajeGuardado,
  validarFormulario,
};
