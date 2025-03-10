// + - * /

const num1 = 1000
const num2 = 33

const operador = "+"

switch(operador) {

    case "+":
        // Lógica de mi código si se cumple el caso de que operador sea "+"\
        alert(num1 + num2)
        break;


    case "/":
        alert(num1 / num2)
        break;


    default:
        console.warn("El operador ingresado no es correcto")
}

const mesNacimiento = 1

switch(mesNacimiento) {
    case 1:
        console.log("Enero")
        break;
    case 2:
        console.log("Febrero")
        break;
    case 3:
        console.log("Marzo")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Mayo")
        break;
    case 6:
        console.log("Junio")
        break;
    case 7:
        console.log("Julio")
        break;
    case 8:
        console.log("Agosto")
        break;
    case 9:
        console.log("Septiembre")
        break;
    case 10:
        console.log("Octubre")
        break;
    case 11:
        console.log("Noviembre")
        break;
    case 12:
        console.log("Diciembre")
        break;
    default:
        console.warn("El mes ingresado no es válido")
}
