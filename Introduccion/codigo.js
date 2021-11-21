//var, let, const
//Const = constante no se puede declarar y despues inicializar 

let nombre = "fer";  
//let fer = prompt("Hola rancio")
let numero = 3
numero += 3
//document.write(numero)

let numero1 = 10
let numero2 = 5

//=== extricatamente igual tambien compara el tipo de dato

let saludo = "¡Hola luis!"
let pregunta = `${nombre} Como estas?`

//frase = "¡Hola luis!"

//n = 92
//n1 = 25

//op = 
//document.write(n < n1)

//if(nombre == "luis"){
//    alert("hola")
//}else{
//    alert("No es igual")
//}


//A) 3 chicos de 23 años perfectamente normales enran a una heladeria a comprar un 
//Helado pero hay un problema: los precios no estan al lado de cada estante con su respectivo hlado
//Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, así que veamos como podemos ayudarlos

let roberto = prompt("Hola, Roberto ¿Cuanto dinero tienes?");
let pedro = prompt("Hola, Pedro ¿Cuanto dinero tienes?");
let cofla = prompt("Hola, Cofla ¿Cuanto dinero tienes?");
cofla = parseInt(cofla);
let cambio = 0;

let heladoAgua = 0.6;
let heladoCrema = 1;
let hBoHeladix = 1.6;
let hBoHalodivch = 1.7;
let hBoHelardo = 2.9;
let botecitoconfites = 2.9;
let bote250 = 2.9;


if(roberto >= heladoAgua && roberto <heladoCrema ){
    alert("roberto Compra el helado de Agua");
}
else if(roberto >= heladoCrema && roberto < hBoHeladix){
    alert("roberto Compra el helado de crema");
}
else if(roberto >= hBoHeladix && roberto < hBoHalodivch){
    alert("roberto Compra el helado de bombon heladix ");
}
else if(roberto >= hBoHalodivch && roberto < hBoHelardo){
    alert("roberto Compra el helado de bombon heladovich");
}
else if(roberto >= hBoHelardo && roberto < botecitoconfites){
    alert("roberto Compra el helado de bonbon helardo");
}
else if(roberto >= botecitoconfites){
    alert("roberto Compra el botecito de helado confites ó el bote de helado de 1/4 kg");
}
else {
    alert("roberto No te alcanza");
}

if(pedro >= heladoAgua && pedro <heladoCrema ){
    alert("pedro Compra el helado de Agua");
}
else if(pedro >= heladoCrema && pedro < hBoHeladix){
    alert("pedro Compra el helado de crema");
}
else if(pedro >= hBoHeladix && pedro < hBoHalodivch){
    alert("pedro Compra el helado de bombon heladix ");
}
else if(pedro >= hBoHalodivch && pedro < hBoHelardo){
    alert("pedro Compra el helado de bombon heladovich");
}
else if(pedro >= hBoHelardo && pedro < botecitoconfites){
    alert("pedro Compra el helado de bonbon helardo");
}
else if(pedro >= botecitoconfites){
    alert("pedro Compra el botecito de helado confites ó el bote de helado de 1/4 kg");
}
else {
    alert("pedro No te alcanza");
}

if(cofla >= heladoAgua && cofla <heladoCrema ){
    alert("cofla Compra el helado de Agua");
    cambio = cofla - heladoAgua;
    alert(cambio);
}
else if(cofla >= heladoCrema && cofla < hBoHeladix){
    alert("cofla Compra el helado de crema");
    cambio = cofla - heladoCrema;
    alert(cambio);
}
else if(cofla >= hBoHeladix && cofla < hBoHalodivch){
    alert("cofla Compra el helado de bombon heladix ");
    cambio = cofla - hBoHeladix;
    alert(cambio);
}
else if(cofla >= hBoHalodivch && cofla < hBoHelardo){
    alert("cofla Compra el helado de bombon heladovich");
    cambio = cofla - hBoHalodivch;
    alert(cambio);
}
else if(cofla >= hBoHelardo && cofla < botecitoconfites){
    alert("cofla Compra el helado de bonbon helardo");
    cambio = cofla - hBoHelardo;
    alert(cambio);
}
else if(cofla >= botecitoconfites){
    alert("cofla Compra el botecito de helado confites ó el bote de helado de 1/4 kg");
    cambio = cofla - botecitoconfites;
    alert(cambio);
}
else {
    alert("cofla No te alcanza");
}