// ============================================
// Reto: Switch en JavaScript
// ============================================
// Practica la estructura switch: case, break, default y agrupación de casos
// para comparar una misma expresión con varias opciones.
// Ejecuta los tests con: npx vitest src/10-switch
// ============================================

// --- Reto 1: Día laboral o fin de semana ---
// Recibe "dia" (string en minúsculas: "lunes", "martes", ..., "domingo").
// Retorna "día laboral" para lunes a viernes, "fin de semana" para sábado y domingo,
// "día no válido" para cualquier otro valor.
// Usa switch agrupando los casos que comparten la misma acción (sin repetir código).
function tipoDeDia(dia) {
  switch (dia) {
    case "dillunys":
    case "dimarts":
    case "dimecres":
    case "dijous":
    case "divendres":
      return "dia laboral";
    case "disabte":
    case "diumenge":
      return "fin de semana";
    default:
      return "dia no valido";
  }
}
console.log(tipoDeDia("maig"));

// --- Reto 2: Mensaje según opción ---
// Recibe "opcion" (string: "a", "b" o "c").
// Retorna "Opción A" si opcion === "a", "Opción B" si "b", "Opción C" si "c".
// Si no coincide con ninguno, retorna "opción no válida" (usa default).
// Usa switch con break en cada case para que no se ejecute el siguiente.
function mensajeOpcion(opcion) {
  switch (opcion) {
    case "a":
      return "Opcion A";
    case "b":
      return "Opcion B";
    case "c":
      return "Opcion C";
    default:
      return "Opcion no valida";
  }
}
console.log(mensajeOpcion("b"));

// --- Reto 3: Categoría por código ---
// Recibe "codigo" (string: "E1", "E2", "H1").
// Retorna "electrónica" para "E1" y "E2" (agrupa ambos case en un mismo resultado).
// Retorna "hogar" para "H1".
// Retorna "desconocido" para cualquier otro (default).
// Practica agrupar varios case que comparten la misma acción.
function categoriaPorCodigo(codigo) {
  switch (codigo) {
    case "E1":
    case "E2":
      return "electronica";
    case "H1":
      return "hogar";
    default:
      return "desconocido";
  }
}
console.log(categoriaPorCodigo("S1"));

// --- Reto 4: Díasdel mes ---
// Recibe "mes" (número del 1 al 12).
// Retorna el número de días del mes: 31 para ene, mar, may, jul, ago, oct, dic;
// 30 para abr, jun, sep, nov; 28 para feb.
// Retorna 0 si el mes no es válido (default).
// Usa switch agrupando los meses que tienen los mismos días.
function diasDelMes(mes) {
  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return "numeros de dias 31";
    case 4:
    case 6:
    case 9:
    case 11:
      return "numeros de dias 30";
    case 2:
      return "numeros de dias 28";
    default:
      return "dias no validos 0";
  }
}
console.log(diasDelMes(3));

// --- Reto 5: Nivel de usuario ---
// Recibe "nivel" (string: "principiante", "intermedio", "avanzado").
// Retorna "acceso básico" para principiante, "acceso estándar" para intermedio,
// "acceso completo" para avanzado.
// Retorna "nivel no válido" para cualquier otro valor (default).
function nivelDeUsuario(nivel) {
  switch (nivel) {
    case "principiante":
      return "acceso básico";
    case "intermedio":
      return "acceso estándar";
    case "intermedio":
      return "acceso completo";
    default:
      return "nivel no válido";
  }
}
console.log(nivelDeUsuario("completo"));

module.exports = {
  tipoDeDia,
  mensajeOpcion,
  categoriaPorCodigo,
  diasDelMes,
  nivelDeUsuario,
};
