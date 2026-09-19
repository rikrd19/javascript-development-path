// ============================================
// Reto: Destructuración de objetos en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/18-destructuracion-objetos
// ============================================

console.log("--- Reto 1: Destructuración básica ---");
// Usa destructuración para extraer las propiedades "nombre" y "edad"
// del objeto recibido y retórnalas como un array [nombre, edad].
function extraerDatosBasicos(persona) {
  const {nombre, edad} = persona;
  //retorna como array
  return [nombre, edad];
}
const persona = {
  nombre: "Juana",
  email: "jua@mail.com",
  telefono: "23232",
  estadoCivil: "casada",
  cantHijos: 4,
  edad: 30,
};
const extDat = extraerDatosBasicos(persona);
console.log(extDat);


console.log("--- Reto 2: Destructuración con renombrado ---");
// Usa destructuración con renombrado para extraer "title" como "titulo"
// y "content" como "contenido" del objeto nota recibido.
// Retorna un objeto { titulo, contenido }.
function extraerNotaRenombrada(nota) {
  const {title: titulo, content: contenido} = nota;
  return {titulo, contenido};
}
const nota = {
    title: "El mar y la luna",
    content: "Novela"
}
const extNot = extraerNotaRenombrada(nota);
console.log(extNot)


console.log("--- Reto 3: Destructuración anidada ---");
// Usa destructuración para extraer directamente la propiedad "ciudad"
// del objeto anidado "direccion" dentro del objeto usuario.
// Retorna la ciudad.
function extraerCiudadAnidada(usuario) {
    // desestructuracion anidada
 const { direccion: { ciudad } } = usuario
 
 return ciudad;
}
const usuario = { 
    nombre: "Juan", 
    direccion: {
        ciudad: "Carabobo",
        pais: "Venezuela"
    }
};
console.log(extraerCiudadAnidada(usuario));

console.log("--- Reto 4: Copia con spread operator ---");
// Crea y retorna una copia superficial del objeto producto recibido
// usando el spread operator (...).
function copiarProducto(producto) {
    return {...producto};
}
const producto = {
    id: 1,
    nombre: "Laptop",
    precio: "1500",
    marca: "HP"
}
console.log(copiarProducto(producto));

console.log("--- Reto 5: Composición de objetos ---");
// Crea un nuevo objeto que combine las propiedades de objetoA y objetoB.
// Las propiedades de objetoB deben sobrescribir las de objetoA si hay conflictos.
// Usa spread operator.
function combinarObjetos(objetoA, objetoB) {
    // Spread operator: combina ambos objetos
 return {...objetoA, ...objetoB};
}
const objetoA = {
    direccion: "La Calera",
    numero: 23
}
const objetoB = {
    direccion: "C. Mompou",
    color: "amarillo",
    numero: 42
}
console.log(combinarObjetos(objetoA, objetoB));

console.log("--- Reto 6: Añadir propiedades con spread ---");
// Crea un nuevo objeto a partir del objeto usuario recibido,
// añadiendo las propiedades "activo: true" y "rol: 'admin'".
// No modifiques el objeto original.
function agregarPropiedadesUsuario(usuario1) {
    return {...usuario1, activo: true, rol: "admin"};
}
const usuario1 = {
    nombre: "Alva", 
    email: "alva@mail.com",
    edad: 30
}
console.log(agregarPropiedadesUsuario(usuario1));


// --- Reto 7: Object.keys ---
// Retorna un array con todas las claves (keys) del objeto recibido
// usando Object.keys().
function obtenerClaves(objeto) {
  return Object.keys(objeto);
}
const objeto ={
    auto: "Mazda",
    modelo: "Trueno",
    ano: 2026
};
console.log(obtenerClaves(objeto));

console.log("--- Reto 8: Object.values ---");
// Retorna un array con todos los valores del objeto recibido
// usando Object.values().
function obtenerValores(objeto1) {
  return Object.values(objeto1);
}
const objeto1 = {
    tipo: "Edificio",
    color: "Gris", 
    ciudad: "Valencia"
};
console.log(obtenerValores(objeto1));


console.log("--- Reto 9: Object.entries ---")
// Retorna un array con los pares [clave, valor] del objeto recibido
// usando Object.entries().
function obtenerEntradas(objeto2) {
  return Object.entries(objeto2);
}
const objeto2 = {
    deporte: "Futbol",
    ciudad: "Valencia",
    edades: 20
}
console.log(obtenerEntradas(objeto2));


console.log("--- Reto 10: Transformar objeto a array de strings ---");
// Usa destructuración y Object.entries para transformar el objeto recibido
// en un array de strings con formato "clave: valor".
// Ejemplo: { a: 1, b: 2 } → ["a: 1", "b: 2"]
function objetoAStringArray(objeto3) {
    return Object.entries(objeto3).map(([clave, valor]) => {
        return `${clave}: ${valor}`;
    });
  // Tip: Usa Object.entries() y map()
}
const objeto3 = {
    nombre: "Maria",
    apellido: "Montes",
    edad: 24
}
console.log(objetoAStringArray(objeto3));


module.exports = {
  extraerDatosBasicos,
  extraerNotaRenombrada,
  extraerCiudadAnidada,
  copiarProducto,
  combinarObjetos,
  agregarPropiedadesUsuario,
  obtenerClaves,
  obtenerValores,
  obtenerEntradas,
  objetoAStringArray,
};
