// Reto 29: Async/await vs promesas en JavaScript
// Aprende a escribir código asíncrono más legible y mantenible usando promesas con then/catch y la azúcar sintáctica de async/await.

//  Conceptos clave
// Async/await: Azúcar sintáctica sobre promesas para código más legible
// Promesas: Objetos que representan un valor futuro
// Then/catch: Encadenamiento de promesas tradicional
// Try/catch: Manejo de errores en funciones async
// Promise.all: Ejecución paralela de múltiples promesas
// Await: Pausa la ejecución hasta que la promesa se resuelva
// Throw: Lanzar errores en funciones async

// Notas importantes
// Las funciones async siempre retornan una promesa
// Await solo puede usarse dentro de funciones async
// Try/catch captura errores de promesas rechazadas
// Promise.all falla si alguna promesa se rechaza
// Then/catch y async/await pueden coexistir

// Reto 29: Async/await vs promesas en JavaScript

/**
 * Ejercicio 1: Función utilidad esperar
 * Crea una función que retorna una promesa que se resuelve después de ms milisegundos
 * Debe usar setTimeout y new Promise
 */
function esperar(ms) {
    // Tu código aquí
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

/**
 * Ejercicio 2: Función asíncrona básica
 * Crea una función async que usa esperar para simular una operación
 * Después de 100ms debe retornar { id: 1, nombre: "Usuario" }
 */
async function obtenerUsuario() {
    // Tu código aquí
    await esperar(100);
    return {
        id: 1,
        nombre: "Usuario"
    }
}

/**
 * Ejercicio 3: Async con parámetro
 * Crea una función async que recibe un usuarioId
 * Usa esperar(150) y retorna { usuarioId, notas: [10, 9, 8] }
 */
async function obtenerNotas(usuarioId) {
    // Tu código aquí
    await esperar(150);
    return {
        usuarioId,
        notas: [10, 9, 8]
    }
}

/**
 * Ejercicio 4: Procesamiento con async
 * Crea función async que recibe un objeto con notas
 * Usa esperar(100) y retorna el promedio de las notas
 */
async function procesarNotas(data) { 
    // Tu código aquí
    await esperar(100);
    const valores = data.notas;
    const addition = valores.reduce((acc, nota) => acc + nota, 0)
    const promedio = addition / valores.length
    return {
        "promedio": promedio
    }
}

/**
 * Ejercicio 5: Orquestación con async/await
 * Combina las funciones anteriores en orden:
 * obtenerUsuario → obtenerNotas → procesarNotas
 * Usa try/catch para manejar errores
 */
// function esperarDos(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function obtenerUsuarioDos() {
//     await esperarDos(200);
//     return { id: 1, nombre: 'Ana' }
// }

// async function obtenerNotasDos(userId) {
//     await esperarDos(200);
//     return { usuarioId: 1, notas: [10, 9, 8] };
// }

// async function procesarNotasDos(notas) {
//     await esperarDos(200);
//     return notas.notas.reduce((acc, nota) => acc + nota, 0);
// }

async function obtenerPromedioUsuario() {
    // Tu código aquí
    try {
        // await espera una Promise cuando necesitas su resultado para continuar.
        const usuario = await obtenerUsuario();
        const notas = await obtenerNotas(usuario.id)
        const promedio = await procesarNotas(notas);

        return promedio;

    } catch(error) {
        console.error('Error:', error.message);
        throw error;
    }
}

/**
 * Ejercicio 6: Promesa con then/catch
 * Implementa el mismo flujo anterior pero con then/catch
 * Sin usar async/await, solo promesas encadenadas
 */
function esperarTres(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function obtenerUsuarioTres() {
    return esperarTres(200).then(() => ({id: 1, nombre: 'Ana' }))
}

function obtenerNotasTres(userId) {
    return esperarTres(200).then(() => ({ usuarioId: 1, notas: [10, 9, 8] }))
}

function procesaNotas(notas) {
    const suma = notas.notas.reduce((acc, nota) => acc + nota, 0)
    const promedio = suma / notas.notas.length
    return esperarTres(200).then(() => promedio);
}

function obtenerPromedioConPromesas() {
    // Tu código aquí
    return obtenerUsuarioTres()
        .then((usuario) => obtenerNotasTres(usuario.id))
        .then((notas) => procesaNotas(notas))
        .then((resultado) => {
            return {"promedio":resultado}
        })
        .catch((error) => error.message)
}

/**
 * Ejercicio 7: Manejo de errores con async
 * Crea función async que lanza un error si el usuarioId es 0
 * Usa throw new Error("Usuario no válido")
 */
async function validarUsuario(usuarioId) {
    // Tu código aquí
    if (usuarioId === 0) {
        throw new Error('Usuario no válido')
    }

    return {
        "id": usuarioId,
        "valido": true
    }
}

/**
 * Ejercicio 8: Múltiples awaits en paralelo
 * Usa Promise.all con await para ejecutar múltiples operaciones
 * Debe ejecutar 3 funciones que retornan promesas en paralelo
 */

// async function saludar(nombre) {
//     return `Hola ${nombre}`
// }

// async function infoUsuarios() {
//     return {
//         1: {
//             id: 1,
//             nombre: 'Maris'
//         },
//         2: {
//             id: 2,
//             nombre: 'Pablo'
//         }
//     }
// }

// async function operacion(a, b, c) {

//     const operators = ['+', '-', '*', '/', '%']

//     const result = typeof (c) === 'string' && operators.includes(c)

//     if (!result) {
//         throw new Error('Ningun operador valido');
//     }

//     switch (c) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return a / b;
//         case '%':
//             return a % b;
//         //default:
//         //  throw new Error('Ningun operador valido');
//     }


// }

async function funcionUno() {
    return 'resultado 1'
}
async function funcionDos() {
    return 'resultado 2'
}
async function funcionTres() {
    return 'resultado 3'
}

async function operacionesParalelas() {
    // Tu código aquí
    // Promise.all() es útil cuando una operación no depende de la otra.
    const resultado = await Promise.all([
       funcionUno(),
       funcionDos(), 
       funcionTres()
    ])

    return resultado;
}

/**
 * Ejercicio 9: Conversión de callback a async
 * Convierte una función callback a async/await
 */
function callbackAsincrono(valor, callback) {
    setTimeout(() => {
        callback(valor * 3);
    }, 200);
}

async function convertirCallbackAsync(valor) {
    // Tu código aquí - usa callbackAsincrono pero con async/await
    return new Promise((resolve) => {
        callbackAsincrono(valor, (resultado) => {
            resolve(resultado)
        })
    })
}

/**
 * Ejercicio 10: Encadenamiento mixto
 * Combina async/await con then/catch en el mismo flujo
 * Demuestra que ambos enfoques pueden coexistir
 */

function esperarCuarto(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function obtenerUsuarioCuarto() {
    await esperarCuarto(200);
    return { id: 1, nombre: 'Ana' }
}

async function obtenerNotasCuarto(userId) {
    await esperarCuarto(200);
    return { usuarioId: 1, notas: [10, 9, 8] };
}

async function procesarNotasCuarto(notas) {
    await esperarCuarto(200);
    const suma = notas.notas.reduce((acc, nota) => acc + nota, 0);
    const promedio = suma / notas.notas.length
    return promedio
}


async function flujoMixto() {
     return obtenerUsuarioCuarto()
        .then((usuario) => obtenerNotasCuarto(usuario.id))
        .then((notas) => procesarNotasCuarto(notas))
        .then((resultado) => { 
            return {"promedio" : resultado} 
        })
        .catch((error) => error.message)
}

// const obtenerDatosAPI = new Promise((resolve) => setTimeout(() => {
//     resolve({ id: 101, username: "maris_pablo" })
// }, 250))

// async function flujoMixto() {
//     // Tu código aquí - usa await y then juntos
//     const nombreUsuario = await obtenerDatosAPI
//         .then((usuario) => {
//             return `Id: ${usuario.id}, Nombre: ${usuario.username}`;
//         }).catch((error) => {
//             console.error('Fallo la API', error.message);
//             return 'ANONIMOUS'
//         })

//     return nombreUsuario;
// }


module.exports = {
    esperar,
    obtenerUsuario,
    obtenerNotas,
    procesarNotas,
    obtenerPromedioUsuario,
    obtenerPromedioConPromesas,
    validarUsuario,
    operacionesParalelas,
    convertirCallbackAsync,
    flujoMixto
};