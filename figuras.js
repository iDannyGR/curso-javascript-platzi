'use strict'
function perimetroCuadrado(lado){
    let resultado = `${lado * 4}cm`; 
    let squareContainer = document.querySelector('#section_container--cuadrado');
    squareContainer.innerHTML=resultado;
}

function areaCuadrado(lado){
    let resultado = `${Math.pow(lado,2)}cm2`; 
    let squareContainer = document.querySelector('#section_container--cuadrado');
    squareContainer.innerHTML=resultado;
}

function perimetroTriangulo(lado1,lado2,base){
   return alert(`el perimetro es:${lado1+lado2+base}`)
}

function areaTriangulo(base, altura){
    return alert(`el area del triangulo es: ${(base*altura)/2}`)
};

function isoseles(lado1,lado2,base){
    if(lado1===lado2 && lado1 != base){
        return alert(`la altura del triangulo isoseles es: ${Math.sqrt(lado1**2 - base**2/ 4)}`)
    }else{
        return alert('no es isoseles')
    }
    
};

function circunferenciaCirculo (diametro){
    return alert('la circunferencia es:'+ diametro * Math.PI)
}

function areaCirculo (radio){
   return alert(`el area del ciculo es: ${(radio * radio) * Math.PI}`);
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