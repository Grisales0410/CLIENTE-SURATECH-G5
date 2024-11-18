let pacientes=[
    {
        id:890,
        nombres:"Emma Grisales",
        fechaNacimiento:"2006-10-04",
        ciudad:"Yarumal",
        correo:"julieta@gmail.com",
        telefono:"3202145050",
        ips:"Angostura",
        grupoIngresos:"A",
        tienePoliza:true,
        fechaAfiliacion:"2010-10-20"


    },
    {
        id:891,
        nombres:"Carlos Muñoz",
        fechaNacimiento:"2000-07-12",
        ciudad:"Medellín",
        correo:"carlosmunoz@gmail.com",
        telefono:"3123456789",
        ips:"Santa Mónica",
        grupoIngresos:"B",
        tienePoliza:true,
        fechaAfiliacion:"2015-03-15"
    },
    
    {
        id:892,
        nombres:"Laura Fernández",
        fechaNacimiento:"1995-03-25",
        ciudad:"Bogotá",
        correo:"laurafernandez@gmail.com",
        telefono:"3004567890",
        ips:"Salud Total",
        grupoIngresos:"C",
        tienePoliza:false,
        fechaAfiliacion:"2018-06-20"
    },
    
    {
        id:893,
        nombres:"Andrés López",
        fechaNacimiento:"1989-11-30",
        ciudad:"Cali",
        correo:"andreslopez@gmail.com",
        telefono:"3109876543",
        ips:"Viva Salud",
        grupoIngresos:"A",
        tienePoliza:true,
        fechaAfiliacion:"2012-09-12"
    }
    
]

//2. Crear una referencia a una etiqueta html donde vamos a renderizar
let fila=document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada 
pacientes.forEach(function(paciente){
    console.log(paciente)
    //4. Se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //5. Se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    //6. Se crea una etiqueta para poner el nombre del paciente 
    let nombre=document.createElement("h2")
    nombre.textContent=paciente.nombres

    let fechaNacimiento=document.createElement("h2")
    fechaNacimiento.textContent=paciente.fechaNacimiento

    let ciudad=document.createElement("h2")
    ciudad.textContent=paciente.ciudad

    let correo=document.createElement("h2")
    correo.textContent=paciente.correo

    let telefono=document.createElement("h2")
    telefono.textContent=paciente.telefono

    let ips=document.createElement("h2")
    ips.textContent=paciente.ips

    let grupoIngresos=document.createElement("h2")
    grupoIngresos.textContent=paciente.grupoIngresos

    let tienePoliza=document.createElement("h2")
    tienePoliza.textContent=paciente.tienePoliza

    let fechaAfiliacion=document.createElement("h2")
    fechaAfiliacion.textContent=paciente.fechaAfiliacion

    




    //Paso final (Ordenando las cartas)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(fechaNacimiento)
    tarjeta.appendChild(ciudad)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(ips)
    tarjeta.appendChild(grupoIngresos)
    tarjeta.appendChild(tienePoliza)
    tarjeta.appendChild(fechaAfiliacion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    

    
   

   
    
   

   

    
   
    
})

