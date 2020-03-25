// module.exports = {
//     // Esto es un modulo que esta exportando funciones
//     sumar: function(a,b) {
//         return a + b;
//     },
//     restar: function(a,b) {
//         return a - b;
//     },
//     multiplicar: function(a,b) {
//         return a * b;
//     },
//     dividir: function(a,b) {
//         return a / b;
//     }
// }


// otra forma de realizar el module.exports
const suma = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;

module.exports = {
    suma,
    restar,
    multiplicar,
    dividir
}