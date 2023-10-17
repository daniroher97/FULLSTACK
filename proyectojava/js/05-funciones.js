
sumar(10,20);

function sumar(n1,n2){

console.log(n1+n2);

}

const sumar2 = function(n1,n2){

console.log()

}

sumar2(3,9);

// IIFE

(function() {
console.log("Esto es una funcion")
})();


const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); // parseInt Es una funcion
console.log(numero1.toString()); // .toString Es un metodo





function color(x){

console.log(`El color elegido es ${x}`); //El color elegido es verde
console.log("El color elegido es",x); //El color elegido es verde 

}

color("verde");
color("rojo");

// crear una funcion que reciba como argumentos importe, descuento
// y me muestre por pantalla el descuento total y el precio finall
// llamar varias veces a la funcion con distintos valores

function precioFinal (importe,descuento){

    console.log(`Descuento es de: ${(importe*descuento)/100}`)
    console.log(`Descuento es de: ${((importe-(importe*descuento)/100))}`)
 
}

precioFinal(100,200)

//crear funcion que cuente los caracteres de un tweet


function tweet (text){

    console.log("El numero de caracteres es:", text.length)

}


tweet("El texto tiene x letras");

// crear una funcion que dado un texto y una palabra, me diga si la palabra esta contenida en el texto.


function buscar(texto, palabra){

console.log(texto.includes(palabra))

}

buscar("crear una funcion que dado un texto y una palabra, me diga si la palabra esta contenida en el texto", "palabra");



// crear una funcion que añada un elemento al final a un array previamente definido
// mostrarlo por consola 
// recibe como argumento de entrada el elemento
// la funcion se llamara añadir


let moviles= ["samsung", "iphone"];


function añadir(k){

moviles.push(k)

};

añadir("hwawei");

console.log(moviles)



// crear una funcion que me reste dos valores dados


function restar(n1,n2){

console.log(n1-n2);

}

restar(10,2);

