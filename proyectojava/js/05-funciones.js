
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


function nombreCompleto(nombre,ap1,ap2){

console.log("Nombre Completo:",nombre+" "+ap1+" "+ap2),
console.log(nombre,ap1,ap2)
console.log(`${nombre} ${ap1} ${ap2}`)

}

nombreCompleto("Federico", "Garcia","Lorca");


let reproductor ={

reproducir:function(x){

console.log(`Reproduciendo cancion con ID: $(x)`)

},


pausar: function(){

    console.log(`Pausando cancion...`)
},

crearPlayList: function(nombre){

console.log(`Creando PlayList: $(nombre)`)

}


}

reproductor.reproducir(17);
reproductor.pausar();
reproductor.crearPlayList("chill");





reproductor.borrarCancion = 
function(id){

console.log(`Borrando la cancion con ID ${id}`)

}

reproductor.borrarCancion(33);

// arrow function
// pasos
// si hay mas de un parametro, vacio, o inicializado hay que ponerlo()
// el return va implicito en el cuerpo de la function, se puede omitir si va solo 
// si hay mas de una linea en el cierpo de la funcion hay que ponerlo


let triplicar = function(x){

return 3*x;

}

console.log(triplicar(6))

let triplicar2 = x => x*3
let cuboFlecha = (numero = 1) => numero*numero*numero;




let triplicarFlecha = (numero=1) => numero*numero*numero;

let valorTriplicado2 = triplicarFlecha(12);
console.log(valorTriplicado2);


// creamos nuevo arroy function, aprnediendo, que devuelva un numero +7 y lo almacene en una variable resultadoAprendiendo



let aprendiendo = numero => numero+7; 
let resultadoAprendiendo= aprendiendo(16)

console.log(resultadoAprendiendo)



let carrito = [

{

nombre:"TV",
precio: 750

},

{

nombre: "Tablet",
precio: 350

},
{

nombre: "Movil",
precio: 550
    

},
{

    nombre: "PC",
    precio: 1750
    

}

];


// some ideal para arreglo de objetos. Me busca ese valor dentro del array

let resultado;

resultado= carrito.some(function(producto){

    return producto.nombre === "Tablet"

});


console.log("Resultado de funcion some ideal", resultado);

// poner con arrow function

resultado = carrito.some(producto=>producto.nombre==="Tablet");
console.log("Resultado de funcion some ideal con funcion de flecha",resultado);


// como saber el total del carrito

resultado= carrito.reduce(function (total,producto){ // para itinerar total, producto: parametros de la funcion

return total+producto.precio
},0); //suma un valor al resultado simplemente

console.log("Uso de reduce con arrow function",resultado)

//poner con arrow function

resultado= carrito.reduce((total, producto)=> total+producto.precio,0);
console.log(resultado);


//filter para filtrar, en este caso, los precios mayores a 400
resultado= carrito.filter(function(producto){

return producto.precio > 400


});
console.log("Uso filter", resultado);


// crear una funcion que sume 3 numeros dados. Ponerla con Expresion, declaracion y como funcion de Flecha
// sumaExpresion
// sumaDeclaracion
// sumarFlecha
// y muestre resultados por console

function sumaDeclaracion(n1,n2,n3){

    console.log("sumaDeclaracion:", n1+n2+n3)

}

sumaDeclaracion(1,6,3)


let sumaExpresion = function(n1,n2,n3){

    console.log("sumaExpresion:", n1+n2+n3)

}

sumaExpresion(2,6,9)


let sumarFlecha=(n1,n2,n3) => console.log(n1+n2+n3);

sumarFlecha(4,6,2);



// crear una funcion que busque elementos de un array numeros
// ponerla como sumaExpresion, declaracion y como funcion de flecha 
// buscaExpresion
// buscaDeclaracion
// buscaFlecha

numeros=[10,20,30]

function buscaExpresion(array,x){
return array.includes(x)

}
console.log(buscaExpresion(numeros, 10))


let buscarDeclaracion= function(array,x){

    return array.includes(x)


}

console.log(buscarDeclaracion (numeros,80));


let buscarFlecha= (array,x)=> array.includes(x);
console.log(buscarFlecha(numeros,30));


// crear una funcion de flecha que dados 2 parametros me de 10 veces la suma de ambos


let sumarParametros= (n1,n2) => (n1+n2)*10;

console.log(sumarParametros(10,20))



// crear una funcion de flecha que dado dos parametros me indique el numero de caracteres de los dos



let funFlecha= (n1,n2)=> (n1.length+n2.length)

console.log(funFlecha("texto","palabra"))

function CaracteresDeclaracion(x,y){


}

//crear una funcion de flecha que quite el ultimo elemento del final 
//de un array nuevo que creemos cada vez que la llamemos

let quitarElemento = (arr)=> arr.pop();
let array = ["uno","dos","tres"];

quitarElemento(array)

console.log(array)


