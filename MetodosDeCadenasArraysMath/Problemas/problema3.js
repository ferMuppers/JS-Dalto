const materias = {
    fisica: ["Perez","Pedro","Juan","Pepito","Cofla","Maria"],
    programacion: ["Rodriguez","Pedro","Juan","Pepito"],
    logica: ["Fernando","Pedro","Juan","Pepito","Cofla","Maria"],
    quimica: ["Luis","Pedro","Juan","Pepito","Cofla","Maria"]
};


const inscribir = (alumno,materia) =>{
    personas = materias[materia];
    if (personas.length >=21){
        document.write(
            ` <br> Lo siento ${alumno}, las clases de ${materia} ya estan llenas <br> <br>`
        )
    }
    else{
        personas.push(alumno);
        document.write(`<br> El alumno ${alumno}, se ha inscrito a la clase ${materia} de manera satisfactoria <br> <br>`)
        //document.write(materias["programacion"])
       //return(materias[materia]);
    }
}


document.write(inscribir(" <br> 1 ","programacion"));
document.write(inscribir(" <br> 2 ","programacion"));
document.write(inscribir(" <br> 3 ","programacion"));
document.write(inscribir(" <br> 4 ","programacion"));
document.write(inscribir(" <br> 5 ","programacion"));
document.write(inscribir(" <br> 6 ","programacion"));
document.write(inscribir(" <br> 7 ","programacion"));
document.write(inscribir(" <br> 8 ","programacion"));
document.write(inscribir(" <br> 9 ","programacion"));
document.write(inscribir(" <br> 10 ","programacion"));
document.write(inscribir(" <br> 11 ","programacion"));
document.write(inscribir(" <br> 12 ","programacion"));
document.write(inscribir(" <br> 13 ","programacion"));
document.write(inscribir(" <br> 14 ","programacion"));
document.write(inscribir(" <br> 15 ","programacion"));
document.write(inscribir(" <br> 16 ","programacion"));
document.write(inscribir(" <br> 17 ","programacion"));
document.write(inscribir(" <br> 18 ","programacion"));
document.write(inscribir(" <br> 19 ","programacion"));
document.write(inscribir(" <br> 20 ","programacion" ));
document.write(`<br> ${materias["programacion"]}`)
