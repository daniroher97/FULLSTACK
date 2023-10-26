


const numero1=20;
const numero3= 40;

console.log(numero1);

try{

console.log(numero2)

} catch (error){

console.log("tienes un error en console.log numero2")

}

console.log(numero3);


const autenticado= true;

const usuarioAutenticado= new Promise((resolve,reject)=>{

if (autenticado) {
resolve("usuario Autenticado");
} else {

    reject("No se pudo iniciar sesion");

}
});

console.log(usuarioAutenticado);





usuarioAutenticado
.then(function(resultado){

    console.log(resultado)
})

.catch(function(resultado){

    console.log(resultado)
})

console.log(usuarioAutenticado);


// creamos en el html un id "boton"

// const boton = document.querySelector("#boton");


// boton.addEventListener("click", function () {

//     console.log("DISTE CLICK");

//     Notification.requestPermission() // YA ES UNA PROMISA
//         .then(resultado => console.log(`El resultado es ${resultado}`)); // SOLICITAR PERMISO DE NOTIFICACIONES

// })

// if(Notification.permission == "granted"){

//     new Notification("Eres el mejor", {
//         icon: "centro.png",
//         body: "Eres el mas guapo"
//     })

// }


setTimeout(function (){

console.log("Set time out actuando")

}, 3000) //milisegundos, es decir 3 sec

// setInterval(function(){

 // console.log("Set interval actuando")
 // }, 4000)


function descargarNuevosClientes() { //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO, PARA FACILITAR EL EJEMPLO
    return new Promise(resolve => {
        console.log("Descargando clientes... espere...")

        setTimeout(() => { //PARA SIMULAR LA DESCARGA DE LA BASE DE DATOS
            resolve("Los Clientes fueron descargados")
        }, 5000)
    });
}

//HEMOS CREADO UN PROMISE, COMO HACEMOS USO DEL ASYN/AWAIT?

async function app() { // FUNCIÓN QUE ES ASÍNCRONA
    const resultadoAsync = await descargarNuevosClientes(); //ESPERAMOS A QUE descargarNuevosClienets HAYA FINALIZADO
    console.log(resultadoAsync) 
    console.log("ESTE CODIGO SI ESPERA")
   
} //ESTE CODIGO SE EJECUTA EN SEGUNDO PLANO Y NO PARALIZA AL RESTO
// PUESTO QUE ESTA ES UNA CONSULTA CRITICA, SERÍA RECOMENDABLE INCLUIRLO
//DENTRO DE UN TRY CATCH

app();
console.log("Este codigo no espera")

//que a los 3 sec me de una respuesta de que los pedidos han sido descargados


 function descargarPedidos(){ 
    return new Promise((resolve)=> {
        console.log("Descargando pedidos... espere...")

        setTimeout(() => { 
            resolve("Los pedidos fueron descargados")
        }, 3000)
    });
}

console.log(descargarPedidos())

