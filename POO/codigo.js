//this es como decir perro
//Las funciones flecha no pueden ser usadas para crear metodos dentro de la clase

class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad; 
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad},
        y soy de color ${this.color}`
    }
    verInformacion(){
        document.write(this.informacion + "<br>")
    }
}  

let perro = new animal("perro",5,"rojo");
let gato = new animal("gato",2,"negro");
let pajaro = new animal("pajaro",1,"verde");
perro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();
