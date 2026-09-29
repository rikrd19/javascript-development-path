// ============================================
//  Reto 22: Renderizado Dinámico de Opiniones
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/22-renderizado-dinamico-opiniones
// ============================================


// --- Reto 1: Crear Elemento Opinión
// Crea estructura: <article><header><div>nombre rating</div><small>fecha</small></header><p>comentario</p></article>
// Usa: createElement, textContent, appendChild
function crearElementoOpinion(opinion) {
  const article = document.createElement("article");

  const header = document.createElement("header");

  const div = document.createElement("div");

  const nombre = document.createElement("strong");
  nombre.textContent = opinion.nombre;

  const rating = document.createElement("span");
  rating.textContent = `* ${opinion.rating}/5`;

  const fecha = document.createElement("small");
  fecha.textContent = opinion.fecha;

  const comentario = document.createElement("p");
  comentario.textContent = opinion.comentario;

  // armar la estructura (de dentro hacia afuera)
  div.appendChild(nombre);  // div -> strong
  div.appendChild(rating);  // div → span

  header.appendChild(div);   // header → div
  header.appendChild(fecha);  // header -> small

  article.appendChild(header);  // article → header
  article.appendChild(comentario) // article → p

  return article;

//   article
// ├── header
// │   ├── div
// │   │   ├── strong → nombre
// │   │   └── span   → rating
// │   └── small → fecha
// └── p → comentario
}

// --- Reto 2: Crear Elemento Opinión con Estilos
// Igual que Reto 1 pero agrega clases y dataset.id
// Usa: classList.add, dataset.id
function crearElementoOpinionConEstilos(opinion) {
  const article = document.createElement("article");
  article.classList.add("opinion");  // <- Nuevo
  article.dataset.id = opinion.id;  // <- Nuevo

  const header = document.createElement("header");

  const div = document.createElement("div");
  div.classList.add("meta");  // <- Nuevo

  const nombre = document.createElement("strong");
  nombre.textContent = opinion.nombre;

  const rating = document.createElement("span");
  rating.textContent = `* ${opinion.rating}/5`;

  const fecha = document.createElement("small");
  fecha.classList.add("muted");
  fecha.textContent = opinion.fecha;

  const comentario = document.createElement("p");
  comentario.textContent = opinion.comentario;

   // 8. Armar estructura
  div.appendChild(nombre);
  div.appendChild(rating);

  header.appendChild(div);
  header.appendChild(fecha);

  article.appendChild(header);
  article.appendChild(comentario);

  return article;

}

// --- Reto 3: Renderizar Opiniones
// Limpia #opiniones y agrega elementos de la lista
// Usa: querySelector, replaceChildren, appendChild, forEach
function renderizarOpiniones(lista) {
    // seleccionar el contenedor
  const contenedor = document.querySelector("#opiniones");

  // limpiar el contenedor
  contenedor.replaceChild();

  // Recorrer la lista y anadir cada elemento
  lista.forEach((opinion) => {
    const elemento = crearElementoOpinionConEstilos(opinion);
    contenedor.appendChild(elemento);
  });

}

// --- Reto 4: Crear Imagen con Atributos
// Crea <img> con src, alt, className
// datosImagen = {src, alt, class}
function crearImagenConAtributos(datosImagen) {
  const img = document.createElement("img");

  img.src = datosImagen.src;
  img.alt = datosImagen.alt;
  img.className = datosImagen.class;

  return img;
}

