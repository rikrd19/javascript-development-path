/**
 * Reto: find, filter y reduce
 *
 * En este reto practicarás los tres métodos de orden superior más importantes
 * para trabajar con arreglos: find, filter y reduce.
 *
 * Conceptos clave:
 * - find: retorna el PRIMER elemento que cumple la condición (o undefined)
 * - filter: retorna TODOS los elementos que cumplen la condición (array vacío si no hay)
 * - reduce: acumula un resultado final recorriendo todo el array
 */

console.log("\n------------ Ejercicio 1: buscarNotaPorId-------------");
/**
 * Usa find para retornar la nota que tenga el id especificado.
 * Si no existe, retorna undefined.
 *
 * @param {Array} notas - Arreglo de objetos nota con propiedades: id, title, content, category
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} La nota encontrada o undefined
 */
function buscarNotaPorId(notas, id) {
  return notas.find((nota) => nota.id === id);
}
const notas = [
  { id: 1, marca: "Toyota", modelo: "Van" },
  { id: 2, marca: "Mazda", modelo: "Sedan" },
  { id: 3, marca: "Hyunday", modelo: "4x4" },
  { id: 4, marca: "Volswagen", modelo: "Sport" },
];
console.log(buscarNotaPorId(notas, 1));



console.log("\n------------ Ejercicio 2: buscarNotaPorTituloExacto -----------");
/**
 * Usa find para retornar la nota cuyo título coincida exactamente (===)
 * con el título buscado. La comparación debe ser sensible a mayúsculas/minúsculas.
 *
 * @param {Array} notas - Arreglo de notas
 * @param {string} titulo - El título exacto a buscar
 * @returns {Object|undefined} La nota encontrada o undefined
 */
function buscarNotaPorTituloExacto(notas, titulo) {
  return notas.find((nota) => nota.titulo === titulo);
}
const notas1 = [
  { id: 1, titulo: "JAVA" },
  { id: 2, titulo: "PHP" },
  { id: 3, titulo: "CSS" },
  { id: 4, titulo: "PYTHON" },
];
console.log(buscarNotaPorTituloExacto(notas1, "PHP"));


console.log("\n-------- Ejercicio 3: filtrarNotasPorCategoria ---------");
/**
 * Usa filter para retornar todas las notas que pertenezcan
 * a la categoría especificada.
 *
 * @param {Array} notas - Arreglo de notas
 * @param {string} categoria - La categoría a filtrar
 * @returns {Array} Arreglo con las notas de esa categoría (vacío si no hay)
 */
function filtrarNotasPorCategoria(notas, categoria) {
  return notas.filter((nota) => nota.categoria === categoria);
}
const notas2 = [
  { id: 1, titulo: "Moby Dick", categoria: "Accion" },
  { id: 2, titulo: "Cien Años de soledad", categoria: "Politica" },
  { id: 3, titulo: "Poirot en Egipto", categoria: "Misterio" },
  { id: 4, titulo: "Superman", categoria: "Comics" },
];
console.log(filtrarNotasPorCategoria(notas2, "Politica"));


console.log("\n-------- Ejercicio 4: filtrarNotasPorLongitudMinima --------");
/**
 * Usa filter para retornar todas las notas cuyo content tenga
 * una longitud mayor o igual a la especificada.
 *
 * @param {Array} notas - Arreglo de notas
 * @param {number} longitudMinima - Cantidad mínima de caracteres
 * @returns {Array} Notas que cumplan la condición
 */
function filtrarNotasPorLongitudMinima(notas, longitudMinima) {
  return notas.filter((nota) => nota.content.length >= longitudMinima);
}
const notas4 = [
  { id: 1, titulo: "A", content: "Contenido de la nota A"},
  { id: 2, titulo: "B", content: "Contenido de la nota B mas largo" },
  { id: 3, titulo: "C", content: "Contenido corto C"},
  { id: 4, titulo: "D",  content: "Corto nota D"},
  { id: 5, titulo: "E",  content: "Contenido este es el mas largo de la nota E"}
];
console.log(filtrarNotasPorLongitudMinima(notas4, 40));


