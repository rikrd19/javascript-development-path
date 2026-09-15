// ============================================
// Reto: while en JavaScript - Evita bucles infinitos
// ============================================
// Practica bucles while y do...while con condición de salida clara.
// Inicializa el contador, cámbialo en cada iteración (ej: contador++) y define
// una condición verificable para evitar bucles infinitos.
// Ejecuta los tests con: npx vitest src/12-while-do-while
// ============================================

console.log("--- Reto 1: while con contador e incremento seguro ---")
// Recibe "n" (número). Usa un bucle while con un contador que empieza en 0.
// Mientras contador < n, agrega el valor actual del contador a un array y luego
// incrementa el contador (condición de salida). Retorna el array.
// Ejemplo: n = 3 → [0, 1, 2].
function numerosConWhile(n) {
  const resultado = [];
  let contador = 0;

  while (contador < n) {
    resultado.push(contador);
    contador++;
  }
  return resultado;
}
console.log(numerosConWhile(3));

 console.log("--- Reto 2: while con condición de salida garantizada ---")
// Recibe "limite" (número). Usa while: contador empieza en 0 y se incrementa
// dentro del bucle mientras contador < limite. Retorna el valor del contador al terminar.
// Asegúrate de modificar el contador en cada vuelta para que el ciclo termine.

function contarHastaLimite(limite) {

  contador = 0;
  while (contador < limite ) {
    console.log(contador);
    contador++;
  }
  return contador;
}
contarHastaLimite(5);

console.log("--- Reto 3: do...while (ejecuta al menos una vez) ---")
// Recibe "limite" (número). Usa do...while: contador empieza en 0, dentro del do
// incrementas el contador y en el while repites mientras contador < limite.
// Así el bloque se ejecuta al menos una vez antes de evaluar la condición.
// Retorna el contador al terminar. Si limite es 0, igual se ejecuta una vez → retorna 1.
function doWhileAlMenosUnaVez(limite) {

   contador = 0;
  do {
    console.log(contador);
    contador++;
  } while (contador < limite);
  return contador;
}
doWhileAlMenosUnaVez(6);


console.log("--- Reto 4: do...while con template literals ---")
// Recibe "limite" (número). Usa do...while con un contador que empieza en 0.
// En cada iteración agrega al array el string `Entra en ${contador}` (template literal)
// y luego incrementa el contador. Repite mientras contador < limite.
// Retorna el array de mensajes. Ejemplo: limite 3 → ["Entra en 0", "Entra en 1", "Entra en 2"].
function mensajesEntradaDoWhile(limite) {
 const mensajes = [];
  contador = 0;
do {
  mensajes.push(`Entra en ${contador}`);
  contador++;
} while (contador < limite);
return mensajes;
}
console.log("Limite en [" + mensajesEntradaDoWhile(4) + "]");



module.exports = {
  numerosConWhile,
  contarHastaLimite,
  doWhileAlMenosUnaVez,
  mensajesEntradaDoWhile,
};
