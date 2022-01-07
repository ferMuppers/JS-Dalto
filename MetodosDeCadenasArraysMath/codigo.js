/*Concat*/
//METODOS DE CADENAS
let cadena = "cadena de prueba ASDASDA";
//let cadena2 = "cadena"
//resultado = cadena.concat(" Hola");
//resultado = cadena.startsWith(cadena2);
//resultado = cadena.endsWith(cadena2);
//resultado = cadena.includes(cadena2);
//resultado = cadena.indexOf(cadena2); Nos dice en que indece se encuentra el parametro
//resultado = cadena.lastIndexOf("c"); Nos dice en que indice se encuentra el parametro que le pasamos pero inicia de atras hacia delante
//resultado= cadena.padStart(40,"12") //Rellena una cadena con el segundo parametro (Cantidad de caracteres de la cadena, elemento con el que se va a rellenar)
//resultado= cadena.padEnd(40,"12")
//resultado = cadena.repeat(6)
//resultado = cadena.split(" ");
//resultado = cadena.substring(0,4) // (arranca,termina)
//resultado = cadena.toLocaleLowerCase();
//resultado = cadena.toUpperCase();
//resultado = cadena.toString
//resultado = cadena.trim()//Elimina todos los espacios de una cadena
//resultado = cadena.trimEnd() //Elimina todos los espacios del final
//resultado = cadena.trimStart() //Elimina los espacios del principip

//document.write(resultado);

//_____________________________________________________________________________________________________________________________________________

//METODOS DE ARRAYS TRANSFORMADORES

let nombres = [0,1,2,3,4,5,6];

//let resultado = nombres.pop(); //Saca el ultimo elemento de un array y lo devuelve
//let resultado = nombres.shift(); //Saca el primer elemento de un array y lo devuelve
//let resultado = nombres.push("Fernando");//Inserta un nuevo valor en el array y nos devuelve el numero de valores en el array
//let resultado = nombres.reverse(); //Invierte y devuelve el array 
//let resultado = nombres.inludes(0);
 //nombres.unshift("Luis","marco"); //Agrega uno o mas elementos al inicio del array y lo devuelve
 //let resultado = nombres.sort();//Oredena un arreglo ya sea por orden alfabetico o numerico
//nombres.splice(1,3,"Nuevo");//splice(inicia,acaba,reemplaza el inicio) pero si no hay nada que reemplazar los elmina
//document.write(nombres);

//METODOS DE ARRAYS ACCESORES
//let resultado = nombres.join("<br>Elemento: ") Nos permite convertir un array a string y elegir lo que hay en medio de cada elemento
//let resultado = nombres.slice(0,nombres.length);//Nos devuelve desde el elemento de inicio hasta el ultimo (inicio, fin)
//document.write(resultado);

//METOS DE ARRAYS DE REPETICION
/* resultado = nombres.filter(numero => numero > 2); //Nos permite recorrer el array y ejecutar condiciones 
   document.write(resultado + "<br>")                 //En este caso numero va a ser cada numero dentro del array

nombres.filter((numero) => {
    document.write(numero + "<br>")
});*/ 

//_____________________________________________________________________________________________________________________________________________
//Objeto Math

//numero = Math.sqrt(25); //Raiz cuadrada de un numero 
//numero = Math.cbrt(25); //Raiz Cubica de un numero
//numero = Math.max(2,3,45,6,7,200) //Regresa el numero mas grande
//numero = Math.min(2,3,45,6,7,200)//Regresa el numero mas chiquito
numero = Math.random()*100; //Regresa un numero aleatorio entre 0 y 1 
numero = Math.round(numero);//Redondea el numero a su numero entero mas cercano
numero = Math.floor(3.9) //Redondea el numero a su numero entero bajo mas cercano 
numero = Math.round(9.99) //Redondea al mas cercano
numero = Math.PI //Devuelve Pi
numero = Math.SQRT1_2 //Devuelve raiz cuadrada de 1/2
numero = Math.SQRT2 //Devuelve raiz cuadrada de 2
numero = Math.E; //Constante de Euler
numero = Math.LN10 //Logaritmo de 10
numero = Math.LOG2E //Logaritmo de E con base 2
numero = Math.LOG10E //Logaritmo de E con base 10
document.write(numero);