console.log("\n------ Ejercicio 5: sumarIds --------");
/**
 * Usa reduce para sumar todos los id de las notas.
 * El valor inicial del acumulador debe ser 0.
 *
 * @param {Array} notas - Arreglo de notas
 * @returns {number} La suma de todos los ids
 */
function sumarIds(notas) {
  return notas.reduce((acumulador, nota) => acumulador + nota.id, 0);
}
const notas3 = [
  { id: 1, titulo: "JAVA" },
  { id: 2, titulo: "PHP" },
  { id: 3, titulo: "CSS" },
  { id: 4, titulo: "PYTHON" },
  { id: 5, titulo: "C++" },
];
console.log(sumarIds(notas3));


console.log("\n------ Ejercicio 6: concatenarTitulos -------");
/**
 * Usa reduce para concatenar todos los títulos de las notas
 * separados por un guión (-). El valor inicial debe ser string vacío "".
 *
 * Ejemplo: [{title: "A"}, {title: "B"}] → "A-B"
 *
 * @param {Array} notas - Arreglo de notas
 * @returns {string} String con los títulos concatenados
 */
function concatenarTitulos(notas) {
  return notas.reduce((acumulador, nota) => {
    if (acumulador === "") {
      return nota.title;
    }
    return acumulador + "-" + nota.title;
  }, "");
}
const notas5 = [
  { id: 1, title: "A", content: "Contenido de la nota A"},
  { id: 2, title: "B", content: "Nota B" },
  { id: 3, title: "C", content: "Contenido corto C"},
  { id: 4, title: "D",  content: "Corto nota D"},
  { id: 5, title: "E",  content: "Contenido E"}
];
console.log(concatenarTitulos(notas5));



console.log(
  "\n------- Ejercicio 7: contarNotasPorCategoria (Reto avanzado) ------",
);
/**
 * Usa reduce para contar cuántas notas existen por cada categoría.
 * El acumulador debe ser un objeto vacío {}.
 *
 * Ejemplo de resultado: { trabajo: 2, personal: 1, estudio: 3 }
 *
 * Tip: En cada iteración, usa la categoría de la nota como clave del objeto.
 * Si la clave no existe, inicialízala en 0, luego incrementa.
 *
 * @param {Array} notas - Arreglo de notas
 * @returns {Object} Objeto con categorías como claves y conteos como valores
 */

function contarNotasPorCategoria(notas) {
  return notas.reduce((acumulador, nota) =>  {
    // si la categoria no existe, inicializar en 0
    if (!acumulador[nota.categoria]) {
      acumulador[nota.categoria] = 0;
    }
    // incrementar el contador
    acumulador[nota.categoria]++;
    // retornar el acumulador
    return acumulador;
  }, {});   // valor inicial del objeto vacio
}
const notas6 = [
  { id: 1, title: "A", categoria: "trabajo" },
  { id: 2, title: "B", categoria: "personal" },
  { id: 3, title: "C", categoria: "trabajo" },
  { id: 4, title: "D", categoria: "estudio" },
  { id: 5, title: "E", categoria: "estudio" },
  { id: 6, title: "F", categoria: "estudio" }
];
console.log(contarNotasPorCategoria(notas6));



console.log(" Ejercicio 8: calcularPromedioDeIds ------");
/**
 * Usa reduce para calcular el promedio de todos los ids.
 * Primero suma todos los ids, luego divide por la cantidad de notas.
 *
 * @param {Array} notas - Arreglo de notas
 * @returns {number} El promedio de los ids
 */
function calcularPromedioDeIds(notas) {
  return notas.reduce((acc, nota) => acc + nota.id, 0) /notas.length;
}
const notas7 = [
  { id: 1, title: "A" },
  { id: 2, title: "B" },
  { id: 3, title: "C" },
  { id: 4, title: "D" },
  { id: 5, title: "E" }
];
console.log(calcularPromedioDeIds(notas))


module.exports = {
  buscarNotaPorId,
  buscarNotaPorTituloExacto,
  filtrarNotasPorCategoria,
  filtrarNotasPorLongitudMinima,
  sumarIds,
  concatenarTitulos,
  contarNotasPorCategoria,
  calcularPromedioDeIds,
};
