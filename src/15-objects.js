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