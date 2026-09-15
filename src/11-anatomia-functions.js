// Function

function saludar(nombre){
    return `Hola ${nombre}`;
}
 const mensaje = saludar("Oscar");
 const mensaje2 = saludar("Felipe")
 console.log(mensaje2);

 // Parametros / Argumentos

 function crearUsuario(nombre, edad){
    return {nombre, edad};
 }
 const usuario = crearUsuario("Juan", 35);
 console.log(usuario);

 // Arrow Function

 const multiplicar = (a, b) => a * b;
 console.log(multiplicar(4, 5));

// Function encargada de Crear una nota
const crearNota = (contenido, titulo = "Sin titulo") => {
    return {
        titulo,
        contenido,
        creado: Date.now()
    }
}
const nota1 = crearNota("Mi contenido");
const nota2 = crearNota("Otro contenido", "Mi Nota");
console.log(nota1);
console.log(nota2);



 

