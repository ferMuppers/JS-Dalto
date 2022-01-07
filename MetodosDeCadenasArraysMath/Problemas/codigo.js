/*Crear una funcion que al pasarle como parametro la materia nos devuelva:
        -Profesor asignado
        -Nombre de todos los alumnos 
-Crear funcion que nos diga en cuantas clases esta Cofla
-Nombrar las clases en las que esta y los prfesores de cada una
*/

const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","Pedro","Juan","Pepito","Cofla","Maria"],
        programacion: ["Rodriguez","Pedro","Juan","Pepito"],
        logica: ["Fernando","Pedro","Juan","Pepito","Cofla","Maria"],
        quimica: ["Luis","Pedro","Juan","Pepito","Cofla","Maria"]
    };
    
    if(materias[materia] !== undefined){
        return [materia,materias[materia]];
    }else
    return materias;
}


const mostrarInformacion = (materia)=>{
let informacion = obtenerInformacion(materia);
if (informacion !==false){
    let profesor = informacion[1][0];
    let alumnos = informacion[1];
    alumnos.shift();
    document.write(`Profesor asignado a la materia de: <b> ${informacion[0]}</b>: <b style="color:blue">${profesor} </b><br> alumnos de la materia:
    <b style="color:red"> ${alumnos}</b> <br><br> ` )
}
}

//resultado = nombres.filter(numero => numero > 2); 
const clasesCofla = (alumno)=>{
    let clasespresentes = [];
    let cantidadTotal = 0;
    let informacion = obtenerInformacion();
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasespresentes.push( "" + info);
        }
    }

    return `<b style = 'color:blue'>${alumno}</b> está en <b>${cantidadTotal} clases </b> <br> ${clasespresentes}`;
}
mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("logica")
mostrarInformacion("quimica")

document.write(clasesCofla("Cofla"))