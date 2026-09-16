console.log("----------- Crear Contador -----------");

function crearContador(valorInicial = 0) {
  let contador = valorInicial;

  return {
    incrementar(cantidad = 1) {
      contador += cantidad;
      return `Depositado: $${cantidad}, Saldo actual: $${contador}`;
    },
    decrementar(cantidad = 1) {
      contador -= cantidad;
      return `Retirado: $${cantidad}, Saldo actual: $${contador}`;
    },
    obtenerValor() {
      return `Saldo Actual: $${contador}`;
    },
  };
}

const c = crearContador(3000);
console.log(c.obtenerValor());
console.log(c.incrementar(100));
console.log(c.decrementar(60));

const c2 = crearContador(1000);
console.log(c2.obtenerValor());
console.log(c2.incrementar(200));
console.log(c2.decrementar(100));

console.log("\n----------- Crear Acumulador -----------");
function crearAcumulador(cantidad = 0) {
  let total = cantidad;

  return {
    sumar(valor) {
      total += valor;
      return `Sumar: ${valor}, Total ${total}`;
    },
    total() {
      return `Total acumulado: ${total}`;
    },
  };
}

const acumulador = crearAcumulador(500);
console.log(acumulador.total());
console.log(acumulador.sumar(200));
console.log(acumulador.total());

console.log("\n----------- Crear Carrito -----------");

function crearCarrito() {
  let productos = []; // variable privada (closure)

  return {
    agregar(producto, precio) {
      productos.push({ producto, precio });
      return `Producto ${producto} agregado al carrito. Precio: $${precio}`;
    },
    remover(producto) {
      productos = productos.filter((p) => p.producto !== producto);
      return `Producto ${producto} removido del carrito.`;
    },
    total() {
      return productos.reduce((sum, p) => sum + p.precio, 0);
    },
    vaciar() {
      productos = [];
      return "Carrito vaciado.";
    },
  };
}

const cc = crearCarrito();
console.log(cc.agregar("Pasta", 10));
console.log(cc.agregar("Arroz", 5));
console.log(cc.total());
console.log(cc.remover("Pasta"));
console.log(cc.total());
console.log(cc.vaciar());

console.log("\n----------- Crear Cache -----------");

function crearCache() {
  let datos = {};

  return {
    guardar(clave, valor) {
      datos[clave] = valor;
      return `Valor guardado en clave: ${clave}`;
    },
    obtener(clave) {
      return datos[clave];
    },
    existe(clave) {
      return clave in datos;
    },
    limpiar() {
      datos = {};
      return "Cache limpiado.";
    },
  };
}
const cache = crearCache();
console.log(cache.guardar("nombre", "Ana"));
console.log(cache.guardar("edad", 23));
console.log(cache.guardar("ciudad", "Valencia"));

console.log(cache.obtener("nombre"));
console.log(cache.obtener("edad"));
console.log(cache.obtener("ciudad"));
console.log(cache.obtener("pais"));

console.log(cache.existe("edad"));
console.log(cache.existe("ciudad"));
console.log(cache.existe("pais"));

console.log(cache.limpiar());
console.log(cache.existe("edad"));
console.log(cache.existe("ciudad"));

console.log("\n----------- Crear Temporizador -----------");

function crearTemporizador() {
  let segundos = 0; // contador de segundos
  let intervalo = null; // ID del setInterval (para poder detenerlo)
  let corriendo = false; // Estado: ?Esta corriendo ?

  return {
    iniciar() {
      if (!corriendo) {
        corriendo = true;
        intervalo = setInterval(() => {
          segundos++;
        }, 1000);
        return "Temporizador iniciado.";
      }
      return "El temporizador ya está corriendo.";
    },
    detener() {
      if (corriendo) {
        clearInterval(intervalo);
        corriendo = false;
        return "Temporizador detenido.";
      }
      return "El temporizador no está corriendo.";
    },
    reiniciar() {
      segundos = 0;
      return "Temporizador reiniciado.";
    },
    obtenerTiempo() {
      return segundos;
    },
  };
}
const t = crearTemporizador();
console.log("1. Iniciando");
t.iniciar();
console.log("2. Tiempo inmediato", t.obtenerTiempo());
setTimeout(() => {
  console.log("3. Tiempo a los 2 seg", t.obtenerTiempo());
}, 2000);
setTimeout(() => {
  console.log("4. Tiempo a los 4 seg", t.obtenerTiempo());
}, 5000);

console.log(t.obtenerTiempo());
// console .log(t.detener());
console.log(t.reiniciar());
console.log(t.obtenerTiempo());

console.log("\n----------- Crear Gestor Tareas -----------");

function crearGestorTareas() {
  let tareas = [];
  let idCounter = 0;

  return {
    agregarTarea(tarea) {
      let id = idCounter++;
      tareas.push({
        id,
        tarea,
        completada: false,
      });
      return `Tarea "${tarea}" agregada con ID ${idCounter}.`;
    },
    completarTarea(id) {
      const tarea = tareas.find((t) => t.id === id);
      if (tarea) {
        tarea.completada = true;
        return `Tarea ${id} marcada como completada.`;
      }
      return `Tarea con ID ${id} no encontrada.`;
    },
    obtenerTareas() {
      return tareas;
    },
    tareasPendientes() {
      return tareas.filter((t) => !t.completada);
    },
  };
}
const g = crearGestorTareas();
console.log(g.agregarTarea("Estudiar"));
console.log(g.agregarTarea("Limpieza"));
console.log(g.agregarTarea("Trabajar"));

console.log(g.completarTarea(2));
console.log(g.obtenerTareas());
console.log(g.tareasPendientes());


console.log("\n----------- Crear Banco -----------");

function crearBanco() {
  let cuentas = {};
  let idCounter = 1;

  return {
    crearCuenta(saldoInicial) {
      const id = idCounter++;
      cuentas[id] = crearCuentaBancaria(saldoInicial);   // se tiene que crear  antes de continuar
      return `Cuenta ${id} creada con saldo inicial $${saldoInicial}.`;
    },
    obtenerCuenta(id) {
      return cuentas[id] || null;
    },
    eliminarCuenta(id) {
      if (cuentas[id]) {
        delete cuentas[id];
        return `Cuenta ${id} eliminada.`;
      }
      return `Cuenta con ID ${id} no encontrada.`;
    },
  };
}

// se crea la funcion de crearCuentaBancaria donde estan los metodos
// depositar, retirar, obtenerSaldo
function crearCuentaBancaria(saldoInicial){
    let saldo = saldoInicial;
    return{
        depositar(cantidad){
            saldo += cantidad;
            return `Deposito de $${cantidad}. Saldo actual: $${saldo}`;
        },
        retirar(cantidad){
            if(cantidad > saldo){
                return `Fondos insuficientes. Saldo: $${saldo}`;
            }
            saldo -= cantidad;
            return `Retirado de $${cantidad}. Saldo actual: $${saldo}`;
        },
        consultarSaldo(){
            return `Saldo: $${saldo}`;
        }
    };
}
const b = crearBanco();
console.log(b.crearCuenta(1000));

const cuenta1 = b.obtenerCuenta(1);
console.log(cuenta1.consultarSaldo());
console.log(cuenta1.depositar(500));
console.log(cuenta1.retirar(200));

console.log(cuenta1.consultarSaldo());
console.log(b.eliminarCuenta(1));
console.log(b.obtenerCuenta(1));


module.exports = {
  crearCuentaBancaria,
  crearContador,
  crearAcumulador,
  crearCarrito,
  crearCache,
  crearTemporizador,
  crearGestorTareas,
  crearBanco,
};
