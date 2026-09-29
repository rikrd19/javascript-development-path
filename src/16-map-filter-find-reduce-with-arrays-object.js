// Metodos de orden superior

// Map()

const notas = [
  { id: 1, title: "Nota 1", content: "Contenido uno" },
  { id: 2, title: "Nota 2", content: "Contenido dos" },
  { id: 3, title: "Nota 3", content: "Contenido tres" },
];
const titulos = notas.map((nota) => nota.title);
console.log(titulos);
const ids = notas.map((nota) => nota.id);
console.log(ids);

//agregar una propiedad

const notasConFecha = notas.map((nota) => ({
  ...nota,
  fechaCreacion: new Date(),
}));

console.log(notasConFecha);

console.log("\n---------- filter() --------");

const notas2 = [
  { id: 1, title: "Nota 1", content: "Contenido uno", esFavorita: true },
  { id: 2, title: "Nota 2", content: "Contenido dos", esFavorita: false },
  { id: 3, title: "Nota 3", content: "Contenido tres", esFavorita: true },
];

const favoritas = notas2.filter((nota) => nota.esFavorita);
console.log(favoritas);

const titulo = notas.filter((nota) =>
  nota.title.toLocaleLowerCase().includes("nota 1"),
);
console.log(titulos);



console.log("\n------------ find() ---------");

const notas3 = [
  { id: 1, title: "Nota 1", content: "Contenido uno", esFavorita: true },
  { id: 2, title: "Nota 2", content: "Contenido dos", esFavorita: false },
  { id: 3, title: "Nota 3", content: "Contenido tres", esFavorita: true },
];
const nota = notas3.find((nota) => nota.id === 2);
console.log(nota);

// reduce()
console.log("\n------------ reduce() ---------");

const numeros = [1,2,3,4,5];
const suma = numeros.reduce((acc, n) => acc + n, 10);
console.log(suma);