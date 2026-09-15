// Scope

const global = "Soy Global";

function ejemplo(){
    const funcVariable = "Soy de funcion";

    if (true) {
        const bloque = "Soy de bloque";
        console.log(`funcion: ${funcVariable}`);
        console.log(`Bloque: ${bloque}`);
        console.log(`Global: ${global}`);
    }
    console.log(`funcion: ${funcVariable}`);
    // console.log(`Bloque: ${bloque}`);
    console.log(`Global: ${global}`);

}
console.log(global);
console.log(ejemplo());