// --- Reto 5: Construir Tarjeta Opinión
// Estructura semántica: <article><header><h3>nombre</h3><span>rating</span></header>
//                       <section><p>comentario</p></section><footer><small>fecha</small></footer></article>
// Usa: classList.add para todas las clases
function construirTarjetaOpinion(opinion) {
    function construirTarjetaOpinion(opinion) {
  // 1. Crear article + clase
  const article = document.createElement("article");
  article.classList.add("opinion");

  // 2. Crear header + clase
  const header = document.createElement("header");
  header.classList.add("header");

  // 3. Crear h3 (nombre)
  const nombre = document.createElement("h3");
  nombre.textContent = opinion.nombre;

  // 4. Crear span (rating)
  const rating = document.createElement("span");
  rating.textContent = `* ${opinion.rating}/5`;

  // 5. Crear section + clase
  const section = document.createElement("section");
  section.classList.add("contenido");

  // 6. Crear p (comentario)
  const comentario = document.createElement("p");
  comentario.textContent = opinion.comentario;

  // 7. Crear footer + clase
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  // 8. Crear small (fecha)
  const fecha = document.createElement("small");
  fecha.textContent = opinion.fecha;

  // 9. Armar estructura (de dentro hacia afuera)
  header.appendChild(nombre);
  header.appendChild(rating);

  section.appendChild(comentario);

  footer.appendChild(fecha);

  article.appendChild(header);
  article.appendChild(section);
  article.appendChild(footer);

  return article;
}

}

// --- Reto 6: Renderizar Opiniones Filtradas
// Filtra opiniones con rating >= 4 y renderiza en #opiniones
// Usa: filter, renderizarOpiniones
function renderizarOpinionesFiltradas(lista) {
  const filtradas = lista.filter((opinion) => opinion.rating >= 4);
  renderizarOpiniones(filtradas);
}

// --- Reto 7: Crear Opinión con Template
// Usa innerHTML con template literals
// Estructura: <article class="opinion" data-id={id}><header>...</header><p>comentario</p></article>
function crearOpinionConTemplate(opinion) {
  // 1. Crear el contenedor
  const article = document.createElement("article");
  article.classList.add("opinion");
  article.dataset.id = opinion.id;

  // 2. Usar innerHTML con template literals
  article.innerHTML = `
    <header>
      <strong>${opinion.nombre}</strong>
      <span>* ${opinion.rating}/5</span>
      <small>${opinion.fecha}</small>
    </header>
    <p>${opinion.comentario}</p>
  `;

  return article;
}

// --- Reto 8: Renderizar Opiniones Seguro
// Renderiza en #opiniones con manejo de errores
// Usa: try-catch, querySelector, console.error
function renderizarOpinionesSeguro(lista) {
  try {
    // 1. Seleccionar el contenedor
    const contenedor = document.querySelector("#opiniones");

    // 2. Verificar que existe
    if (!contenedor) {
      throw new Error("No se encontró el contenedor #opiniones");
    }

    // 3. Limpiar y renderizar
    contenedor.replaceChildren();

    lista.forEach((opinion) => {
      const elemento = crearElementoOpinionConEstilos(opinion);
      contenedor.appendChild(elemento);
    });

    console.log("Opiniones renderizadas correctamente");
  } catch (error) {
    // 4. Manejar el error
    console.error("Error al renderizar opiniones:", error.message);
  }
}

// --- Reto 9: Agregar Opinión al Inicio
// Inserta opinión al inicio de #opiniones
// Usa: prepend en lugar de appendChild
function agregarOpinionAlInicio(opinion) {
  const contenedor = document.querySelector("#opiniones");
  const elemento = crearElementoOpinionConEstilos(opinion);
  contenedor.prepend(elemento);
}

// --- Reto 10: Renderizar Opiniones Optimizado
// Renderiza usando DocumentFragment para mejor rendimiento
// Usa: createElement, createDocumentFragment, appendChild
function renderizarOpinionesOptimizado(lista) {
  const contenedor = document.querySelector("#opiniones");
  contenedor.replaceChildren();

  // 1. Crear el DocumentFragment
  const fragment = document.createDocumentFragment();

  // 2. Añadir cada opinión al fragmento
  lista.forEach((opinion) => {
    const elemento = crearElementoOpinionConEstilos(opinion);
    fragment.appendChild(elemento);
  });

  // 3. Insertar el fragmento completo al DOM (UNA SOLA VEZ)
  contenedor.appendChild(fragment);
}


module.exports = {
  crearElementoOpinion,
  crearElementoOpinionConEstilos,
  renderizarOpiniones,
  crearImagenConAtributos,
  construirTarjetaOpinion,
  renderizarOpinionesFiltradas,
  crearOpinionConTemplate,
  renderizarOpinionesSeguro,
  agregarOpinionAlInicio,
  renderizarOpinionesOptimizado,
};