// Estoy armando un sistema para definir quien puede ingresar al cine a ver una pelicula segun su edad
// Si la persona tiene 12 años o más puede ingresar, caso contrario no puede ingresar

// const edadCliente = prompt("Ingrese la edad del cliente");
// const edadMinPermitida = 12;

// if( edadCliente >= edadMinPermitida ) {
//     // Si la condición que estoy evaluando se cumple, voy a ejecutar este código que está dentro de las llaves
//     console.log("La persona puede ingresar al cine")
// } else {
//     // Si la condición que estoy evaluando NO se cumple, voy a ejecutar este código que está dentro de las llaves
//     console.warn("La persona NO puede ingresar al cine")
// }

// console.log("Fin del script")

// # Ejercicio 9 del TP1 JS - FALTA TERMINAR DE COMPLETAR
// Transformar un valor string a un valor numérico
// parseInt(valor) -> Convierte el valor a un número entero
// parseFloat(valor) -> Convierte el valor a un número decimal
// Number(valor) -> Convierte el valor a un número
// +valor -> Convierte el valor a un número

// let num1 = prompt("Ingrese el primer número");

// num1 = parseInt(num1);

// const num2 = parseFloat( prompt("Ingrese el segundo número") );

// const operador = prompt("Ingrese un operador matemático (+, -, /, *)");

// if (operador === "*") {

//   alert(num1 * num2);

// } else if (operador === "+") {

//   alert(num1 + num2);

// } else {
//     alert("Operador no válido");
// }

// console.log("Fin del script");

// # Necesito saber si para un usuario que esta logueado en mi web, puedo mostrarle un contenido exclusivo que solo veran los administradores y el resto de los usuarios no lo veran

const user = {
  name: "Pepito",
  email: "pepito@gmail.com",
  age: 30,
  role: "admin",
  vip: false,
};

if (user.role === "admin" || user.role === "superadmin") {
  console.log("El usuario es admin");
  document.write("<button>Administrar Productos</button>");
  document.write("<button>Administrar Usuarios</button>");
  alert("Tienes activados los superpoderes");
} else {
  console.log("No tienes superpoderes");
}

const score = 1200;

// Necesito determinar 2 condiciones que ambas deben cumplirse para que el usuario reciba un regalo
// 1. El usuario debe tener 1000 puntos o más
// 2. El usuario debe ser VIP

if (score >= 1000 && user.vip) {
  console.log("Tienes 50 puntos de regalo");
}

// quien puede editar un comentario
// condicion1: el usuario es el dueño del comentario
// condicion2: el usuario es admin

if (condicion1 || condicion2) {
  console.log("Puedes editar el comentario");
}
