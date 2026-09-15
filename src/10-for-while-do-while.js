// For / While

// for(inicializacion; condicion; incremento){

// };

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log();

const notas = ["Nota 1", "Nota 2", "Nota 3"];
for (let i = 0; i < notas.length; i++) {
  console.log(`Indice ${i}: ${notas[i]}`);
}

console.log("**** usando 'const' en bucles 'for...of' ****");

const numeros = [1, 2, 4, 5, 6, 7];
for (const num of numeros) {
  console.log(num);
}

console.log();

const frutas = ['manzana', 'pera', 'uva'];
for(const fruta of frutas){
    console.log(fruta);
    if(fruta === 'manzana'){
        console.log('Es una rica manzana');
    }
}

console.log("**** usando 'const' en bucles 'for...in' ****");

const persona = {
    nombre: 'Ana', edad: 25,
};
for(const clave in persona){
    console.log(`${clave}: ${persona[clave]}`);
}

console.log();

const objeto = {a: 1, b: 2, c: 3, d: 4};
for(const obj in objeto){
    console.log(`${obj}: ${objeto[obj]}`);
}

let contador = 0;

while (contador <3) {
  console.log(contador);
  contador++;
}

// do while

let numero = 0;

do {
    console.log(`Entra en: ${numero}`)
    numero++;
} while (numero < 3);
