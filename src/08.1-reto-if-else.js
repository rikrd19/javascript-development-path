// ============================================
// Reto: If, else y else if en JavaScript
// ============================================
// Practica el control de flujo condicional con if, else y else if.
// Valida reglas de negocio como mayoría de edad, permisos y umbrales de acceso.
// Ejecuta los tests con: npx vitest src/09-if-else
// ============================================

// --- Reto 1: Condición simple (mayor de edad) ---
// Recibe "edad" (número). Retorna true si edad >= 18, false en caso contrario.
// Usa if y else (o solo return de una comparación).
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(esMayorDeEdad(19));

// --- Reto 2: Mensaje según condición ---
// Recibe "edad" (número). Si edad >= 18 retorna 'eres mayor de edad',
// si no, retorna 'eres menor de edad'. Usa if y else con return.
function mensajeEdad(edad) {
  if (edad >= 18) {
    return "Eres mayor de edad";
  } else {
    return "Eres menor de edad";
  }
}
console.log(mensajeEdad(18));

console.log("--- Reto 3: else if para caso exacto ---");
// Recibe "edad" (número). Retorna:
// - 'eres mayor de edad' si edad >= 19
// - 'Tienes dieciocho años' si edad === 18
// - 'eres menor de edad' en cualquier otro caso
// Usa if, else if y else. Prioriza la condición más restrictiva primero.
function mensajeEdadDetallado(edad) {
  if (edad >= 19) {
    return "Eres mayor de edad";
  } else if (edad === 18) {
    return "Tienes 18 anos";
  } else {
    return "Eres menor de edad";
  }
}
console.log(mensajeEdadDetallado(48));

// --- Reto 4: Validar umbral con >= ---
// Recibe "valor" (número) y "minimo" (número).
// Retorna true si valor >= minimo, false en caso contrario.
function cumpleMinimo(valor, minimo) {
  if (valor >= minimo) {
    return true;
  } else {
    return false;
  }
}
console.log(cumpleMinimo(5, 5));

console.log("--- Reto 5: Nivel de acceso por edad ---");
// Recibe "edad" (número). Retorna un string según el rango:
// - 'adulto' si edad >= 19
// - 'dieciocho' si edad === 18
// - 'menor' si edad < 18
// Usa if, else if y else con comparaciones (>=, ===, <).
function nivelAcceso(edad) {
  if (edad >= 19) {
    return "adulto";
  } else if (edad === 18) {
    return "dieciocho";
  } else {
    return "menor";
  }
}
console.log(nivelAcceso(13));

console.log("--- Reto 6: Acceso con condición (edad o permiso) ---");
// Recibe "edad" (número) y "tienePermisoEspecial" (booleano).
// Retorna true si la persona puede entrar: ya sea edad >= 18 O tiene permiso especial.
// Retorna false en caso contrario.
function puedeEntrar(edad, tienePermisoEspecial) {
  if (edad >= 18 && tienePermisoEspecial) {
    return true;
  } else {
    return false;
  }
}
console.log(puedeEntrar(19, true));
console.log(puedeEntrar(17, true));
console.log(puedeEntrar(19, false));

module.exports = {
  esMayorDeEdad,
  mensajeEdad,
  mensajeEdadDetallado,
  cumpleMinimo,
  nivelAcceso,
  puedeEntrar,
};
