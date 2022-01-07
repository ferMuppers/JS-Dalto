/*
Cofla est'a sufriendo un poco... ya que, apesar de que cree contar con el 90% de assitencias y tener un promedio mayor a 7 /10, no cree entregar
el 75% de trabajos practicos entregados ya que necesita dividir las tareas que hara semnanalmente, cofla debe, trabajar 8 horas por dia durante 2
semanas entre las cuales tiene que: 24 horas estudiar, 24 horas hacer trabajos practicos, 56 horas de trabajar y 8 horas de hacer las cosas
de la casa 

35 las cosas de la casa 
100 trabajos 
10 minutos de trabajo
100 estudiar 
240 trabajar
*/

let trabajo = "240 minutos";
let estudio = "100 minutos";
let tp = "100 minutos hacer trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for(var i=0; i<14;i++){

    if(i == 0){
        console.group("Semana 1")
    }
    console.groupCollapsed('Dia'+(i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp)
    console.log(homework)
    console.groupEnd();
    if(i==6){
        console.groupEnd();
        console.groupCollapsed("Semana 2")
    }
}
console.groupEnd()
console.groupEnd()