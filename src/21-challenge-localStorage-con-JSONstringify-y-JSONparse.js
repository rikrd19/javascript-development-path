// ============================================
// Reto: LocalStorage con JSON.stringify y JSON.parse
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/21-challenge-localStorage-con-JSONstringify-y-JSONparse
// ============================================

// --- Reto 1: Definir clave de almacenamiento ---
// Declara una constante llamada STORAGE_KEY con el valor 'markdown-notes'
// y retórnala.
const STORAGE_KEY = `markdown-notes`;

/**
 * Obtiene la clave de almacenamiento global.
 * @returns {string} La clave constante STORAGE_KEY ('markdown-notes').
 */
function obtenerStorageKey() {
  return STORAGE_KEY;
}

// --- Reto 2: Guardar datos en localStorage ---
// Crea una función que guarde notas en localStorage.
// Debe validar que el parámetro no sea undefined o null.
// Usa JSON.stringify para serializar los datos.
// Usa localStorage.setItem con la clave global.
/**
 * Convierte las notas a JSON string y las guarda en localStorage.
 * @param {*} notes - Datos o lista de notas a guardar.
 * @returns {void}
 */
function guardarNotas(notes) {
  if (notes === undefined || notes === null) {
    console.error("No se pueden guardar notas, datos inválidos");
    return;
  }

  const notasString = JSON.stringify(notes);
  localStorage.setItem(STORAGE_KEY, notasString);
}

// --- Reto 3: Cargar datos desde localStorage ---
// Crea una función que cargue notas desde localStorage.
// Si no hay datos, retorna un array vacío.
// Usa JSON.parse para convertir los datos.
// Verifica que el resultado sea un array con Array.isArray.
/**
 * Carga y convierte las notas de localStorage en un arreglo.
 * @returns {Array} Arreglo con las notas o [] si no hay datos / es inválido.
 */
function cargarNotas() {
  const datosString = localStorage.getItem(STORAGE_KEY);

  if (!datosString) {
    return [];
  }

  const datos = JSON.parse(datosString);

  if (!Array.isArray(datos)) {
    return [];
  }

  return datos;
}

// --- Reto 4: Validar datos antes de guardar ---
// Crea una función que valide si los datos son un array antes de guardar.
// Si no es un array, muestra un error con console.error y retorna false.
// Si es válido, llama a guardarNotas y retorna true.
/**
 * Valida que los datos sean un arreglo antes de llamar a guardarNotas.
 * @param {*} notes - Datos a validar y guardar.
 * @returns {boolean} true si fue exitoso, false si los datos no eran un arreglo.
 */
function validarYGuardar(notes) {
  if (!Array.isArray(notes)) {
    console.error("Los datos deben ser un array");
    return false;
  }

  guardarNotas(notes);
  return true;
}

// --- Reto 5: Limpiar localStorage ---
// Crea una función que elimine todos los datos del localStorage
// usando localStorage.removeItem con la clave global.
/**
 * Elimina la clave STORAGE_KEY de localStorage.
 * @returns {void}
 */
function limpiarStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

// --- Reto 6: Verificar si existen datos ---
// Crea una función que verifique si existen datos en localStorage.
// Retorna true si hay datos, false si no hay datos o es null.
/**
 * Comprueba si existen datos guardados bajo STORAGE_KEY.
 * @returns {boolean} true si existen datos (no null), false en caso contrario.
 */
function existenDatos() {
  const datos = localStorage.getItem(STORAGE_KEY);
  return datos !== null;

  // alternativa
  // return localStorage.getItem(STORAGE_KEY) !== null;
}

// --- Reto 7: Obtener cantidad de notas ---
// Carga las notas desde localStorage y retorna la cantidad.
// Si no hay notas, retorna 0.
/**
 * Retorna la cantidad de notas almacenadas.
 * @returns {number} Número de notas guardadas.
 */
function obtenerCantidadNotas() {
  const notas = cargarNotas();
  return notas.length;
}

module.exports = {
  obtenerStorageKey,
  guardarNotas,
  cargarNotas,
  validarYGuardar,
  limpiarStorage,
  existenDatos,
  obtenerCantidadNotas,
};

