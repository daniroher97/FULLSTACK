function obtenerzonas(){

    fetch("zonas.json") 
        .then(resultado =>{
            return resultado.json() 
        })
        .then(datos =>{
            const{zonas} = datos; 
            console.log(zonas);

            zonas.forEach(zonas => {
                console.log(zonas)
                console.log(zonas.id)
                console.log(zonas.zonas)
                console.log(zonas.ciudades)
                console.log(zonas.enlacezonas)
                console.log(zonas.enlacecursos)
            })

            zonas.forEach(zonas=> {
                const sectionZonas = document.querySelector(".zonas")
                const divZonas = document.createElement("DIV")
                const texto = document.createElement("P")
                const texto1 = document.createElement("P")
                const divEnlaces = document.createElement("DIV")
                const enlace= document.createElement("A")
                const enlace1= document.createElement("A")

            sectionZonas.appendChild(divZonas)
            divZonas.appendChild(texto)
            divZonas.appendChild(texto1)
            divZonas.appendChild(divEnlaces)
            divEnlaces.appendChild(enlace)
            divEnlaces.appendChild(enlace1)

            enlace.textContent = ("IR A LA PAGINA DE ESTA ZONA")
            enlace.href = (zonas.enlacezonas)
            enlace1.textContent = (zonas.enlacecursos)
            enlace1.href = "#"
            texto.textContent = (zonas.zonas)
            texto1.textContent = (zonas.ciudades)

            divEnlaces.classList.add("EstiloEnlaces")
            divZonas.classList.add("fichas")

            })


        })



}
obtenerzonas();

