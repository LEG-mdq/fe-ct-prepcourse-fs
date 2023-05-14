/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   var valores;
   valores = x+y;
   return valores;
   // Retorna el resultado de su suma.
   // Tu código:
}
var resultado;
resultado = suma (5,5)

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var valores;
   valores = x-y;
   return valores;
} var resultado;
resultado = resta (7,4)

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var valor;
   valor = x/y;
   return valor;
} var resultado;
resultado = divide (6,3)

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var valor;
   valor = x*y;
   return valor;
}
var resultado;
resultado = multiplica (4,4)

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var valor;
   valor = x % y;
   return valor;
} var resultado;
   resultado = obtenerResto (25,4)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
