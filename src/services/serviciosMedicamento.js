//PASOS PARA CONNSTRUIR API CON JS 

export async function buscarMedicamentos(){
    //1. Se configura la url del servicio que se desea consumir (Pa´ onde vas mijo)
    const URL="http://localhost:8080/api/medicamento"

    //2.  Se configura la peticion del servicio a consumir (A que vas pa´ alla ome)
    let peticion={
        method:"GET"
    }

    //3. Consumir el api (Arranque pues mijo)
    let respuestaServidor = await fetch(URL, peticion);
    let medicamentos = await respuestaServidor.json();
    return medicamentos
}

export async function registrarMedicamento(datosMedicamento){
    const URL="http://localhost:8080/api/medicamento"
    let peticion = {
        method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosMedicamento)
    }
    let respuestaInicial = await fetch(URL,peticion);
    let respuestaFinal = await respuestaInicial.json();
    return respuestaFinal;
}