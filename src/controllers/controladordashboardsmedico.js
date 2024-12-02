import {buscarMedicos} from "../services/serviciosMedico.js"


buscarMedicos()
.then(function(respuestaBack){
    console.log(respuestaBack)

let fila=document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada 
respuestaBack.forEach(function(medico){
    console.log(medico)
    //4. Se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //5. Se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

     
    let nombres=document.createElement("h2")
    nombres.textContent=medico.nombres

    let matriculaProfesional=document.createElement("h2")
    matriculaProfesional.textContent=medico.matriculaProfesional

    let especialidad=document.createElement("h2")
    especialidad.textContent=medico.especialidad

    let salario=document.createElement("h2")
    salario.textContent=medico.salario

    let ips=document.createElement("h2")
    ips.textContent=medico.ips

    let correo=document.createElement("h2")
    correo.textContent=medico.correo

    let telefono=document.createElement("h2")
    telefono.textContent=medico.telefono

    let direccion=document.createElement("h2")
    direccion.textContent=medico.direccion

    let disponibleFinDeSemana=document.createElement("h2")
    disponibleFinDeSemana.textContent=medico.disponibleFinDeSemana

    //Paso final (Ordenando las cartas)
    tarjeta.appendChild(nombres)
    tarjeta.appendChild(matriculaProfesional)
    tarjeta.appendChild(especialidad)
    tarjeta.appendChild(salario)
    tarjeta.appendChild(ips)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(direccion)
    tarjeta.appendChild(disponibleFinDeSemana)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
});
});