
let variableA = "valor var A",
variebleB = "valor var B",
variableC = "valor var C";


let ejercicio6={


};

ejercicio6.variableA = variableA;
ejercicio6.variebleB = variebleB;
ejercicio6.variableC = variableC;

console.log(ejercicio6);


let numeros = [10,20,30,40,50];

console.log("mi primer array", numeros); 
console.table(numeros);
numeros.push(70);
numeros.unshift(-10,129020, -30);
console.log(numeros)

numeros.pop(); // me elimina el ultimo elemento del array
console.log(numeros)
 numeros.shift() // elimina el primer elemento
console.log(numeros)
console.table(numeros);
numeros.splice(2,3); //(Indice,valores a eliminar)
console.log(numeros)

const nuevoArreglo= [...numeros,1540];
console.table(nuevoArreglo); 


let estaciones = ["verano"];
estaciones.unshift("primavera")
estaciones.push("otoño","invierno")
console.table(estaciones);
console.log(estaciones);




const meses = new Array("Enero","Febrero","Marzo");
console.table(meses);

// para saber cuantos valores hemos creado
console.log(meses.length);

// para ver si un valor existe
let resultado;
resultado= meses.includes("Mayo");
console.log(resultado)

let diasemana = new Array("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo");

console.table(diasemana);


console.log(numeros[200]);


let finde = {
    prop1: "string",
    prop2: 3,
    prop4: true
}

finde.finsemana= ["S","D"]
console.log(finde);
let{prop1, prop2}= finde;



let carrito = [

    {
        nombre: "Nombre1",
        precio: 1

    },
    {
        nombre: "Nombre2",
        precio: 2

    },
    {
        nombre:"Nombre3",
        precio: 3

    },
    {
        nombre: "Nombre4",
        precio: 4

    },

]
console.table(carrito)



resultado = carrito.some(function(producto) {

    return producto.precio > 400


});

console.log("uso de filter", resultado);

// === Iguales
// == Iguales pero no exactamente 200="200"
// !== Diferentes
// < Menor que
// <= Menor o igual que
// > Mayor que
// >= Mayor o igual que


