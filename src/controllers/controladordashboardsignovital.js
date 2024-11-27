import {buscarSignosVitales} from "../services/serviciosSignoVital.js"



buscarSignosVitales()
.then(function(respuestaBack){
    console.log(respuestaBack);


    let fila=document.getElementById("fila");
    
    //3. Se recorren los datos para obtenerlos de forma separada 
    respuestaBack.forEach(function(signoVital){
        console.log(signoVital)
        //4. Se crean columnas 
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //5. Se crean tarjetas 
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card", "p-5", "h-100", "shadow")
    
         
        let nombre=document.createElement("h2")
        nombre.textContent=signoVital.nombre
    
        let valor=document.createElement("h2")
        valor.textContent=signoVital.valor
    
        let fechaMedida=document.createElement("h2")
        fechaMedida.textContent=signoVital.fechaMedida
    
        //Paso final (Ordenando las cartas)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(valor)
        tarjeta.appendChild(fechaMedida)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })}).catch((error)=>{
        console.log(error);
    });

