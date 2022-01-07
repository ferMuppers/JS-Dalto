frutas = ["Banana","Manzana","Pera",5,9,"Luis"];
//document.write(frutas[3])

let pc = {
    nombre: "LuisPc",
    procesador: "Intel Core I5",
    ram:"16gb",
    espacio: "1TB"
};

//document.write(pc["ram"])

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase = `el nombre de mi pc es: <b>${nombre}</b> <br>
       el procesador es: <b>${procesador}</b> <br>
       la memoria ram es: <b>${ram}</b> <br>
       el espacio en disco es <b>${espacio}</b>`
       
//document.write(frase)


//Bucles
let numero = 0;
//While
/*do{
    document.write(numero + "<br>")
    numero++;
}
while (numero <= 6)*/

while(numero < 100){
    numero ++;
    ///document.write(numero);
    
}

//for

for(let i = frutas.length-1; i >= 0; i-- ){
    
    if(frutas[i]== 5 ){
        i--
    }
    //document.write(`<br>`)
    //document.write(frutas[i])
}

for(let i = 0; i<5; i++ ){
    if (i==3){
        continue
    }
   // document.write(i)
}

//for in

let animales = ["Perro", "gato","Tiranosaurio grrr"]
//For in (Devuelve el indice)
//For of (Devuelve el valor)
for ( animal in animales) {
   // document.write(animales[animal] + "<br>")
}

for (const iterator of animales) {
   // document.write(iterator + "<br>")
}

array1 = ["Pedro","Marcelo","Fernando"]
array2 = ["Luis","Fer",array1,"Josefina"]


forrancio: //<- etiquetas para for
for (array in array2) {
    if (array ==2) {
        continue forrancio;
        // break forrancio; //<- detiene el for de arriba
        for (array of array1) {
            document.write(array + "<br>")
        } 
    }
    else
    document.write(array2[array] + "<br>")

}

//prueba de git con termux 
