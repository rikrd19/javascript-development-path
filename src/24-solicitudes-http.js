// Http

/** fetch es una API que nos permite hacer solicitudes HTTP 
 * de manera sencilla y moderna. Es una alternativa a XMLHttpRequest  
 * y se basa en promesas, lo que facilita el manejo de respuestas asíncronas. 
*/

const FAKEAPI = "https://api.escuelajs.co/api/v1/products";

// fetch Get
fetch(FAKEAPI)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error: ", error.message));


// Fetch POST/PUT/DELETE

const FAKEAPI = "https://api.escuelajs.co/api/v1/products";

fetch(FAKEAPI, {
  method: "POST", // Cambiar a "PUT" o "DELETE" según la operación deseada
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    title: "Nuevo Producto",
    price: 999,
    description: "Creado desde fetch",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
  }),
});
  