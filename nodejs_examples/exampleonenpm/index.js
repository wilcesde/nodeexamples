//Require

//const operacion = require("./operMatematicas");
const {suma, resta, multiplica, divide} = require('./operMatematicas');  //otra forma

const saludar = require("./saludos");
const hi = require("./saludos/hola");

//usar las funciones
// console.log(operacion.sumar(7,4));
// console.log(operacion.multiplicar(5,8));
// console.log(operacion.dividir(100,5));
console.log(suma(2,7));

console.log(saludar.saludo("Maria"));

console.log(hi.diHola("Jesus"));

//Se ejecuta con Ctrl + F5

//Ejercicio: crear sus propios ficheros y exportarlos