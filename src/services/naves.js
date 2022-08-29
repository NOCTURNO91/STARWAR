//consumiendo apis

//1.para donde voy

const URI='https://swapi.dev/api/starships/'

// configurar la peticion

const PETICION={
    method: "GET"
         
}

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta.results)

    let tabla = document.getElementById('tabla')

    respuesta.results.forEach(function(nave){

        let fila = document.createElement('tr')

        let nombre=document.createElement("h3")
        nombre.textContent= nave.name

        let modelo=document.createElement("td")
        modelo.textContent= nave.model

        let piloto=document.createElement("td")
        piloto.textContent= nave.starship_class

        fila.appendChild(nombre)
        fila.appendChild(modelo)
        fila.appendChild(piloto)
        tabla.appendChild(fila)

    })
})
 .catch(function(respuesta){
    console.log(respuesta)
})    
