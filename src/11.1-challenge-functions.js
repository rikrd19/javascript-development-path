// ============================================
// Reto: Anatomía de funciones en JavaScript
// ============================================
// Practica funciones declaradas, parámetros y argumentos,
// arrow functions y parámetros por defecto.
// Ejecuta los tests con: npx vitest src/13-anatomia-funciones
// ============================================

console.log("--- Reto 1: Función que retorna un saludo ---")
// Recibe "nombre" (string). Retorna un string con template literal: "Hola, {nombre}".
// Ejemplo: saludar('Óscar') → "Hola, Óscar"
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
console.log(saludar("Pedro"));

console.log("--- Reto 2: Función que crea un objeto usuario (parámetros y retorno) ---")
// Recibe "nombre" (string) y "edad" (número). Retorna un objeto { nombre, edad }.
// Los parámetros son las variables; los argumentos son los valores al invocar.
// Ejemplo: crearUsuario('Ana', 25) → { nombre: 'Ana', edad: 25 }
function crearUsuario(nombre, edad) {
 return {
    nombre,
    edad
 }
}
console.log(crearUsuario("Ana", 25));

console.log("--- Reto 3: Arrow function con retorno implícito ---")
// Recibe "a" y "b" (números). Retorna a * b (equivalente a una arrow de una línea: (a, b) => a * b).
// Ejemplo: multiplicar(4, 5) → 20
function multiplicar(a, b) {
  return  a * b;;
}
console.log(multiplicar(4, 5));

console.log("--- Reto 4: Arrow function con parámetro por defecto y Date.now() ---")
// Recibe "contenido" (string) y "titulo" (string, opcional, por defecto 'sin título').
// Retorna un objeto { titulo, contenido, creado } donde creado = Date.now() (número en ms).
// Ejemplo: crearNota('Mi contenido') → { titulo: 'sin título', contenido: 'Mi contenido', creado: 1234567890123 }
function crearNota(contenido, titulo="sin titulo") {
  return {
   titulo,
    contenido,
    creado: Date.now()
  };
}
console.log(crearNota("Cien años de Soledad"))

module.exports = {
  saludar,
  crearUsuario,
  multiplicar,
  crearNota,
};