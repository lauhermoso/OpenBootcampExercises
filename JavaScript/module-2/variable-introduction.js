var variable; // var afecta a todo el código
let variableLet; // solo afecta al bloque donde esté siendo declarado

// const constante;
const constante = "Hola soy una constante";
var a = 1;
console.log(a);

a = 4;
console.log(a);

console.log(constante);

let b = 3;
console.log(b);

b = 5;
console.log(b);

let variablelet = "Hola soy una variable let";
for (var i = 0; i > 3; i++) {
  let variable = "Soy la segunda variable";
}

console.log(variablelet);

////////

var num = 4;

console.log(typeof num);

num = "hola soy num";

console.log(typeof num);
