// Arrays
const notas = ["Nota 1", "Nota 2", "Nota 3"];
const numeros = [1, 2, 3, 4, 5];
const mixtos = [1, "texto", true, null, {id: 1}];

// == Crear (Create) ==

// push()

notas.push("Nota 4");
console.log(notas);

// unshift(). ---> agregar al inicio

notas.unshift("Nota 0");
console.log(notas);

// splice() --> para agregar un elemento en una posicion 

notas.splice(1, 0, "Notas 1.2"); // splice(posicion agregar, eliminar, elemento a insertar)
console.log(notas);

// == Leer (Read) ==

console.log(notas[0]);
console.log(notas[1]);
console.log(notas.length); // --> para saber cuantos elementos tienen 'notas'

// == Actualizar (Update)

const notas2 = ["Notas 1", "Notas 2"];
notas2[1] = "Nota 3";

console.log(notas2);

notas2.splice(1,0, "Nota 4");
console.log(notas2);

// == Eliminar (Delete)
const notas3 = ["Nota 1", "Nota 2"];
console.log(notas3.pop()); // --> elimina el ultimo elemento
console.log(notas3);

const notas4 = ["Nota 1", "Nota 2", "Nota 3", "Nota 4", "Nota 5"];
console.log(notas4.shift());    //---> para eliminar el primer elemento
console.log(notas4);

console.log(notas4.splice(1,1)); // tambien para eliminar splice(posicion a eliminar, cuantas posiciones se eliminaran)
console.log(notas4);
console.log(notas4.pop()); // elimina ultimo elemento
console.log(notas4.shift()); // elimina primer elemento