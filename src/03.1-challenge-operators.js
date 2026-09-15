// ============================================
// Reto: Operadores aritméticos en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/03-operadores-aritmeticos
// ============================================

console.log("\n--- Reto 1: Suma ---")
// Recibe dos números "a" y "b".
// Retorna el resultado de sumarlos con el operador +.
function calcularSuma(a, b) {
  return a + b;
}
console.log(calcularSuma(4, 3));


console.log("\n--- Reto 2: Resta ---")
// Recibe dos números "a" y "b".
// Retorna el resultado de restar b a a con el operador -.
function calcularResta(a, b) {
  return a - b;
}
console.log(calcularResta(10, 2));


console.log("\n--- Reto 3: Multiplicación ---")
// Recibe dos números "a" y "b".
// Retorna el resultado de multiplicarlos con el operador *.
function calcularMultiplicacion(a, b) {
  return a * b;
}
console.log(calcularMultiplicacion(10, 2));


console.log("\n--- Reto 4: División ---")
// Recibe dos números "a" y "b".
// Retorna el resultado de dividir a entre b con el operador /.
function calcularDivision(a, b) {
  return a / b;
}
console.log(calcularDivision(10, 2));


console.log("\n--- Reto 5: Módulo ---")
// Recibe dos números "a" y "b".
// Retorna el residuo de la división de a entre b con el operador %.
function calcularModulo(a, b) {
  return a % b;
}
console.log(calcularModulo(5, 3));


console.log("\n--- Reto 6: Exponenciación ---")
// Recibe "base" y "exponene" (números).
//  Retorna base elevado a exponente con el operador **.
function calcularPotencia(base, exponente) {
  return base ** exponente;
}
console.log(calcularPotencia(3, 2));


console.log("\n--- Reto 7: Operador de asignación += ---  "  )
// Recibe "valor" e "incremento" (números).
// Usa una variable con let, aplica += (valor += incremento) y retorna el valor resultante.
function aplicarAsignacionSuma(valor, incremento) {
    return valor += incremento;
}
console.log(aplicarAsignacionSuma(4, 7));

console.log("\n--- Reto 8: Operador de asignación -= ---");
// Recibe "valor" y "decremento" (números).
// Usa una variable con let, aplica -= y retorna el valor resultante.
function aplicarAsignacionResta(valor, decremento) {
    return valor -= decremento;
}
console.log(aplicarAsignacionResta(6, 3));


console.log("\n--- Reto 9: Operador de asignación *= ---")
// Recibe "valor" y "factor" (números).
// Usa una variable con let, aplica *= y retorna el valor resultante.
function aplicarAsignacionMultiplicacion(valor, factor) {
  return valor *= factor;
}
console.log(aplicarAsignacionMultiplicacion(4, 5));


console.log("\n--- Reto 10: operador de asignación /= ----")
// Recibe "valor" y "divisor" (números).
// Usa una variable con let, aplica/= y retorna el valor resultante.
function aplicarAsignacionDivision(valor, divisor) {
    return valor /= divisor;
}   
console.log(aplicarAsignacionDivision(24, 6));


console.log("\n--- Reto 11: Incrementar en uno ---")
// Recibe un número "contador".
// Retorna el valor de contador incrementado en 1 (equivalente a usar ++).
function incrementarEnUno(contador) {
    return contador++;
}
console.log(incrementarEnUno(34));


console.log("\n--- Reto 12: Decrementar en uno ---")
// Recibe un número "contador".
// Retorna el valor de contador decrementado en 1 (equivalente a usar --).
function decrementarEnUno(contador) {
    return contador--;
}
console.log(decrementarEnUno(40));


console.log("\n--- Reto 13: División por cero (Infinity / -Infinity) ---")
// Recibe un booleano "positivo".
// Si positivo es true, retorna el resultado de dividir 1 entre 0 (Infinity).
// Si positivo es false, retorna el resultado de dividir -1 entre 0 (-Infinity).
function resultadoDivisionPorCero(positivo) {
    if(positivo === true){
        return 1/0;
    } else{
        return -1/0;
    }

    // Mas compacto 
    // return positivo === true ? 1 / 0 : -1 / 0;
}
console.log(resultadoDivisionPorCero(true));
console.log(resultadoDivisionPorCero(false));



console.log("\n--- Reto 14: Obtener NaN ---");
// Retorna el resultado de una operación que produzca NaN en JavaScript.
// Por ejemplo: 0/0 o multiplicar un string por un número.
function obtenerNaN() {
  //return "Hola"/0;
  return 0/0;
}
console.log(obtenerNaN());


console.log("\n--- Reto 15: Detectar NaN ---")
// Recibe un valor cualquiera.
// Retorna true si el valor es NaN, false en caso contrario.
// Pista: usa Number.isNaN(valor).
function esValorNaN(valor) {
    return Number.isNaN(valor)
}
console.log(esValorNaN("Hola"));
console.log(esValorNaN(NaN));
console.log(esValorNaN(9));
console.log(esValorNaN(undefined));
console.log(esValorNaN(null));
console.log(esValorNaN({}));
console.log(esValorNaN([]));
console.log(esValorNaN("345"));
// Caso especial
console.log(esValorNaN(0/0));




module.exports = {
  calcularSuma,
  calcularResta,
  calcularMultiplicacion,
  calcularDivision,
  calcularModulo,
  calcularPotencia,
  aplicarAsignacionSuma,
  aplicarAsignacionResta,
  aplicarAsignacionMultiplicacion,
  aplicarAsignacionDivision,
  incrementarEnUno,
  decrementarEnUno,
  resultadoDivisionPorCero,
  obtenerNaN,
  esValorNaN,
};
