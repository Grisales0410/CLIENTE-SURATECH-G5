import {registrarEnfermedad} from "../services/serviciosEnfermedad.js"
let nombreEnfermedad=document.getElementById("nombreenfermedad")
let sintomasEnfermedad=document.getElementById("sintomasenfermedad")
let clasificacionEnfermedad=document.getElementById("clasificacionenfermedad")
let gradoEnfermedad=document.getElementById("gradoenfermedad") 
let probabilidadVidaEnfermedad=document.getElementById("probabilidadvidaenfermedad")

let botonRegistroEnfermedad=document.getElementById("botonregistroenfermedad")

botonRegistroEnfermedad.addEventListener("click", function(evento){
    evento.preventDefault()

    let datosFormularioEnfermedad={
        nombre : nombreEnfermedad.value,
        sintomas : sintomasEnfermedad.value,
        clasificacion : clasificacionEnfermedad.value,
        grado : gradoEnfermedad.value,
        probabilidadVida : probabilidadVidaEnfermedad.value
        
        
    }

    console.log(datosFormularioEnfermedad)
    registrarEnfermedad(datosFormularioEnfermedad)
    .then(function(respuestaBack){
      console.log(respuestaBack)
      Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
    })

    })
        
    

