console.log("------- Crear Usuario --------");

function crearUsuario() {
  const usuario = {
    nombre: "Ana",
    edad: 28,
    email: "ana@example.com"
  };
  return usuario;
}
const cu = crearUsuario();
console.log(cu.nombre);
console.log(cu.edad);
console.log(cu.email);
console.log(cu.nombre, cu.edad, cu.email);

console.log("------- Obtener Nombre --------");

function obtenerNombre(usuario) {
  return usuario.nombre;
}
const on = obtenerNombre({nombre: "Juan"});
console.log(on);
console.log(obtenerNombre({nombre: "Juan"}));

console.log("------- Obtener Propiedad Dinamica --------");
// Regla clave: La función espera un objeto y un string (nombre de la propiedad).
// obtenerPropiedadDinamica(objeto, propiedad)
//                             ↑         ↑
//                         Un OBJETO   Un STRING

function obtenerPropiedadDinamica(objeto, propiedad) {
  return objeto[propiedad];
}
// Pasa un OBJETO y un STRING (nombre de la propiedad)
const persona = {nombre: "Carla", apellido: "Alva", edad: 32};

const opd = obtenerPropiedadDinamica(persona, "apellido");
console.log(opd);
const opd2 = obtenerPropiedadDinamica(persona, "edad"); 
console.log(opd2);

console.log("------- Tiene Email --------");
// Metodo hasOwnProperty --> Verifica si el objeto tiene una propiedad propia (boolean)

function tieneEmail(usuario) {
  return usuario.hasOwnProperty('email');
}
console.log(tieneEmail({nombre: "Karla", email: "karla@mail.com", edad: 23}));
console.log(tieneEmail({nombre: "Abel", edad: 12}));

console.log("------- Obtener Ciudad --------");
// Regla clave: Cuando uses usuario?.direccion?.ciudad, la estructura debe ser anidada
// La función espera:
// usuario
//   └── direccion (objeto)
//         └── ciudad

function obtenerCiudad(usuario) {
  return usuario?.direccion?.ciudad;
}
console.log(obtenerCiudad({direccion: {ciudad: "Valencia"}}));
console.log(obtenerCiudad({nombre: "Alicia"}));

console.log("------- Obtener Ciudad --------");

function crearProducto() {
  const producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    especificaciones: {
      marca: "TechBrand",
      memoria: "16GB",
      almacenamiento: "512GB SSD"
    }
  };
  return producto;
}
const cp = crearProducto();
console.log(cp.nombre, cp.precio, cp.especificaciones);
console.log(cp.especificaciones.marca, cp.especificaciones.memoria, cp.especificaciones.almacenamiento);


console.log("------- Obtener Memoria --------");
// La función espera:
// producto (el parámetro)
//   └── especificaciones
//         └── memoria
// Regla clave: El parámetro producto ya es el producto. No necesitas envolverlo en { producto: ... }


function obtenerMemoria(producto) {
  return producto?.especificaciones?.memoria;
}
const om = obtenerMemoria({especificaciones:{memoria: "Memoria HHD"}});
console.log(om);


console.log("------- Agregar Propiedad --------");
// Lo que pide la funcion 
// agregarPropiedad(objeto, nombrePropiedad, valor)
//                    ↑          ↑             ↑
//                 Un OBJETO    STRING     CUALQUIER VALOR
// Debe agregar una nueva propiedad al objeto y retornarlo.

function agregarPropiedad(objeto, nombrePropiedad, valor) {
  objeto[nombrePropiedad] = valor;
  return objeto;
}
const carro = {color: "rojo"};
const ap = agregarPropiedad(carro, "marca", "Mazda");
console.log(ap);
const ap2 =agregarPropiedad({}, "modelo", "Turbo");
console.log(ap2);


console.log("------- Agregar Propiedad --------");
// ¿Qué te da la función?
// crearCalculadora() te devuelve un objeto calculadora con:
// valor → el número actual
// sumar(numero) → suma al valor
// restar(numero) → resta al valor
// obtenerValor() → te muestra el valor actual
// ** La clave: La función crearCalculadora() ya está completa. Solo necesitas crear una instancia y usar sus métodos. 

function crearCalculadora() {
  const calculadora = {
    valor: 0,
    sumar: function(numero) {
      this.valor += numero;
    },
    restar: function(numero) {
      this.valor -= numero;
    },
    obtenerValor: function() {
      return this.valor;
    }
  };
  return calculadora;
}
const calc = crearCalculadora();
calc.sumar(10);
calc.sumar(5);
calc.restar(2);
console.log(calc.obtenerValor());

console.log("------- Obtener Twitter --------");
// ¿Qué pide la función?
// Recibe un usuario (objeto) y accede a una ruta anidada:
// usuario
//   └── perfil
//         └── redes
//               └── twitter
// Si algún nivel no existe, retorna "no-disponible".

// Cómo funciona el optional chaining aquí?
// javascript
// usuario?.perfil?.redes?.twitter
//         ↑       ↑       ↑
//   Si usuario  Si perfil  Si redes
//   es null     es null    es null
//   → undefined → undefined → undefined

function obtenerTwitter(usuario) {
  return usuario?.perfil?.redes?.twitter || "no-disponible";
}
// con twitter
const obtener = obtenerTwitter({perfil: {redes: {twitter: "@ana"}}});
console.log(obtener);
// sin twitter (pero con redes)
console.log(obtenerTwitter({perfil: {redes: {instagram: "@ana_inst"}}}));
// sin redes
console.log(obtenerTwitter({perfil: {nombre: "Mario"}}));
// sin perfil
console.log(obtenerTwitter({}));


module.exports = {
  crearUsuario,
  obtenerNombre,
  obtenerPropiedadDinamica,
  tieneEmail,
  obtenerCiudad,
  crearProducto,
  obtenerMemoria,
  agregarPropiedad,
  crearCalculadora,
  obtenerTwitter,
};