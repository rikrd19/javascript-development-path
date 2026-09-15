// ============================================
// Reto: Igualdad débil vs estricta en JavaScript
// ============================================
// Practica == (igualdad débil con coerción), != (desigualdad débil),
// === (igualdad estricta: valor y tipo) y !== (desigualdad estricta).
// Ejecuta los tests con: npx vitest src/07-igualdad-debil-estricta
// ============================================

// --- Reto 1: Igualdad débil (==) ---
// Recibe dos valores "a" y "b". Retorna el resultado de comparar con ==.
// La coerción puede hacer que 5 == '5' sea true.
function resultadoIgualdadDebil(a, b) {
  return a == b;
}
console.log(resultadoIgualdadDebil(5, 5));
console.log(resultadoIgualdadDebil(5, '5'));


// --- Reto 2: Desigualdad débil (!=) ---
// Recibe dos valores "a" y "b". Retorna el resultado de comparar con !=.
// Con coerción, 5 != '5' resulta false porque se consideran iguales.
function resultadoDesigualdadDebil(a, b) {
  return a != b;
}
console.log(resultadoDesigualdadDebil(5, '5'));


// --- Reto 3: Igualdad estricta (===) ---
// Recibe dos valores "a" y "b". Retorna el resultado de comparar con ===.
// Solo es true si coinciden valor y tipo; no hay conversión implícita.
function resultadoIgualdadEstricta(a, b) {
  return a === b;
}
console.log(resultadoIgualdadEstricta(12, 12));
console.log(resultadoIgualdadEstricta('34', '34'));


console.log("--- Reto 4: Desigualdad estricta (!==) ---")
// Recibe dos valores "a" y "b". Retorna el resultado de comparar con !==.
// Es true si el valor o el tipo (o ambos) son distintos.
function resultadoDesigualdadEstricta(a, b) {
  return a !== b;
}
console.log(resultadoDesigualdadEstricta(12, 9));


// --- Reto 5: ¿Son iguales con coerción? ---
// Recibe dos valores "a" y "b". Retorna true si son iguales usando ==
// (permite que número y string "equivalentes" sean iguales).
function sonIgualesConCoercion(a, b) {
  return a == b
}
console.log(sonIgualesConCoercion(4, "4"));

// --- Reto 6: ¿Son iguales en valor y tipo? ---
// Recibe dos valores "a" y "b". Retorna true solo si son estrictamente
// iguales (===): mismo valor y mismo tipo, sin coerción.
function sonIgualesValorYTipo(a, b) {
    return a === b;
}
console.log(sonIgualesValorYTipo("5", "5"));


console.log("--- Reto 7: null y undefined con igualdad débil ---")
// No recibe parámetros. Retorna el resultado de comparar null == undefined.
// En JavaScript, con == estos dos valores especiales se consideran iguales.
function nullYUndefinedSonIgualesDebil() {
    return null == undefined;
}
console.log(nullYUndefinedSonIgualesDebil());

module.exports = {
  resultadoIgualdadDebil,
  resultadoDesigualdadDebil,
  resultadoIgualdadEstricta,
  resultadoDesigualdadEstricta,
  sonIgualesConCoercion,
  sonIgualesValorYTipo,
  nullYUndefinedSonIgualesDebil,
};
