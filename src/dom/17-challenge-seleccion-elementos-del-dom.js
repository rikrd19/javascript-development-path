// ============================================
// Reto: Seleccionar elementos del DOM con JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/21-seleccionar-elementos-dom
// ============================================

// --- Reto 1: Seleccionar elemento por ID ---
// Usa getElementById para seleccionar el elemento con id "titulo-principal"
// y retorna su contenido de texto (textContent).
function obtenerTextoPorId() {
  const elemento = document.getElementById("titulo-principal");
  console.log("Textos por id: ", elemento.textContent);
  return elemento.textContent;
}

// --- Reto 2: Seleccionar elemento por clase con querySelector ---
// Usa querySelector para seleccionar el primer elemento con clase "producto"
// y retorna su contenido HTML (innerHTML).
function obtenerHTMLPorClase() {
  const elemento = document.querySelector(".producto");
  console.log("Seleccion del primer elemento con clase 'producto': ", elemento);
  return elemento.innerHTML;
}

// --- Reto 3: Seleccionar todos los elementos por etiqueta ---
// Usa getElementsByTagName para seleccionar todos los elementos <button>
// y retorna la cantidad de elementos encontrados.
function contarBotones() {
  const botones =document.getElementsByTagName("button");
  console.log("Elementos 'button' encontrados: ", botones);
  return botones.length;
}

// --- Reto 4: Seleccionar múltiples elementos por clase ---
// Usa querySelectorAll para seleccionar todos los elementos con clase "nav-link"
// y retorna un array con los textContent de cada elemento.
function obtenerTextosNavegacion() {
  // 1. querySelectorAll devuelve una NodeList
  const elements = document.querySelectorAll(".nav-link");
  // 2. Convertir a array (para usar .map)  // 3. Extraer textContent de cada uno
  const texts = Array.from(elements).map(el => el.textContent); 

console.log("Elementos con clase 'nav-link: ", texts);
return texts;

// Mas directo 
// return Array.from(document.querySelectorAll(".nav-link")).map(el => el.textContent);
}


// --- Reto 5: Seleccionar elementos por clase clásica ---
// Usa getElementsByClassName para seleccionar todos los elementos con clase "producto"
// y retorna la cantidad de elementos encontrados.
function contarProductosClase() {
  const elements = document.getElementsByClassName("producto");
  console.log("Elementos con clase 'producto': ", elements);
  return elements.length;
}

// --- Reto 6: Selector combinado ---
// Usa querySelector para seleccionar el primer elemento que tenga
// clase "producto" y sea descendiente de un elemento con clase "destacados"
// y retorna su atributo id si existe, o null si no tiene.
function obtenerIdProductoDestacado() {
  const element = document.querySelector(".destacados .producto");
  console.log("ID del producto 'destacado': ", element ? element.id : null )
  return element ? element.id : null;
}

// --- Reto 7: Selector de atributo ---
// Usa querySelectorAll para seleccionar todos los elementos que tengan
// el atributo "data-categoria" y retorna un array con los valores de dicho atributo.
function obtenerCategoriasPorAtributo() {
  const elememts = document.querySelectorAll("[data-categoria]");
  const categorias = Array.from(elememts).map(el => el.getAttribute("data-categoria"));
  console.log("Categorias: ", categorias)
  return categorias;
}

// --- Reto 8: Selector de pseudo-clase ---
// Usa querySelectorAll para seleccionar el primer elemento <li> de cada lista <ul>
// usando la pseudo-clase :first-child y retorna un array con sus textos.
function obtenerPrimerosElementosLista() {
  const elements = document.querySelectorAll("ul li:first-child");
  const textos = Array.from(elements).map(el => el.textContent);
  return textos;
}

// --- Reto 9: Selector jerárquico ---
// Usa querySelector para seleccionar el elemento <h1> dentro del <header>
// y retorna su texto. Si no existe, retorna "No encontrado".
function obtenerTituloHeader() {
  const element = document.querySelector("header h1");
  console.log("Titulo del Header: ", element ? element.textContent : "No encontrado");
  return element ? element.textContent : "No encontrado";
}

// --- Reto 10: Selector múltiple ---
// Usa querySelectorAll para seleccionar todos los elementos que sean
// <h2>, <h3> o tengan clase "subtitulo" y retorna la cantidad total.
function contarTitulosYSubtitulos() {
  const elements = document.querySelectorAll("h2, h3, .subtitulo");
  console.log("Elementos de h2, h3, o 'subtitulo: ", elements.length)
  return elements.length;
}

module.exports = {
  obtenerTextoPorId,
  obtenerHTMLPorClase,
  contarBotones,
  obtenerTextosNavegacion,
  contarProductosClase,
  obtenerIdProductoDestacado,
  obtenerCategoriasPorAtributo,
  obtenerPrimerosElementosLista,
  obtenerTituloHeader,
  contarTitulosYSubtitulos,
};
