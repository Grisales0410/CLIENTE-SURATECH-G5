import {buscarMedicamentos} from "../services/serviciosMedicamento.js"

buscarMedicamentos()
.then(function(respuestaBack){
    console.log(respuestaBack)

let fila=document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada 
respuestaBack.forEach(function(medicamento){
    console.log(medicamento)
    //4. Se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //5. Se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

     
    let nombre=document.createElement("h2")
    nombre.textContent=medicamento.nombre

    let presentacion=document.createElement("h2")
    presentacion.textContent=medicamento.presentacion

    let dosis=document.createElement("h2")
    dosis.textContent=medicamento.dosis

    let laboratorio=document.createElement("h2")
    laboratorio.textContent=medicamento.laboratorio

    let fechaCaducidad=document.createElement("h2")
    fechaCaducidad.textContent=medicamento.fechaCaducidad

    let contraIndicaciones=document.createElement("h2")
    contraIndicaciones.textContent=medicamento.contraIndicaciones

    let registro=document.createElement("h2")
    registro.textContent=medicamento.registro

    let tieneCopago=document.createElement("h2")
    tieneCopago.textContent=medicamento.tieneCopago

   

    //Paso final (Ordenando las cartas)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(presentacion)
    tarjeta.appendChild(dosis)
    tarjeta.appendChild(laboratorio)
    tarjeta.appendChild(fechaCaducidad)
    tarjeta.appendChild(contraIndicaciones)
    tarjeta.appendChild(registro)
    tarjeta.appendChild(tieneCopago)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
});
});