    /*-Crear un sistema que ayude a Cofla a decidir cual app descargar  
      -La informacion de los instaladores debe contener la  cantidad de 
      descargas , la puntuacion y el peso
      -Las apps se deben poder instlar, abir, cerrar y 
      desinstalar
    */


class App{
    constructor(cDes,puntuacion,peso){
        this.cDes = cDes;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.inst = false;
        this.abrir = false;
    }

    set setInstalar(a){
        this.inst = a;
    }
    set setAbrir(a){
        this.abrir=a;
    }

    abrirapp(){
        if(this.abrir==false){
            alert("La aplicacion se ha abierto");
            this.abrir=true;
        }else{
            alert("La aplicacion se ha cerrado");
            this.abrir=false;
        }
    }
    instalarapp(){
        if(this.inst==false){
            alert("La aplicacion se ha instalado");
            this.inst=true;
        }else{
            alert("La aplicacion se ha desinstalado");
            this.inst=false;
        }
    }


    mostrarInfo(){
        return(`
        Cantidad: <b>${this.cDes}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `)
    }
}


app1= new App("5000",4.5,"2 gb");
app1.setAbrir=true;
app1.setInstalar=true
document.write(app1.mostrarInfo());
app1.abrirapp();
app1.instalarapp();