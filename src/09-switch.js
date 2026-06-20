// Switch

// switch ('expresion') {
//     case valor1:
//         //codigo...
//     break;
//     case valor2:
//         // codigo...
//         break
//     default:
//         // codigo
// }

const dia = "martes";

switch (dia) {
  case "lunes":
    console.log('Hoy es lunes...')
    break;
  case "martes":
  case "miercoles":
  case "jueves":
  case "viernes":
    console.log("Dia laboral");
    break;
  case "sabado":
  case "domingo":
    console.log("Fin de semana");
    break;
  default:
    console.log("Dia no valido");
}
