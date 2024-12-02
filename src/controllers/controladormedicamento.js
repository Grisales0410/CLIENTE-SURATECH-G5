import {registrarMedicamento} from "../services/serviciosMedicamento.js"
let nombreMedicamento=document.getElementById("nombremedicamento")
let presentacionMedicamento=document.getElementById("presentacionmedicamento")
let dosisMedicamento=document.getElementById("dosismedicamento")
let fechaCaducidadMedicamento=document.getElementById("caducidadmedicamento")
let laboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let contraIndicacionesMedicamento=document.getElementById("contraindicacionesmedicamento")
let registroMedicamento=document.getElementById("registromedicamento")
let tieneCopagoMedicamento=document.getElementById("copagomedicamento")

let botonRegistroMedicamento=document.getElementById("botonregistromedicamento")

botonRegistroMedicamento.addEventListener("click", function(evento){
    evento.preventDefault();

    let datosFormularioMedicamento={
        nombre : nombreMedicamento.value,
        presentacion : presentacionMedicamento.value,
        dosis : dosisMedicamento.value,
        fechaCaducidad : fechaCaducidadMedicamento.value,
        laboratorio : laboratorioMedicamento.value,
        contraIndicaciones : contraIndicacionesMedicamento.value,
        registro : registroMedicamento.value,
        tieneCopago : true
        
        
    }

  console.log(datosFormularioMedicamento)
  registrarMedicamento(datosFormularioMedicamento)
  .then(function(respuestaBack){
    console.log(respuestaBack)
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
    });
  });