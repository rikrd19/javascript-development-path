function crearArrayFrutas() {
  const frutas = ['manzana', 'banana', 'naranja'];
  return frutas;
}
console.log(crearArrayFrutas());

function crearArrayMixto() {
  const mixto = [1, 'texto', true, null, { tipo: 'objeto' }];
  return mixto;
}
console.log(crearArrayMixto());

function obtenerPrimerElemento(array) {
  return array[0];
}
console.log(obtenerPrimerElemento(["olla", "mesa", 4, true]));

function obtenerUltimoElemento(array) {
  return array[array.length - 1];
}
console.log(obtenerUltimoElemento(["olla", "mesa", 4, true, "carro"]));

function agregarAlFinal(array, elemento) {
  array.push(elemento);
  return array;
}
console.log(agregarAlFinal(["olla", "mesa", 4, true], "silla"));

function agregarAlInicio(array, elemento) {
  array.unshift(elemento);
  return array;
}
console.log(agregarAlInicio(["olla", "mesa", 4, true], "ventana"));

function insertarEnPosicion(array, posicion, elemento) {
  array.splice(posicion, 0, elemento);
  return array;
}
console.log(insertarEnPosicion(["olla", "mesa", 4, true, "ventana"], 3, "zapatos"));

function reemplazarEnPosicion(array, posicion, nuevoElemento) {
  array.splice(posicion, 1, nuevoElemento);
  return array;
}
console.log(reemplazarEnPosicion(["olla", "mesa", 4, "zapatos", true, "ventana"], 3 , "medias"));


function eliminarUltimo(array) {
  array.pop();
  return array;
}
console.log(eliminarUltimo(["olla", "mesa", 4, "zapatos", true, "ventana"]));

function eliminarPrimero(array) {
  array.shift();
  return array;
}
console.log(eliminarPrimero(["olla", "mesa", 4, "zapatos", true, "ventana"]));


function eliminarEnPosicion(array, posicion) {
  array.splice(posicion, 1);
  return array;
}
console.log(eliminarEnPosicion(["olla", "mesa", 4, "zapatos", true, "ventana"],1));

function obtenerLongitud(array) {
  return array.length;
}
console.log(obtenerLongitud(["olla", "mesa", 4, "zapatos", true, "ventana"]));

function esArray(valor) {
  return Array.isArray(valor);
}
// Casos que SÍ son array
console.log(esArray(["olla", "mesa", 4, "zapatos", true, "ventana"]));
console.log(esArray([]));                              // true
console.log(esArray([1, 2, 3]));                       // true
console.log(esArray(["olla", "mesa", 4, true]));       // true
console.log(esArray(new Array(5)));                    // true
console.log(esArray(["w", "x", "sr"]));                // true
  
// Casos que NO son array
console.log(esArray({w: "x", sr: 1}));
console.log(esArray("hola"));                          // false
console.log(esArray(123));                             // false
console.log(esArray(true));                            // false
console.log(esArray(null));                            // false
console.log(esArray(undefined));                       // false
console.log(esArray({}));                              // false
console.log(esArray(function(){}));                    // false



function encontrarIndice(array, elemento) {
  return array.indexOf(elemento);
}
console.log(encontrarIndice(["olla", "mesa", 4, "zapatos", true, "ventana"],"zapatos"));
console.log(encontrarIndice(["olla", "mesa", 4, "zapatos", true, "ventana"], 4));
console.log(encontrarIndice(["olla", "mesa", 4, "zapatos", true, "ventana"],"olla"));

function crudCompleto() {
  let numeros = [1, 2, 3];
  numeros.unshift(0);
  console.log(numeros);
  numeros.push(4);
  console.log(numeros);
  numeros.splice(1, 1, 10);
  console.log(numeros);
  numeros.pop();
  console.log(numeros);
  numeros.splice(2, 1); // Eliminar el elemento 2 que quedó en la posición 2
  console.log(numeros);
  return numeros;
}
const resultado = crudCompleto();
console.log(resultado);

module.exports = {
  crearArrayFrutas,
  crearArrayMixto,
  obtenerPrimerElemento,
  obtenerUltimoElemento,
  agregarAlFinal,
  agregarAlInicio,
  insertarEnPosicion,
  reemplazarEnPosicion,
  eliminarUltimo,
  eliminarPrimero,
  eliminarEnPosicion,
  obtenerLongitud,
  esArray,
  encontrarIndice,
  crudCompleto,
};