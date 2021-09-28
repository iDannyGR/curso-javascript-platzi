'use strict'
function perimetroCuadrado(lado){
     alert('el perimetro es: '+lado * 4+'cm');
}

function areaCuadrado(lado){
    return alert('el area es: '+Math.pow(lado,2)+ 'cm2');
}

function perimetroTriangulo(lado1,lado2,base){
   return alert(`el perimetro es:${lado1+lado2+base}`)
}

function areaTriangulo(base, altura){
    return alert(`el area del triangulo es: ${(base*altura)/2}`)
};


function circunferenciaCirculo (diametro){
    return alert('la circunferencia es:'+ diametro * Math.PI)
}

function areaCirculo (radio){
   return alert(`el area del ciculo es: ${(radio * radio) * Math.PI}`);
} 

window.addEventListener ('load', () =>{
    // AREA DE UN CUADRADO
    //let usuario = prompt('ingrese la medida del lado del cuadrado:',0);
   //     perimetroCuadrado(usuario);
    //PERIMETRO DE UN CUADRADO
      //  areaCuadrado(usuario);
    
    //triangulo
    //perimetro del triangulo
    let  lado1 =5;
    let lado2  =5;
    let  base  =5;
    let altura =5; 
//area de triangulo
 
//circulo
let radio=4;
let diametro = radio * 2;


});