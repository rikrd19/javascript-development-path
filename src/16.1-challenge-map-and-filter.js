/**
 * Clase 19: Map y Filter - Manipula arreglos de objetos
 *
 * Los métodos de orden superior como map y filter permiten trabajar con
 * arreglos de forma declarativa, sin mutar el array original.
 *
 * Conceptos clave:
 * - map(): Transforma cada elemento y retorna un nuevo array
 * - filter(): Selecciona elementos que cumplan una condición
 * - Spread operator (...): Copia propiedades de objetos
 * - Arrow functions: Sintaxis concisa para callbacks
 */

console.log("\n====== Ejercicio 1: Extraer títulos con map");
/**
 * Dado un array de objetos con notas, usa map para extraer
 * solo el título de cada nota.
 *
 * @param {Array} notas - Array de objetos con propiedad title
 * @returns {Array} - Array con solo los títulos
 *
 * Ejemplo:
 * const notas = [
 *   { id: 1, title: 'Nota uno', content: 'Contenido 1' },
 *   { id: 2, title: 'Nota dos', content: 'Contenido 2' }
 * ];
 * extraerTitulos(notas) // ['Nota uno', 'Nota dos']
 */
function extraerTitulos(notas) {
  return notas.map((nota) => nota.title);
}
const title = [
  { id: 1, title: "Nota uno", content: "Contenido 1" },
  { id: 2, title: "Nota dos", content: "Contenido 2" },
];
console.log(extraerTitulos(title));

console.log("\n====== Ejercicio 2: Agregar fecha de creación con map");
/**
 * Usa map y spread operator para crear nuevos objetos que incluyan
 * una propiedad fechaCreacion con el timestamp actual (Date.now()).
 *
 * @param {Array} notas - Array de objetos de notas
 * @returns {Array} - Nuevo array con objetos que incluyen fechaCreacion
 *
 * Ejemplo:
 * const notas = [{ id: 1, title: 'Nota' }];
 * agregarFechaCreacion(notas)
 * // [{ id: 1, title: 'Nota', fechaCreacion: 1700000000000 }]
 */
function agregarFechaCreacion(notas) {
  // map + spred operator
  return notas.map((nota) => ({
    ...nota,
    dateAtCreate: new Date().toLocaleDateString("es-ES"),
  }));
}
const notas = [
  { id: 1, title: "Nota uno" },
  { id: 2, title: "Nota dos" },
];
console.log(agregarFechaCreacion(notas));

console.log("\n====== Ejercicio 3: Filtrar notas favoritas");
/**
 * Usa filter para obtener solo las notas que tengan
 * la propiedad esFavorita igual a true.
 *
 * @param {Array} notas - Array de objetos con propiedad esFavorita
 * @returns {Array} - Array con solo las notas favoritas
 *
 * Ejemplo:
 * const notas = [
 *   { id: 1, title: 'Fav', esFavorita: true },
 *   { id: 2, title: 'Normal', esFavorita: false }
 * ];
 * filtrarFavoritas(notas) // [{ id: 1, title: 'Fav', esFavorita: true }]
 */
function filtrarFavoritas(notas) {
  return notas.filter((nota) => nota.esFavorita);
}
const notas2 = [
  { id: 1, title: "Fav", esFavorita: true },
  { id: 2, title: "Normal", esFavorita: false },
];
console.log(filtrarFavoritas(notas2));

console.log("\n====== Ejercicio 4: Buscar notas por título (case insensitive)");
/**
 * Usa filter, toLowerCase e includes para buscar notas cuyo
 * título contenga el término de búsqueda, sin importar mayúsculas/minúsculas.
 *
 * @param {Array} notas - Array de objetos con propiedad title
 * @param {string} busqueda - Término a buscar
 * @returns {Array} - Array con notas que coinciden con la búsqueda
 *
 * Ejemplo:
 * const notas = [
 *   { id: 1, title: 'Nota Importante' },
 *   { id: 2, title: 'Otra cosa' }
 * ];
 * buscarPorTitulo(notas, 'importante') // [{ id: 1, title: 'Nota Importante' }]
 */
function buscarPorTitulo(notas, busqueda) {
  return notas.filter((nota) =>
    nota.title.toLowerCase().includes(busqueda.toLocaleLowerCase()),
  );
}
const notas3 = [
  { id: 1, title: "Nota importante" },
  { id: 2, title: "Otra cosa" },
  { id: 3, title: "Nota importante del dia" },
  { id: 4, title: "La familia lo mas importante" },
];
console.log(buscarPorTitulo(notas3, "importante"));

console.log("\n--------- Ejercicio 5: Transformar precios con descuento");
/**
 * Usa map para aplicar un descuento a todos los productos.
 * Cada producto debe mantener sus propiedades originales y
 * agregar una propiedad precioFinal con el descuento aplicado.
 *
 * @param {Array} productos - Array de objetos con precio
 * @param {number} porcentajeDescuento - Porcentaje de descuento (ej: 10 para 10%)
 * @returns {Array} - Nuevo array con precioFinal calculado
 *
 * Ejemplo:
 * const productos = [{ id: 1, nombre: 'Camisa', precio: 100 }];
 * aplicarDescuento(productos, 20)
 * // [{ id: 1, nombre: 'Camisa', precio: 100, precioFinal: 80 }]
 */
function aplicarDescuento(productos, porcentajeDescuento) {
  return productos.map((producto) => ({
    ...producto,
    // calcular precio final con descuento
    priceFinal: producto.precio - (producto.precio * porcentajeDescuento) / 100,
  }));
}
const productos = [
  { id: 1, nombre: "Camisa", precio: 100 },
  { id: 2, nombre: "Pantalon", precio: 50 },
  { id: 3, nombre: "Sweeter", precio: 20 },
];
console.log(aplicarDescuento(productos, 10));

console.log("\n====== Ejercicio 6: Filtrar productos por rango de precio");
/**
 * Usa filter para obtener productos cuyo precio esté dentro
 * de un rango específico (inclusive).
 *
 * @param {Array} productos - Array de objetos con propiedad precio
 * @param {number} min - Precio mínimo
 * @param {number} max - Precio máximo
 * @returns {Array} - Array con productos dentro del rango
 *
 * Ejemplo:
 * const productos = [
 *   { nombre: 'A', precio: 50 },
 *   { nombre: 'B', precio: 150 },
 *   { nombre: 'C', precio: 250 }
 * ];
 * filtrarPorRango(productos, 100, 200) // [{ nombre: 'B', precio: 150 }]
 */
function filtrarPorRango(productos, min, max) {
  // includes es para strings, Usar comparacion: precio >= min && precion <= max
  return productos.filter(
    (producto) => producto.precio >= min && producto.precio <= max,
  );
}
const productos2 = [
  { nombre: "A", precio: 50 },
  { nombre: "B", precio: 150 },
  { nombre: "C", precio: 250 },
  { nombre: "D", precio: 68 },
  { nombre: "E", precio: 35 },
];
console.log(filtrarPorRango(productos2, 35, 80));

// Exportar todas las funciones para los tests
module.exports = {
  extraerTitulos,
  agregarFechaCreacion,
  filtrarFavoritas,
  buscarPorTitulo,
  aplicarDescuento,
  filtrarPorRango,
};
