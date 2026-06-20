// Strings

const nombre = 'JavaScript';
const version = 'ES6';

console.log(nombre, version);

const mensaje = 'Bienvienido a ' + nombre + ' version: ' + version;
console.log(mensaje);

// Template Literals

const mensaje2 = `Bienvenido y Bienvenida al curso de ${nombre}, en us version: ${version}`;
console.log(mensaje2);

// Expresiones 

const precio = 100;
const cantidad = 3;
const total = `Total: ${precio * cantidad}`;
console.log(total);
console.log(typeof total); // se esta imprimiendo un String


// Multilinea
const nota = `
# Mi Nota
Este es el contenido

Nota 1
Nota 2
Nota 3
`;
console.log(nota);



console.log("\n\n**** Metodos principales en Strings ****")
//lLength
const texto = 'Hola Mundo';
console.log(texto.length);

// slice(inicio, fin)

const texto1 = "JavaScript es Genial";
console.log(texto1.slice(0,10));
console.log(texto1.slice(11));
console.log(texto1.slice(-6));

// Substring(inicio, fin)
const texto2 = "Hola Mundo";
console.log(texto2.substring(0, 4));
console.log(texto2.substring(5));
console.log(texto2.substring(-6));  // substring no lo reconoce numeros negativos y los trata como 0 y regresa el total.

// split(separador)
const texto3 = 'linea1,linea2,linea3';
const lineas = texto3.split(',');
console.log(lineas);

// trim(), trimStart(), trimEnd()
const texto4 = '    Hola Mundo   ';
console.log(texto4.trim());
console.log(texto4.trimStart());
console.log(texto4.trimEnd());

// toLowerCase(), toUpperCase()
const texto5 = 'JavaScript';
console.log(texto5.toLowerCase());
console.log(texto5.toUpperCase());

// includes(subcadena)
const contenido = 'Aprende JavaScript desde Cero';
console.log(contenido.includes('JavaScript')); // resp: true
console.log(contenido.includes('Python')); // resp: false

// startsWith() - endWith()
const archivo = 'documento.md';
console.log(archivo.startsWith('doc'));
console.log(archivo.endsWith('.md'));

// replace() y replaceAll()
const texto6 = 'Hola Mundo, Hola JavaScript';
console.log(texto6.replace('Hola', 'Hi'));
console.log(texto6.replaceAll('Hola', 'Hi'));
console.log(texto6); // al usar los metodos al ejecutar la variable inicial no cambia 

