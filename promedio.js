//funciones
function mediaAritmetica (lista){
let promedio = lista.reduce((x,y)=> x+y);    
return (promedio/lista.length);
};

//load

window.addEventListener('load', ()=>{
    //promedio

   
});


/*
let suma = 0;
let promedio = 0;
for(let i = 0; i<lista.length; i++){
    suma += lista[i];
}
promedio =  suma / lista.length;

*/

/*
// media aritmetica

variable tipo array en un pront o un input (-1 ya que los array comienzan en 0)
solicitar la cantidad de datos
solicitar los datos uno por uno
realizar la sumatoria de cada uno de ellos con un for of o foreach en una variable despues
dividir la variable entre array.lenth

//mediana

si es inpar el array la mediana es la mitad del array
array.length / 2 = si es faccion se aproxima al siguiente y ese es la mitad
si da un entero la mediana es el numero resultado y numero +1


//moda

el valor que mas se repite

*/