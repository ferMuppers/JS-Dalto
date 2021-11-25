/* CREAR SOLUCIONES
        -Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares
        -Cada celular debe tener color, peso resolución de pantalla, 
        resolución de camara y memoria ram
        -Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar
*/

class Celular {
    constructor(color,peso,resolucionPantalla,resolucionCamara,memRam){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.memRam = memRam;
        this.encendido = false;

        
    }

    botonEncender(){
        if(this.encendido==false){
            alert("Celular prendido");
            this.encendido=true;
        }else{
            alert("Celular apagado");
        }
    }

    reiniciar(){
        if(this.encendido==true){
            alert("Reiniciando celular");
            this.encendido=true;

        }else{
            alert("El celular esta apagado")
            this.encendido=false;
        }
    }

    tomarFotos(){
        let accion = prompt("1 .-Tomar foto, 2.- Grabar video ")
        if(accion== 1){
            alert(`Foto tomada con una resolucion de ${this.resolucionCamara}`);
        }else if(accion==2){
            alert(`Video grabado con una resolucion de ${this.resolucionCamara}`);
        }else(alert("No ingresaste una opcion valida"))
    }

    mostrarInfo(){
        return(`
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.resolucionPantalla}</b></br>
        Resolución de camara: <b>${this.resolucionCamara}</b></br>
        Resolución de video: <b>${this.resolucionCamara}</b></br>
        Memoria Ram: <b>${this.memRam}</b></br>
        `);
    }

}


//celular1 = new Celular("rojo","150 gramos","5 pulgadas","Full hd","2gb");
//celular1.botonEncender("verde","90 gramos","4.5 pulgadas","full hd","2gb");
//celular2 = new Celular("negro","100 gramos","7 pulgadas","full hd","2gb");
//celular3 = new Celular("blanco","80 gramos","5.5 pulgadas","full hd","2gb");

//document.write(`
//<b>Celular1</b><br>
//${celular1.mostrarInfo()}<br>
//<b>Celular2</b> <br>
//${celular2.mostrarInfo()}<br>
//<b>Celular3</b> <br>
//${celular3.mostrarInfo()}<br>
//`
//);

/* Cofla no esta satisfecho con los celulares así que decide ir a la seccion de celulares de alta gama,
donde va a poder encontrar los celulares más caros del lugar, así que al entrar vió dos celulares que le encantaron
estos 2 celulares de alta gama pueden hacer todo lo que podían hacer los 3 anteriores pero tienen mejores caracteristicas
y además  pueden grabar en camara superlenta, tiene reconocimiento facial y una camara extra 

        CREAR SOLUCIONES
            - Implementar todas estas cualidades en los celulares de alta gama 
*/

class AltaGama extends Celular{
    constructor(color,peso,resolucionPantalla,resolucionCamara,memRam,resolucionCamaraExtra){
        super(color,peso,resolucionPantalla,resolucionCamara,memRam);
        this.resolucionCamaraExtra = resolucionCamaraExtra;
    }

    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }

   infoAltaGama(){
        return this.mostrarInfo() +  `Resolucion de camara extra: ${this.resolucionCamaraExtra}`;
    }
}

celular1 = new AltaGama("rojo","130g","5.2","4k","4gb","Full HD");

document.write(`
    ${celular1.infoAltaGama()} <br>
    `);


