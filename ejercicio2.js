/******************************************************************************
 * Apellido:barrios
 * Nombre: horacio
 * Comisión: div f
 * Tutor: romina
 
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.


*******************************************************************************/
function mostrar(){
    let nombreMascota;
    let edadMascota;
    let tipoMascota;
    let pesoMascota;
    let diagnostico;
    let vacuna;
    let respuesta;
    let nombreEdadMaxima;
    let flagMascotaMasViejaconVacuna;
    let edadMaxima;
    let contadorSinVacunaConParasitos;
    let contadorPerroDigestivos;
    let contadorGatosDigestivos;
    let contadorHamstersDigestivos;
    let contadorPerrosOtitis;
    let mascotaMaximoIngresoDigestivo;
    let flagEdadMinima;
    let nombreEdadMinima;
    let edadMinima;
    let diagnosticoEdadMinima;

    flagMascotaMasViejaconVacuna = true;
    flagEdadMinima = true;
    contadorSinVacunaConParasitos = 0;
    contadorGatosDigestivos = 0;
    contadorPerroDigestivos = 0;
    contadorHamstersDigestivos = 0;
    contadorPerrosOtitis = 0;

    do{
        //obtenemos nombre
        nombreMascota = prompt("Ingrese nombre de mascota");

        //obtenemos edad de mascota y validamos
        edadMascota = prompt("ingrese edad de mascota de 1 a 20");
        edadMascota = parseInt(edadMascota);
        while(edadMascota <= 0 || edadMascota > 20){
            edadMascota = prompt("Edad Invalida! ingrese edad de mascota de 1 a 20");
            edadMascota = parseInt(edadMascota);
        }

        //obtenemos tipo de mascota y validamos - usamos if
        tipoMascota = prompt("ingrese tipo de mascota: 1)gato, 2)perro, 3)hamster");
        tipoMascota = parseInt(tipoMascota);
        while(tipoMascota <= 0 || tipoMascota > 3){
            tipoMascota = prompt("Incorrecto! ingrese tipo de mascota: 1)gato, 2)perro, 3)hamster");
            tipoMascota = parseInt(tipoMascota);
        }

        // obtenemos peso y vlidamos
        pesoMascota = prompt("ingrese peso de mascota ");
        pesoMascota = parseFloat(pesoMascota);
        while(pesoMascota <= 0 ){
            pesoMascota = prompt("Invalido! ingrese peso de mascota");
            pesoMascota = parseFloat(pesoMascota);
        }

        // obtenemos diagnostico y validamos - usamos switch
        diagnostico = prompt("Diagnostico: 1)Problemas digestivos, 2) Otitis, 3) Alergias en la piel, 4) Parasitos, 5) Picaduras");
        diagnostico = parseInt(diagnostico);
        while(diagnostico <= 0 || diagnostico > 5){
            diagnostico = prompt("Incorrecto! - Diagnostico: 1)Problemas digestivos, 2) Otitis, 3) Alergias en la piel, 4) Parasitos, 5) Picaduras");
            diagnostico = parseInt(diagnostico);
        }

        // obtenemos vacuna SI o NO
        vacuna = prompt("Esta vacunado? si o no");
        vacuna = vacuna.toLowerCase();
        while(vacuna != "si" && vacuna != "no"){
            vacuna = prompt("Esta vacunado? si o no");
            vacuna = vacuna.toLowerCase();
        }



        //segun el valor ingresado ,defino el tipo de mascota.
        if(tipoMascota == 1){
            tipoMascota = "Gato";
        }else{
            if(tipoMascota == 2){
                tipoMascota = "Perro";
            }else{
                tipoMascota = "Hamster";
            }
        }

        //uso un switch para cada caso de Diagnostico
        switch(diagnostico){
            case 1:
                diagnostico = "Problemas digestivos";
                if(tipoMascota == "Gato"){
                    contadorGatosDigestivos ++;
                }else{
                    if(tipoMascota == "Perro"){
                        contadorPerroDigestivos ++;
                    }else{
                        contadorHamstersDigestivos ++;
                    }
                }
                break;
            case 2:
                diagnostico = "Otitis";
                if(tipoMascota == "Perro"){
                    contadorPerrosOtitis ++;
                }
                break;
            case 3:
                diagnostico = "Alergias en la piel";
                break;
            case 4:
                diagnostico = "Parasitos";
                break;
            default:
                diagnostico = "Picaduras";
        }
        
        
        //EL MAXIMO
        //a) Nombre de la mascota más vieja con la vacuna antirrábica
        if(vacuna == "si"){
            if(flagMascotaMasViejaconVacuna == true){
                edadMaxima = edadMascota;
                nombreEdadMaxima = nombreMascota;
            }else{
                if(edadMascota > edadMaxima){
                    edadMascota = edadMascota;
                    nombreEdadMaxima = nombreMascota;
                }
            }
        }else{// entonces vacuna es "No"    /b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
            if(diagnostico == "Parasitos"){
                contadorSinVacunaConParasitos ++;
            }
        }

        // EL MINIMO
        //d) Nombre, edad y diagnóstico de la mascota más joven ingresada.  
        if(flagEdadMinima){
            edadMinima = edadMascota;
            nombreEdadMinima = nombreMascota;
            diagnosticoEdadMinima = diagnostico;
            flagEdadMinima = false;
        }else{
            if(edadMascota < edadMinima){
                edadMinima = edadMascota;
                diagnosticoEdadMinima = diagnostico;
                nombreEdadMinima = nombreMascota;
            }
        }
        

        respuesta = confirm("Desea seguir ingresando Datos?");
    }while(respuesta == true);

    
    //c) El tipo de mascota con más ingresos por problemas digestivos.
    if(contadorGatosDigestivos > contadorPerroDigestivos && contadorGatosDigestivos > contadorHamstersDigestivos){
        mascotaMaximoIngresoDigestivo = tipoMascota;
    }else{
        if(contadorPerroDigestivos > contadorGatosDigestivos && contadorPerroDigestivos > contadorHamstersDigestivos){
            mascotaMaximoIngresoDigestivo = tipoMascota;
        }else{
            if(contadorHamstersDigestivos > contadorGatosDigestivos && contadorHamstersDigestivos > contadorPerroDigestivos){
                mascotaMaximoIngresoDigestivo = tipoMascota;
            }else{
                mascotaMaximoIngresoDigestivo = "No hay un maximo";
            }
        }
        
    }

    //mustro resultados!
    document.write("Nombre de la mascota más vieja con la vacuna antirrábica: " + nombreEdadMaxima + "</br>"
    + "Cantidad de mascotas sin vacuna antirrábica y con parásitos: " + contadorSinVacunaConParasitos + "</br>"
    + "El tipo de mascota con más ingresos por problemas digestivos: " + mascotaMaximoIngresoDigestivo + "</br>"
    + "Nombre de la mascota mas joven: " + nombreEdadMinima + " su edad: " + edadMinima + " su diagnostico: " + diagnosticoEdadMinima + "</br>"
    + "Cantidad de perros ingresados por otitis: " + contadorPerrosOtitis );

    }//fin
    


