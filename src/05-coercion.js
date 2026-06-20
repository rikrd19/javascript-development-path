// Coercion Implicita

console.log('5' + 3);
console.log('5' - 3);  // hace conversion de resta y convierte el string a numero
console.log(true + 1); 

// Conversion Explicita 

const str = '42';
const num = Number(str);
console.log(typeof num, num);

const int = parseInt(str, 10);
console.log(int);

const float = parseFloat('3.1415');
console.log(float);

const texto = String(123);
console.log(typeof texto);

const bool = Boolean(1);
console.log(bool);
