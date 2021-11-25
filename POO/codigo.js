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

//Herencia 

class Perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    static ladrar(){
        alert("WAW")
    }
    set setRaza(nRaza){
        this.raza = nRaza
    }
    get getRaza(){
        return this.raza;
    }

}

//Metdos estaticos
/*Es como instanciar una clase temporal ya que no requiere de los parametros del constructor y puede ser mandado a llamar sin necesidad de 
haber creado el objeto antes 

ejemplo Perro.ladrar() y nos devolveria un "WAW"
*/
//Los objetos se definen con Const

const perro = new Perro("perro",5,"rojo","doberman");
const gato = new animal("gato",2,"negro");
const pajaro = new animal("pajaro",1,"verde");
perro.setRaza="Fer";
document.write(perro.getRaza);
//Perro.ladrar();
/*perro.verInformacion();
perro.ladrar();
gato.ladrar();
pajaro.ladrar();*/
