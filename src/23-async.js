// Async

console.log(" 1. Inicio");

setTimeout(() => {
  console.log(" 2. Timeout Ejecutado");
}, 3000);

console.log(" 3. Fin");

// Callbacks

function obtenerDatos(callback) {
  setTimeout(() => {
    callback("Datos obtenidos");
  }, 2000);
}

obtenerDatos((resultado) => {
  console.log(resultado);
});

// Callback Hell ** cuidado con el callback hell, que es cuando se anidan demasiados callbacks y el código se vuelve difícil de leer y mantener. Se recomienda usar Promesas o async/await para evitar este problema.

function obtenerUsuario(cb) {
  setTimeout(() => cb({ id: 1, nombre: "Juan", edad: 30 }), 300);
}

function obtenerNotas(userId, cb) {
  setTimeout(() => cb(["nota 1", "nota 2", "nota 3"]), 300);
}

function procesarNotas(notas, cb) {
  setTimeout(() => cb(notas.map((n) => n.toUpperCase())), 300);
}

//callback hell anidando las secuencias de funciones, lo que hace que el código sea difícil de leer y mantener
obtenerUsuario((usuario) => {
  obtenerNotas(usuario.id, (notas) => {
    procesarNotas(notas, (resultado) => {
      console.log("Usuario:", usuario.nombre);
      console.log("Resultados:", resultado);
    });
  });
});

// Promise. ** valor disponible ahora o en el futuro, y que puede ser resuelto o rechazado. Una promesa puede estar en uno de tres estados: pendiente, cumplida o rechazada.

const promesa = new Promise((resolve, reject) => {
  const exito = true; // Cambiar a false para simular un error

  setTimeout(() => {
    if (exito) {
      resolve("Operación exitosa");
    } else {
      reject(new Error("Algo salió mal"));
    }
  }, 1000);
});

promesa
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error.message));

// Promise
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function obtenerUsuario2() {
  return esperar(2000).then(() => ({ id: 2, nombre: "Mario", edad: 40 }));
}

function obtenerNotas2(userId) {
  return esperar(200).then(() => ["nota 4", "nota 5", "nota 6"]);
}

function procesarNotas2(notas) {
  return esperar(200).then(() => notas.map((n) => n.toUpperCase()));
}
    
obtenerUsuario2()
    .then((usuario) => obtenerNotas2(usuario.id))
    .then((notas) => procesarNotas2(notas))
    .then((resultado) => console.log("Resultado: ", resultado))
    .catch((error) => console.error("Error en algun paso: ", error.message));
 

// Async/Await permite trabajar con promesas de manera más sencilla y legible, evitando el callback hell y haciendo que el código se vea más secuencial.

// async function obtenerUsuario3() {
//   await esperar(200);
//   return {...};
// }

async function esperar2(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function obtenerUsuario3() {
  await esperar2(200);
  return { id: 3, nombre: "Alice", edad: 25 };
}

async function obtenerNotas3(userId) {
  await esperar2(200);
  return ["nota 7", "nota 8", "nota 9"];
}

async function procesarNotas3(notas) {
  await esperar2(200);
  return notas.map((n) => n.toUpperCase());
}

async function cargarDatos(){
    try {
        const usuario = await obtenerUsuario3();
        const notas = await obtenerNotas3(usuario.id);
        const resultado = await procesarNotas3(notas);
        console.log("Resultado: ", resultado);
    } catch (error) {
        console.error("Error: ", error.message);
    }
}

cargarDatos();