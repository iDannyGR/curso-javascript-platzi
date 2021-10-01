'use strict'
function perimetroCuadrado(lado){
    let squareContainer = document.querySelector('#section_container--cuadrado');
    squareContainer.innerHTML=`${lado * 4}cm`;
}

function areaCuadrado(lado){
    let squareContainer = document.querySelector('#section_container--cuadrado');
    squareContainer.innerHTML=`${Math.pow(lado,2)}cm2`;
}

function perimetroTriangulo(lado1,lado2,base){
    let triangleContainer = document.querySelector('#section_container--triangulo'); 
    triangleContainer.innerHTML =`perimetro:</br>${lado1+lado2+base}`;
}

function areaTriangulo(base, altura){
    let triangleContainer = document.querySelector('#section_container--triangulo'); 
    triangleContainer.innerHTML=`el area es:</br>${(base*altura)/2}`;
};

function isoseles(lado1,lado2,base){
    let triangleContainer = document.querySelector('#section_container--triangulo'); 
    if(lado1===lado2 && lado1 != base){
        triangleContainer.innerHTML =`Altura es:</br>${(Math.sqrt(lado1**2 - base**2/ 4)).toFixed(2)}`;
    }else{
        triangleContainer.innerHTML='no es isoseles';
    }    
};

function circunferenciaCirculo (diametro){
    let circleContainer = document.querySelector('#section_container--circulo');
    circleContainer.innerHTML ='Circunferencia:</br>'+ (diametro * Math.PI).toFixed(2);
}

function areaCirculo (radio){
    let circleContainer = document.querySelector('#section_container--circulo');
   circleContainer.innerHTML=`el area es:</br> ${((radio * radio) * Math.PI).toFixed(2)}`;
} 

window.addEventListener ('load', () =>{
    // AREA DE UN CUADRADO
    let calcularArea = document.getElementById('area');
        calcularArea.addEventListener('click', ()=>{
            let ladoCuadra = document.querySelector('#lado_cuadrado').value;
            areaCuadrado(ladoCuadra);
        });
        //PERIMETRO DE UN CUADRADO   
        let calcularPerimetro = document.getElementById('perimetro');
        calcularPerimetro.addEventListener('click', ()=>{
            let ladoCuadra = document.querySelector('#lado_cuadrado').value;
            perimetroCuadrado(ladoCuadra);
        });
    //triangulo
    //perimetro del triangulo
let calPerimetrotriangulo= document.getElementById('perimetro_tri');
        calPerimetrotriangulo.addEventListener('click',()=>{
            let lado1 =document.querySelector('#lado1_triangulo').value;
            let lado2 =document.querySelector('#lado2_triangulo').value;
            let base =document.querySelector('#base_triangulo').value;
            perimetroTriangulo(parseInt(lado1),parseInt(lado2),parseInt(base));
        })

    //area de triangulo
        let calAreatriangulo= document.getElementById('area_tri');
        calAreatriangulo.addEventListener('click',()=>{
            let base =document.querySelector('#base_triangulo').value;
            let altura =document.querySelector('#altura_triangulo').value;
            areaTriangulo(parseInt(base), parseInt(altura));
        });
    //altura isoseles
    let trisoseles= document.getElementById('isoseles_tri');
        trisoseles.addEventListener('click',() =>{
            let lado1 =document.querySelector('#lado1_triangulo').value;
            let lado2 =document.querySelector('#lado2_triangulo').value;
            let base =document.querySelector('#base_triangulo').value;
             isoseles(parseInt(lado1),parseInt(lado2),parseInt(base));
        });

 
//circulo
        //area de circulo
        let areaCir= document.getElementById('area_Circulo')
        areaCir.addEventListener('click',()=>{
            let radio = document.querySelector('#radio').value;
            let diametro = radio * 2;
                areaCirculo(radio);
        });
        //circunferencia/perimetro circulo
        let perimetroCir= document.getElementById('perimetro_Circulo')
        perimetroCir.addEventListener('click',()=>{
            let radio = document.querySelector('#radio').value;
            let diametro = radio * 2;
                circunferenciaCirculo(diametro);
        });

});