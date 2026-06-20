// ============================================
// Reto: Template literals en JavaScript
// ============================================
// Completa cada función usando template literals (comillas invertidas `)
// y la interpolación ${} cuando se indique.
// Ejecuta los tests con: npx vitest src/04-template-literals
// ============================================

console.log("\n--- Reto 1: Mensaje de bienvenida con interpolación ---")
// Recibe "nombre" (ej: "JavaScript") y "version" (ej: "6").
// Retorna el string: "Bienvenido a [nombre], versión [version]."
// Usa template literals con ${nombre} y ${version}.
function crearMensajeBienvenida(nombre, version) {
    return `Bienvenido a ${nombre}, version ${version}`;
}
console.log(crearMensajeBienvenida("JavaScript", "6"));


console.log("\n--- Reto 2: Concatenación tradicional (contraste con +) ---");
// Recibe dos strings "parte1" y "parte2".
// Retorna un solo string uniendo parte1 + " " + parte2 (concatenación con +).
function concatenarConMas(parte1, parte2) {
  return "Parte 1 "+ parte1 + " y " + "Parte 2 " + parte2;
}
console.log(concatenarConMas("Juan", "Vivias"));


console.log("\n---  Reto 3: Interpolar variables en una frase ---");
// Recibe "nombre" (ej: "JavaScript") y "curso" (ej: "Fundamentos").
// Retorna: "Curso de [nombre]: [curso]." usando template literals.
function interpolarVariables(nombre, curso) {
    return `Curso de ${nombre}: ${curso}.`;
}
console.log(interpolarVariables("JavaScript", "Fundamentos"));


console.log("\n---  Reto 4: Expresión dentro de template literal ---");
// Recibe "precio" (número) y "cantidad" (número).
// Retorna un string con el resultado de precio * cantidad usando
// un template literal: `${precio * cantidad}` (el resultado queda como string).
function calcularTotalComoString(precio, cantidad) {
    return `Resultado de ${precio} por la cantidad de ${cantidad} es de: ${precio*cantidad}`;
}
console.log(calcularTotalComoString(10, 5));


console.log("\n---  Reto 5: Tipo de dato del resultado de interpolación ---");
// Sin parámetros. Retorna el tipo de dato de la expresión `${1 + 2}`.
// Pista: usa typeof. El resultado de interpolación siempre es string.
function tipoDeResultadoInterpolado() {
return  typeof `${1+2}`;
}
console.log(tipoDeResultadoInterpolado());

console.log("\n---  Reto 6: Texto multilínea con template literals  ---");
// Recibe "titulo", "item1" e "item2" (strings).
// Retorna un string con varias líneas con este formato (incluye los saltos de línea):
//   [titulo]
//   - [item1]
//   - [item2]
// Usa template literals con saltos de línea nativos (no uses \n).
function crearNotaMultilinea(titulo, item1, item2) {
  return `
    ${titulo}
    - ${item1}
    - ${item2}
`;
} 
console.log(crearNotaMultilinea("Curso de Programacion:", "PHP", "Python"));

module.exports = {
  crearMensajeBienvenida,
  concatenarConMas,
  interpolarVariables,
  calcularTotalComoString,
  tipoDeResultadoInterpolado,
  crearNotaMultilinea,
};