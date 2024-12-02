import {buscarEnfermedad} from "../services/serviciosEnfermedad.js"

buscarEnfermedad()
.then(function(respuestaBack){
    console.log(respuestaBack)

    
    let fila=document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada 
respuestaBack.forEach(function(enfermedades){
    console.log(enfermedades)
    //4. Se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //5. Se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

     
    let nombre=document.createElement("h2")
    nombre.textContent=enfermedades.nombre

    let sintomas=document.createElement("h2")
    sintomas.textContent=enfermedades.sintomas

    let clasificacion=document.createElement("h2")
    clasificacion.textContent=enfermedades.clasificacion

    let grado=document.createElement("h2")
    grado.textContent=enfermedades.grado

    let probabilidadVida=document.createElement("h2")
    probabilidadVida.textContent=enfermedades.probabilidadVida

    //Paso final (Ordenando las cartas)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(sintomas)
    tarjeta.appendChild(clasificacion)
    tarjeta.appendChild(grado)
    tarjeta.appendChild(probabilidadVida)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
})