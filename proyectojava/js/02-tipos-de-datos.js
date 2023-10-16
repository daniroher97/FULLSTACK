const producto1= "Juego de mesa EL PUEBLO DUERME";
const producto2= String("DOOBLE");
const producto3 = new String("UNO"); 

console.log ("producto1", producto1);
console.log("producto2", producto2);
console.log("producto3", producto3);

console.log ("producto1", typeof producto1);
console.log("producto2", typeof producto2);
console.log("producto3", typeof producto3);

let numero100 = false,
numero200 = "200";


console.log("numero100", typeof numero100);
console.log("numero200", typeof numero200);


console.log("metodo lenght", producto1.length);

console.log("metodo indexof", producto1.indexOf("PUEBLO"));

console.log("metodo includes", producto1.includes("PUEBLO"));


let ejstring1= "ejercicio primero string",
ejstring2 ="ejemplo de ejercicio",
ejstring3= "ejercicio string"

console.log("metodo lenght", ejstring1.length);

console.log("metodo indexof", ejstring2.indexOf("ejercicio"));

console.log("metodo includes", ejstring3.includes("ejercicio"));

let numero1= 100;
let numero2 = 200.25;
let numero3 = "200";
let numero4 = 2/3;

console.log("numero1+2", numero1+numero2);
console.log("numero1-2", numero1-numero2);
console.log("numero1*2", numero1*numero2);
console.log("numero1/2", numero1/numero2);
console.log("numero1%2", numero1%numero2);


let resultado = Math.random();

console.log("resultado", resultado);

let redondeo = Math.floor(Math.random()*10);

console.log("resultado", redondeo);


// Math.Pi para mostrar numero Pi
// Math.round(2.5); para redondear
// Math.ceil(2.1) redondea hacia arriba
// Math.floor(2.9); redondea hacia abajo
// Math.sqrt(144); raiz cuadrada
// Math.pow(x,2); eleva al cuadrado x;
// Math.abs(-200); muestra el valor absoluto;
// Math.min(2,3,1,0); me da el valor menor;
// Math.max(2,3,1,0); me da el valor mayor;

let aleatorio = Math.round(Math.random()*30);
console.log("aleatorio entre 0 y 30 entero", aleatorio);


let diametro= 5;
let area = Math.PI*Math.pow(diametro/2,2); 
console.log("area en funcion del diametro", area);


let areaRedondeo = Math.round(area);
console.log("Este es el numero redonbdeado con Mathround", areaRedondeo);


let unoseis = Math.round(Math.random()*5+1);
console.log("Para que salga un numero entero del 1 al 6", unoseis);


let resultadoOrden = 20+30*2;
console.log("multiplicacion antes que suma", resultadoOrden);

let resultadoOrden2 = (20+30)*2;
console.log("parentesis antes que multiplicacion", resultadoOrden2);



// calcular promocion del 40% descuento


// cantidad descontada

// let prenda1 = 120/40;
// let prenda2 = 85/40;
// let prenda3 = 24/40;

// console.log("descuento", prenda1);
// console.log("descuento", prenda2);
// console.log("descuento", prenda3);



// precio final

// let total1 = 120-prenda1;
// let total2 = 85-prenda2;
// let total3 = 24-prenda3;

// console.log("total", total1);
// console.log("total", total2);
// console.log("total", total3);




// calcular promocion del 40% descuento

let prenda1 = 120;
let prenda2 = 85;
let prenda3 = 24;
let descuento= 40;
let importe= prenda1+prenda2+prenda3; 
let ahorro= importe*descuento/100;
let total = importe-ahorro;

console.log("Precio sin descuento:", importe);
console.log("Descuento total", ahorro);
console.log("Precio final con descuento", total); 

let meGusta= 0;
meGusta++;

console.log("uso de incrementos, me gusta:", meGusta++);
console.log("uso de incrementos, me gusta2:", meGusta++);
console.log("uso de incrementos, me gusta:", ++meGusta);


const nombre= "Daniel";
const email= "daniroher97@gmail.com";

console.log("nombre+email:",nombre+email);
console.log("con espacio:", nombre+" "+email);


let nombreDR = "Daniel"
let emailDR = "daniroher97@gmail.com"

console.log("Este es el nombre",nombreDR);
console.log("Este es el correo", emailDR);

// Para llamar a variables dentro de comentarios
console.log(`Este es el nombre: ${nombreDR}`);


let boolean1= true;
let boolean2= false;
let boolean3= "true";

console.log("tipo de dato boolean1:", typeof boolean1);
console.log("tipo de dato boolean2:", typeof boolean2);
console.log("tipo de dato boolean3:", typeof boolean3);

let boolean4= new Boolean(true);
console.log("Tipo de dato boolean4:", typeof boolean4);


