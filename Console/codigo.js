/*
FUNCIONES DE REGISTRO
console.clear() //limpia la consola
console.assert() //Aparece un mensaje de afirmacion si es verdadera la condicion 
console.error() Muestra un mensaje de error en terminal
console.info() Emite un mensaje informativo
console.log() muestra un mensaje en consola 
console.table() toma un array o un objeto como parametro y lo muestra como un tabla
console.warn() Muestra una advertencia en consola 
console.dir despliega una lista interactiva del objeto en JS 


FUNCIONES DE COUNT

console.count() despliega en consola cuantas veces se ha ejecutado la funcion 
console.countreset() reinicia el conteo 
hh
FUNCIONES DE AGRUPACION 

console.group() crea un nivel de grupo dentro de consola 
console.groupEnd() elimina el grupo 
console.groupCollapse() crea el grupo y lo cierra 

FUNCIONES DE TEMPORIZACION

console.time() crea un temporizador
console.timeLog() Muestra cuanto tiempo ha pasado en el temporizador
console.timeEnd() detiene el temporizador 
*/

const materias = {
    fisica: [90,6,4,"Fisica"],
    matematica: [84,8,2,"Matematicas"],
    logica: [92,8,4,"Logica"],
    quimica: [96,8,4,"Quimica"],
    calculo: [91,6,3,"Calculo"],
    programacion: [79,7,4,"Programacion"],
    biologia: [75,9,2,"Biologia"],
    bbdd: [98,9,1,"Bbdd"],
    algebra: [100,10,4,"Algebra"]
}

const asistencia = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);
        if(asistencias>=90){
            console.log("%c         Asistencias en orden","color:green")
        }else{
            console.log("%c         Falta de asistencias","color:red")
        }

        if(promedio >=7){
            console.log("%c         Promedio aprobatorio","color:green")
        }else{
            console.log("%c         Promedio reprobatorio","color:red")
        }

        if(trabajos>=3){
            console.log("%c         Trabajos practicos en orden","color:green")
        }else{
            console.log("%c         Faltan trabajos practicos","color:red")
        }
    }
}

asistencia();