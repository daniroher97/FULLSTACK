// COMPRADORES/CONDICIONALES

// IF 
// SWITCH

let numeroDR="900";
if(numeroDR===900){

console.log("tu numero es 900")

}

else{

console.log("tu numero no es 900")

}


//crear una estructura de control que compruebe si el pin es correcto
let pincorrecto=1234;
if(pincorrecto===1234){

console.log("tu pin es correcto")

}

else{

console.log("tu pin es incorrecto")

}

// crear un aestructura de control que compruebe si yo puedo retirar el dinero
//crear variable saldo

let saldo=100
if(saldo<=200){

console.log("puedes retirar el dinero")

}

else{

console.log("no puedes retirar el dinero")

}


let saldoDR=200;
let pinDR=1234;
let importeRetirar=1100
let pinIntroducido=1234;

if(pinIntroducido===pinDR){
    console.log("pin ok");

    if(importeRetirar<=saldoDR){
        console.log("saldo suficiente")

    }else{
        console.log("Saldo insuficiente")

    }
}else{

console.log("Pin incorrecto")

}

// crear una funcion que reciba un pin y cantidad

function cajero(pin, cantidad){



    if(pin===pinDR){
        console.log("pin ok");
    
        if(cantidad<=saldoDR){
            console.log("saldo suficiente")
    
        }else{
            console.log("Saldo insuficiente")
    
        }
    }else{
    
    console.log("Pin incorrecto")
    
    }

}

cajero(1234, 20)

let rol="editor"

if (rol==="admin"){

console.log("eres admin")

}else if(rol==="editor"){

console.log("Eres editor")

}else if(rol==="gestor"){

};




// crear una estructura de control que compare en que estacion del año eestamos ´
//y me diga cual es la siguiente. PRIMAVERA-verano-otoño-invierno

let estacionActual="otoño";

if(estacionActual==="otoño"){

    console.log("estamos en Otoño. La siguiente estacion es: Invierno")
    
    }else if(estacionActual==="invierno"){

            console.log("estamos en invierno. La siguiente estacion es: Primavera")
    
    }else if(estacionActual==="primavera"){

        console.log("estamos en primavera. La siguiente estacion es: Verano")

    }else if(estacionActual==="verano"){

    console.log("estamos en verano. La siguiente estacion es: Otoño")

}else{

    console.log("Lo que has introducido no es una estacion")

}

//crear una estructura de control que me diga si la nota de un examen 
//es sobresaliente 9-10 
//notable 7-8
//suficiente 5-6
//suspenso -5

//creamos una variable nueva que se llame notaExamen

let notaExamen=7 ;

if(notaExamen>=9 && notaExamen<=10){

    console.log("Sobresaliente")
    
    }else if(notaExamen>=7 && notaExamen<9){

            console.log("Notable")
    
    }else if(notaExamen>=6 && notaExamen<7){

        console.log("Suficiente")

    }else if(notaExamen<=4){

    console.log("Suspenso")

}


//uso de switch, para hacer múltiples comparaciones y optimizar el uso de tanto else if

let metodoPago= "Tarjeta";

switch(metodoPago){

    case "Tarjeta": console.log("Pagaste con tarjeta")
    break; 

    case "Bizum": console.log("El cliente pago con bizum")
    break;

    case "Efectivo": console.log("El cliente pago en efectivo")
    break;

    default: console.log("Pendiente de pago") 
}

//crear una estructura de control que me compare si un numero al 
//multiplicarlo por si mismo es menor que 100. Si es menor que 200, y si no cumple las anteriores

let menorque= 5



    if(menorque*menorque<100){
        
        console.log("El numero multiplicado por si mismo es menor que 100")
    
    }else if (menorque*menorque<200) {console.log("El numero multiplicado por si mismo es menor que 200")
    
}else{
console.log("El numero multiplicado por si mismo es mayor o igual que 200")

}

function multiplo(x){

    if(x*x<100){
        
        console.log("El numero multiplicado por si mismo es menor que 100")
    
    }else if (x*x<200) {console.log("El numero multiplicado por si mismo es menor que 200")
    
}else{
console.log("El numero multiplicado por si mismo es mayor o igual que 200")

}

}

multiplo(5)


//crear una estructura de control con switch que me compare si
//un numero + 10 es:
//coger el numero desde el prompt
// =9
// =12
// =15
// =100
// resto de posibilidades

let numeromas10= parseInt(prompt("Escribe aqui tu numero","Tu numero"));

switch(numeromas10+10){

    case 9: console.log("Es igual a 9");
    break;
    
    case 12: console.log("Es igual a 12");
    break;

    case 15: console.log("Es igual a 15");
    break;

    case 100: console.log("Es igual a 100");
    break;

    default: console.log("Ninguno de los anteriores");
    break;
}

