//Variables sin let crea variables globales! 

function saludar(){
    respuesta = prompt("Hola ¿Como fue tu dia?")
if(respuesta == "bien"){
    alert("Me alegro!")
}
else
alert("Una pena")
}

function saludar(){
    alert("Hola")
    return "La funcion se ejecutó correctamente"
}

//let saludo = saludar();

//document.write(saludo)

let num1 = 32;
let num2 = 12;

function suma(a,b){
    return a+b;
}

//document.write(suma(num1,num2))

//Funciones Flecha
//Cuando se usa un solo parametro no se necesitan parentesis()
const saludar1 = (nombre)=>{
    let frase = `¡Hola ${nombre}! ¿Como estas?`
    document.write(frase)
}
//saludar1("fer")

/* Un joven muy afortunado logró ganar el primer premio de la loteria coneste dinero compró
una maquia que deja pasar a su casa solamente a los mayores de edad
            -Dejar pasar solo a los mayores de edad
            -La primer persona que entre despues de las 2 AM, no paga */
let free = true;
function pasar(hora){
    let edad = prompt("Cual es tu edad?")
    if(edad>=18){
        if(hora==2 && free ==true){
            alert(`Bienvenido a la fiesta tu entrada es gratis por que la hora es: ${hora}`)
            free = false;
        }else{
            alert("Bienvenido a la fiesta pero pagas!");
        }
     }else{
        alert("No puedes pasar")
    }
}

const ciclo = ()=>{ for(let i = 0; i<=3; i++){
    let hora = prompt("Que hora es?")
    pasar(hora)
}
}
//ciclo();

/*Cofla entró a la universidad. En su curso en total son 19 alumnos, pero surgió un problema
que complicó un poco a la facultad:
Se rompió el sistema de registro de asistencias y durantelos próximos 30 dias no se podrán hacer registros
de datos de ningun tipo, por ende las clases nop podrán comenzar hasta que esto este solucionado 

                    -Crear mini-sistema que nos permita registar a los alumnos que estan presentes (P) presentes
                    y ausentes (A) en clase.
                    -Pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes).
                    -Se puede tener un maximo de 10% de ausencias por semestre, si se tienen más aclarar que esta reprobado*/

let cantidad = prompt("¿Cuantos alumnos son:?");
let alumnosTot = [];

//Creamos los alumnos

for (i=0; i<cantidad; i++){
    alumnosTot[i] = [prompt("Nombre del alumno " + i),0 ]
}

//Tomamos la asistencia
const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia =="P"){
        alumnosTot[p][1]++
    }
}

//Numero de dias 
for(i=0; i < 5; i++){
    for(alumno in alumnosTot){
        tomarAsistencia(alumnosTot[alumno][0],alumno)
    }
}

//Imprimir lista de asistencias
for(alumno in alumnosTot){
    let resultado = `${alumnosTot[alumno][0]}:<br>
    ______________Asistencias: <b> ${alumnosTot[alumno][1]}:</b> <br>
    ______________Ausencias: <b>${30 - parseInt (alumnosTot[alumno][1])}</b>`;
    if(30 - alumnosTot[alumno][1] > 18){
        resultado += " <b style= 'color:red'>REPROBADO POR INASISTENCIAS</b> <br>"
    }else{
        resultado += "<br><br>" 
    }
    document.write(resultado);
}
