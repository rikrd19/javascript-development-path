// Objects

const nota = {
    id: 1,
    title: "Mi primera nota",
    content: "contenido de la nota", 
    createdAt: Date.now(),
    edad: 13
}

console.log(nota.id);
console.log(nota.title);

const campo = "content";
console.log(nota[campo]);

// si se quiere acceder a un valor que no existe
console.log(nota.autor); // undefined

// Optional Chaining
console.log(nota.autor?.name); 

// Optional Chaining (?.) es una característica de JavaScript (ES2020) que te permite 
// acceder a propiedades de un objeto de forma segura sin que el código falle si algo 
// es null o undefined.

// ******** Desestructuracion y spread operator en objetos *******

const nota2 = {
    id: 1,
    title: "Mi primera nota",
    content: "contenido de la nota", 
    createdAt: Date.now(),
    edad: 13
}
const id = nota2.id;
const title = nota2.title;
console.log(id, title);

const {title: titulo, content} = nota2;
console.log(titulo, content);

// spread

const nota3 = {id: 2, title: "Hola"};
const data = {esAdmin: true};

const copia = {... nota3};

console.log(nota3);
console.log(copia);

const notaActualizada = {
    ...nota3,
    ...data,
    edad: 18
};
console.log(notaActualizada);

// verificar
const nota4 = {
    id: 1,
    title: "Mi primera nota",
    content: "contenido de la nota", 
    createdAt: Date.now(),
    edad: 13
}

// Object.keys()
// regresa con las llaves 
console.log(Object.keys(nota4));

// accediendo a los valores 
// Object.values
console.log(Object.values(nota4));

// accediendo la combinacion de los pares clave-valor
// Object.entries
console.log(Object.entries(nota4));