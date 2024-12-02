import { registrarMedico } from "../services/serviciosMedico.js"

let nombresMedico =document.getElementById("nombremedico")
let matriculaProfesionalMedico=document.getElementById("matriculamedico")
let especialidadMedico=document.getElementById("especialidadmedico")
let salarioMedico=document.getElementById("salariomedico")
let correoMedico=document.getElementById("correomedico")
let ipsMedico=document.getElementById("ipsmedico")
let telefonoMedico=document.getElementById("telefonomedico")
let direccionMedico=document.getElementById("direccionmedico")
let disponibleFinDeSemanaMedico=document.getElementById("disponibilidadmedico")

let botonRegistroMedico=document.getElementById("botonregistromedico")

botonRegistroMedico.addEventListener("click", function(evento){
    evento.preventDefault()

    let datosFormularioMedico={
        nombres : nombresMedico.value,
        matriculaProfesional : matriculaProfesionalMedico.value,
        especialidad : especialidadMedico.value,
        salario : salarioMedico.value,
        correo : correoMedico.value,
        ips : ipsMedico.value,
        telefono : telefonoMedico.value,
        direccion : direccionMedico.value,
        disponibleFinDeSemana : true
        
    }

    console.log(datosFormularioMedico)
    registrarMedico(datosFormularioMedico)
    .then(function(respuestaBack){
      console.log(respuestaBack)
      Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
    })
    })
        
    