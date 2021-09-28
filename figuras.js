'use strict'
function perimetroCuadrado(lado){
        let resultado = lado * 4;
        return alert('el perimetro es: '+resultado +'cm');
}

function areaCuadrado(lado){
    let resultado = Math.pow(lado,2);
    return alert('el area es: '+resultado + 'cm2');
}


window.addEventListener ('load', () =>{
    // AREA DE UN CUADRADO
let usuario = prompt('ingrese la medida del lado del cuadrado:',0);
        perimetroCuadrado(usuario);
            //PERIMETRO DE UN CUADRADO
        areaCuadrado(usuario);
    
//triangulo
//perimetro del triangulo
let triangulo = {
    lado1: 5,
    lado2: 5,
    base: 6.5,
    altura: 4.2
}

let perimetroTriangulo = triangulo.lado1+triangulo.lado2+triangulo.base;
console.log('el perimetro del triangulo es: '+perimetroTriangulo);
 
//area de triangulo
 let areaTriangulo = (triangulo.base*triangulo.altura)/2;
 console.log('el area del triangulo es: '+areaTriangulo);
});