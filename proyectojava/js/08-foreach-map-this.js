

// FOREACH Y MAP. MÉTODOS EXCLUSIVOS PARA ARREGLOS
// METODOS DE UN ARRAY
// SOLO SE PUEDEN EJECUTAR EN ARREGLOS, UNA VEZ POR CADA ELEMENTO
// DEL ARRAY
// PARTIMOS DEL ARRAY CARRITO


let carrito = [
    {
        nombre: "TV",
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



carrito.forEach(function (producto) {
    console.log(producto, producto.nombre);
})
/*
!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
PASAR A FUNCIÓN DE FLECHA EL FOREACH ANTERIOR
*/
carrito.forEach(producto => console.log(producto,producto.nombre));

/* MAP
ES IGUAL QUE EL FOREACH, LA DIFERENCIA ES QUE
MAP SE USA PARA CREAR NUEVOS ARRAY Y EL FOREACH
PARA MOSTRAR POR PANTALLA
*/

const arrayMap = carrito.map(producto => producto.nombre);

console.log(arrayMap);


/*
THIS
!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJETO QUE SE LLAME RESERVA
CON PROPIEDADES (NOMBRE, APELLIDO, TOTAL, PAGADO)
Y LE DAIS VALORES
MEDIANTE LA SINTAXIS DE PUNTO MOSTRAR EL NOMBRE
*/




const reserva = {
    nombre : "Daniel",
    apellido : "Rodenas",
    total: 300,
    pagado: true
}

console.log (reserva.nombre)

/*
LOS OBJETOS TAMBIEN PUEDEN TENER FUNCIONES EN SU INTERIOR
*/

reserva.informacion=function(){
    return(`El cliente ${this.nombre} reservó
y su cantidad a pagar es de ${this.total}€`
// console.log("El cliente",this.nombre,"tiene que pagar",this.total
)};

console.log(reserva.informacion());

// SI NOS DAMOS CUENTA APARECE QUE NO ESTÁ DEFINIDO, PODEMOS HACER USO
// DE LA SINTAXIS DE PUNTO, O THIS

// reserva.informacion=function(){console.log(`El cliente ${this.nombrenombre} reservó
// y su cantidad a pagar es de ${this.total}`)};

// console.log(reserva.informacion());

// THIS HACE REFERENCIA A LOS MISMOS VALORES DEL OBJETO QUE SE ESTA LLAMANDO
// EL ARROW FUNCTION ME HACE REFERENCIA A LA VENTANA GLOBAL, DEBERIAMOS PONER
// WINDOW.NOMBRE = "NOMBRE VENTANA GLOBAL" 

/*
!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJETO LLAMADO FECHA
CON PROPIEDADES, AÑO, MES, DÍA, FALTANTES
CON UNA FUNCIÓN EN SU INTERIOR QUE ME DIGA 
CUANTOS DÍAS QUEDAN PARA ACABAR EL MES SI 
OCTUBRE TIENE 31 DÍAS
*/

const fecha = {
    año: 2023,
    mes: 10,
    dia: 24,
    faltante: function() {
        return(`Hoy es ${this.dia}/${this.mes}/${this.año}. 
        Faltan ${31 - this.dia} dias para terminar el mes.`);
    }
}
console.log(fecha.faltante());
