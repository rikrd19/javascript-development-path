// Reto 30 - Fetch en JavaScript: peticiones HTTP reales
// Descripción
// En este reto dominarás la API fetch de JavaScript para realizar peticiones HTTP reales. Aprenderás a consumir APIs, manejar diferentes métodos HTTP (GET, POST, PUT, DELETE), trabajar con headers, parsear respuestas JSON y manejar errores de forma efectiva.

// Conceptos clave
// Fetch API: La forma moderna de hacer peticiones HTTP en JavaScript
// Promesas: fetch retorna una promesa que se resuelve con la respuesta
// Métodos HTTP: GET (obtener), POST (crear), PUT (actualizar), DELETE (eliminar)
// Headers: Metadatos de la petición como Content-Type
// Body: Datos enviados en peticiones POST/PUT, generalmente JSON.stringify()
// Status codes: Códigos que indican el resultado (200=éxito, 404=no encontrado, 500=error)
// Manejo de errores: Usar .catch() para capturar fallos de red o del servidor

function obtenerProductos() {
    // Ejercicio 1:
    // Realiza una petición GET a la API de productos.
    const FAKEAPI = 'https://api.escuelajs.co/api/v1/products'
    return fetch(FAKEAPI)
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((error) => console.error('Error:', error))
}

function obtenerProductosParseados() {
    // Ejercicio 2:
    // Realiza una petición GET y convierte la respuesta a JSON.
    const FAKEAPI = 'https://api.escuelajs.co/api/v1/products'
    return fetch(FAKEAPI)
        .then((response) => response.json());
}

function crearProducto(title, price, description) {
    // Ejercicio 3:
    // Realiza una petición POST para crear un producto.
    // Envía title, price y description en el body como JSON.
    const FAKEAPI = 'https://api.escuelajs.co/api/v1/products'
    return fetch(FAKEAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            price,
            description,
        }),
    });

}

function actualizarProducto(id, title, price) {
    // Ejercicio 4:
    // Realiza una petición PUT para actualizar un producto.
    // Utiliza el id recibido y envía title y price.
    const FAKEAPI = `https://api.escuelajs.co/api/v1/products/${id}`
    return fetch(FAKEAPI, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            price,
        }),
    });
}

function eliminarProducto(id) {
    // Ejercicio 5:
    // Realiza una petición DELETE para eliminar el producto indicado por id.
    const FAKEAPI = `https://api.escuelajs.co/api/v1/products/${id}`
    return fetch(FAKEAPI, {
        method: 'DELETE',
    });

}

function obtenerProductosConError() {
    // Ejercicio 6:
    // Realiza una petición GET y maneja los errores utilizando .catch().
    // En caso de error, retorna un objeto con información sobre el error.
    const FAKEAPI = 'https://api.escuelajs.co/api/v1/products'
    return fetch(FAKEAPI)
        .catch((error) => {
            return {
                error: true,
                message: 'Error al obtener productos'
            }
        })

}

function verificarStatusResponse() {
    // Ejercicio 7:
    // Realiza una petición GET y verifica el código de estado de la respuesta.
    // Si el status no es 200, lanza un Error.
    const FAKEAPI = 'https://api.escuelajs.co/api/v1/products'
    return fetch(FAKEAPI)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('Status no es 200')
                
            }
            return response;
        });
}

export {
    obtenerProductos,
    obtenerProductosParseados,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    obtenerProductosConError,
    verificarStatusResponse,
};

