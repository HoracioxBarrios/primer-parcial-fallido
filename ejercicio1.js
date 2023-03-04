/*
Ejercicio 1:

Apellido: Barrios
Nombre: Horacio
Comisión: Div f
Tutor: Romina

"UTN Software Factory está en la búsqueda de programadores para incorporar a su equipo de trabajo.
En las próximas semanas se realizará un exhaustivo proceso de selección. Para ello se ingresarán los siguientes 
datos de los postulantes para luego establecer distintas métricas necesarias para tomar decisiones a la hora de 
la selección:
Nombre
Edad (mayor de edad)
Género (F-M-NB)
Tecnología (PYTHON - JS - ASP.NET)
Puesto (Jr - Ssr - Sr)

No se sabe cuántos son los postulantes.
Informar por pantalla:
A) Cantidad de personas de genero no binario (NB) que programan en ASP.NET o JS cuya edad este entre 25 y 40, que 
se hayan postulado para un puesto Ssr.
B) Nombre de la persona Jr con menor edad.
C) Promedio de edades de las personas de genero masculino.
"
*/

function mostrar(){
    let nombre;
    let edad;
    let genero;
    let tecnologia;
    let puesto;
    let contadorNoBinario;
    let respuestaConfirm;
    let minimaEdad;
    let nombreMinimaEdad;
    let flag;
    let contadorMasculino;
    let promedioMasculinos;
    let contadorGeneral;
    

    contadorNoBinario = 0;
    contadorMasculino = 0;
    contadorGeneral = 0;
    flag = true;

    do{
        nombre = prompt("ingrese nombre");

    edad = prompt("Ingrese edad");
    edad = parseInt(edad);
    while(edad < 18){//Edad (mayor de edad)
        edad = prompt("Ingrese edad");
        edad = parseInt(edad);
    }

    genero = prompt("ingrese genero 1)F - 2)M - 3)NB");
    genero = parseInt(genero);
    while(genero <= 0 || genero > 3){ //genero (F-M-NB)
        genero = prompt("Incorrecto! - ingrese genero 1)F - 2)M - 3)NB");// avisa que es incorrecto
        genero = parseInt(genero);
    }

    //Tecnología (PYTHON - JS - ASP.NET)
    tecnologia = prompt("ingrese tecnologia: 1) Python - 2) JS - 3) ASP.NET");
    tecnologia = parseInt(tecnologia);
    while(tecnologia <= 0 || tecnologia > 3){
        tecnologia = prompt("Incorrecto! - ingrese tecnologia: 1) Python - 2) JS - 3) ASP.NET")// avisa que es incorrecto
        tecnologia = parseInt(tecnologia);
    }
    //puesto
    puesto = prompt("Ingrese puesto: 1) jr - 2) Ssr - 3) Sr");//Puesto (Jr - Ssr - Sr)
    puesto = parseInt(puesto);
    while(puesto <= 0 || puesto > 3){
        puesto = prompt("Incorrecto! - Ingrese puesto: 1) jr - 2) Ssr - 3) Sr");// avisa que es incorrecto
        puesto = parseInt(puesto); 
    }
    //Genero ----------- no uso switch porque no son mas de 3 casos en este parcial
    if(genero == 1){
        genero = "F";
    }else{
        if(genero == 2){
            genero = "M";
        }else {
            genero = "NB";
        }
    }
    //tecnologia
    if(tecnologia == 1){
        tecnologia = "Python";
    }else{
        if(tecnologia == 2){
            tecnologia = "Js";
        }else{
            tecnologia = "ASP.NET";
        }
    }
    //puesto
    if(puesto == 1){
        puesto = "Jr";
    }else{
        if(puesto == 2){
            puesto = "Ssr";
        }else{
            puesto = "Sr";
        }
    }

    /*A) Cantidad de personas de genero no binario (NB) que programan en ASP.NET o JS 
    cuya edad este entre 25 y 40, que */
    
    if(genero == "NB"){
        if(edad > 25 && edad < 40 ){
            if(tecnologia == "Js" || tecnologia == "ASP.NET"){
                contadorNoBinario ++;
            }
           
        }
    }
   
    //B) Nombre de la persona Jr con menor edad.
    if(flag == true && puesto == "Jr"){
        minimaEdad = edad;
        nombreMinimaEdad = nombre;
        flag = false;
    }else{
        if(edad < minimaEdad){
            minimaEdad = edad;
            nombreMinimaEdad = nombre;
        }
    }
    //C) Promedio de edades de las personas de genero masculino.
    if(genero == "M"){
        contadorMasculino ++;
    }
    respuestaConfirm = confirm("Desea continuar ingresando datos?");

    contadorGeneral ++;
    }while(respuestaConfirm == true);
    
    promedioMasculinos = (contadorMasculino *100) / contadorGeneral;
    alert("No binario: " + contadorNoBinario);
    alert("Nombre de la persona Jr con menor edad." + nombreMinimaEdad + minimaEdad);
    alert("promedio masculinos: " + promedioMasculinos)
} //fin  