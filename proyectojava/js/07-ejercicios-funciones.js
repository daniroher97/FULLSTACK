

// *******************
//     COMIENZO CLASE 2023/10/23
// *******************



// !!!!!!!!!!!!!
// REPASO ULTIMO DÍA


// for(let i=0; i<10; i++)             ///////FOR
// {
//     console.log(i)
// }



// let i=0;                            ///////WHILE
// while(i<10){
//     console.log(i);
//     i++;
// }


// let i=0;                            ////////DO WHILE
// do{
//     console.log(i);
//     i++;
// }while(i<10)


// función que invierta una cadena.
// F: INVERTIR
// P: CADENA

function invertir(cad) {
    let nuevaCadena = "";
    for (let i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;
}
console.log(invertir("hola"));


// función que concatene dos cadenas.
// F: CONCATENAR
// P: CADENA1, CADENA2 


function CONCATENAR(cad1, cad2){

console.log(cad1+cad2)}

CONCATENAR("hola","que tal")

// función que determine si una cadena contiene una letra.
// F: CONTIENE
// P: CADENA, LETRA


function contiene(cadena,letra){

    console.log(cadena.includes(letra))

}

contiene("funcion que determine si una cadena contiene una letra","letra");


// función que encuentre el número más grande en un array.
// F: MAXNUM
// P: ARRAY

let num=[1,2,3,4,5,6,7,8,9,10];

function maxnum(num){

console.log(Math.max(...num));
}

maxnum(num)
// función que encuentre el número más pequeño en un array.
// F: MINNUM
// P: ARRAY


function minum(num){ 

console.log(Math.min(...num));
}

minum(num)

// función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
// F: NUMBOOLEANOS
// P: ARRAY, VALOR





// función que determine si todos los elementos de un array son números.
// F: ARRAYNUMEROS
// P: ARRAY

let arrayNum=[1,100,30,2]

function ARRAYNUMEROS(array){

let comprobacion=[];
for(i=0;i<array.length;i++){

if(typeof array[i]==="number"){

comprobacion.push(array[i])

    } 

}
if(arrayNum.length==comprobacion.length){
console.log("Todos son numeros")

}else{

console.log("No son todos numeros")

}

}

ARRAYNUMEROS(arrayNum)

// función que genere un número aleatorio entre N1 y N2.
// F: NUMALEATORIO
// P: N1,N2
let n1= 20
let n2= 30

        let NUMALEATORIO= Math.floor(Math.random()*(n2-n1)+n1)

        console.log(NUMALEATORIO)

//otra forma

function NUMALEATORIO1(n1,n2){

console.log(Math.floor(Math.random()*(n2-n1)+n1))

}

NUMALEATORIO1(20,30)



// función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
// F: AREATRIAGULO
// P: BASE,ALTURA

function AreaTriangulo(base, altura){

    console.log(AreaTriangulo=base*altura/2)

}

AreaTriangulo(12,23)
   
// función que convierta grados Celsius a Fahrenheit.
// F: GRADOS
// P: CELSIUS

function grados(Celsius){

console.log((grados=Celsius*9/5)+32)
}
grados(5)

// función que determine si un año es bisiesto.
// F: BISIESTO
// P: DIAS

function bisiesto(dias){

    if(dias===366){
        
        console.log("El año es bisiesto")
    
   
    
}else{
console.log("El año no es bisiesto")

}

}

bisiesto(366)



// función que cuente la cantidad de vocales en una cadena.
// F: VOCALES
// P: TEXTO


let contadorVocales=0;
function vocales(texto){

for(let i=0;i<texto.length;i++){
    if(texto[i]==="a" ){

        contadorVocales++;
    }
    if(texto[i]==="e"){

        contadorVocales++;
    }
    if(texto[i]==="i"){

        contadorVocales++;
    }
    if(texto[i]==="o"){

        contadorVocales++;
    }
    if(texto[i]==="u"){

        contadorVocales++;
    }
}

console.log(contadorVocales);

}
vocales("función que cuente la cantidad de vocales en una cadena.")

// función que cuente la cantidad de palabras en una cadena.
// F: PALABRAS
// P: TEXTO

function palabras(texto){


let contador=0;

for(let i=0;i<=texto.length;i++){

if(texto[i]===" "){
   contador++
}

}
console.log(contador+1);

}

palabras("buenos dias que tal")


// función que elimine los elementos duplicados de un array.
// F: ELIMINADUPLICADOS
// P: ARRAY



// función que ordene un array de números de forma ascendente.
// F: ORDENARARRAY
// P: ARRAY

let arraySinOrdenar=[1,4,3,7,9,5];


function ORDENARARRAY(array){
let arrayOrdenado=array.sort(function(a,b){return a-b});
return arrayOrdenado

}

console.log(ORDENARARRAY(arraySinOrdenar));

// función que muestre la tabla de multiplicar de un numero.
// F: TABLAMULTIPLICAR
// A: NUMERO

function TABLAMULTIPLICAR(numero){

    for(let i=0;i<=10;i++){

        let tablanumero =numero*i;
        }
console.log(`${numero} x ${i} = ${tablanumero}`);

}



// función que tome un número del 1 al 12 y devuelva el nombre del mes 
// correspondiente utilizando una declaración switch
// F: NOMBREMES
// P: NUMMES
function NOMBREMES(nummes){

switch(nummes){

case 1: console.log("Enero")
break;

case 2: console.log("Febrero")
break;

case 3: console.log("Marzo")
break;

case 4: console.log("Abril")
break;
case 5: console.log("Mayo")
break;
case 6: console.log("Junio")
break;
case 7: console.log("Julio")
break;
case 8: console.log("Agosto")
break;
case 9: console.log("Septiembre")
break;
case 10: console.log("Octubre")
break;
case 11: console.log("Noviembre")
break;
case 12: console.log("Diciembre")
break;

default:
    console.log("numero no valido")
break;

}
}

NOMBREMES(3)

// función que determine si una contraseña es segura basándose en 
// longitud>8, 
// mayúsculas y minusculas
// números
// F: CONTRASEÑASEGURA
// P: CONTRASEÑA

function CONTRASEÑASEGURA(contraseña){

if(contraseña.length>7&&
    /[A-Z]/.test(contraseña)&&
    /[a-z]/.test(contraseña)&&
    /\d/.test(contraseña)){

console.log("La contrseña es segura")

}else{
console.log("La contraseña no es segura")

}

}

CONTRASEÑASEGURA("Holaestoescontra67");


// función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
// F: REEMPLAZAR
// P: LETRA1, LETRA2
