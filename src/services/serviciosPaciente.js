//PASOS PARA CONNSTRUIR API CON JS 

export async function buscarPacientes(){
    //1. Se configura la url del servicio que se desea consumir (Pa´ onde vas mijo)
    const URL="http://localhost:8080/api/paciente"

    //2.  Se configura la peticion del servicio a consumir (A que vas pa´ alla ome)
    let peticion={
        method:"GET"
    }

    //3. Consumir el api (Arranque pues mijo)
    let respuestaServidor = await fetch(URL, peticion)
    let pacientes = await respuestaServidor.json()
    return pacientes
}

export async function registrarPaciente(datosPaciente){
    const URL="http://localhost:8080/api/paciente"
    let peticion = {
        method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosPaciente)
    }
    let respuestaInicial = await fetch(URL,peticion);
    let respuestaFinal = await respuestaInicial.json();
    return respuestaFinal;
}
 


