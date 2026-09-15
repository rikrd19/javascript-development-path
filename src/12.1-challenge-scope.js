// ============================================
// Reto: Scope en JavaScript: global, función y bloque
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/14-scope-javascript
// ============================================

console.log("--- Reto 1: Acceso a variable global ---");
// Declara una variable global llamada "mensajeGlobal" con el valor "Hola mundo"
// y retórnala desde la función.
let mensajeGlobal = "Soy mensaje global";
function accederGlobal() {
  return mensajeGlobal;
}
console.log(accederGlobal());

console.log("\n--- Reto 2: Scope de función ---");
// Dentro de la función, declara una variable local "secreto" con el valor "1234"
// y retorna un objeto que tenga acceso a la variable local.
function scopeFuncion() {
  let secreto = "1234";
  return `Secreto: ${secreto}`;
}
console.log(scopeFuncion());

console.log("\n--- Reto 3: Scope de bloque ---");
// Dentro de un bloque if, declara una variable "mensajeBloque" con let
// y retorna su valor. La variable solo debe existir dentro del bloque.
function scopeBloque() {
  if (true) {
    let mensajeBloque = "Soy variable Bloque";
    return mensajeBloque;
  }
}
console.log(scopeBloque());

console.log("\n--- Reto 4: Acceso anidado de scopes ---");
// Crea una variable global, una de función y una de bloque.
// Retorna un objeto con los tres valores para demostrar qué se puede acceder
// desde cada nivel.

function accesoAnidado() {
  let globalValor = "global";
  let funcionValor = "funcion";

  if (true) {
    let bloqueValor = "bloque";
    return {
      bloque: bloqueValor,
      funcion: funcionValor,
      global: globalValor,
    };
  }
}
console.log(accesoAnidado());

console.log("\n--- Reto 5: Error de scope ---");
// Esta función debe intentar acceder a una variable declarada en un bloque
// desde fuera del bloque. Debes manejar el error usando try-catch
// y retornar un objeto con { error: true, mensaje: "Variable no accesible" }
function errorScope() {
  try {
    if (true) {
      let varBloque = "Soy variable de bloque";
    }
    return varBloque;
  } catch (error) {
    return { error: "No se puede acceder variable de bloque" };
  }
}
console.log(errorScope());

console.log("\n--- Reto 6: Return vs console.log ---");
// Crea una variable dentro de la función, haz console.log de ella,
// pero retorna un string diferente. Demuestra que console.log no afecta el return.
function returnVsConsole() {
  let valor = "variable dentro funcion";
  console.log(valor);
  return "retorno diferente";
}
console.log(returnVsConsole());

console.log("\n--- Reto 7: Hoisting con var ---");
// Sin cambiar el orden de las líneas, usa var para demostrar hoisting.
// La función debe retornar un objeto con:
//   { antes: undefined, despues: "hoisting" }
function demostrarHoistingVar() {
  var antes = variable;
  var variable = "hoisting";
  var despues = variable;
  return {
    antes,
    despues,
  };
}
console.log(demostrarHoistingVar());

console.log("--- Reto 8: Template literals y scope ---");
// Usa template literals para construir un mensaje que incluya variables
// de diferentes scopes (global, función, bloque).
// Retorna el mensaje completo.
function templateLiteralsScope() {
  let app = "MiApp";
  let usuario = "Ana";
  let rol = "admin";
  return `Bienvenido ${usuario} con rol ${rol} en ${app}`;
}
console.log(templateLiteralsScope());

module.exports = {
  accederGlobal,
  scopeFuncion,
  scopeBloque,
  accesoAnidado,
  errorScope,
  returnVsConsole,
  demostrarHoistingVar,
  templateLiteralsScope,
};
