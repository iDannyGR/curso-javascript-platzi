//funciones 
function mediaAritmetica (lista){
    let promedio = lista.reduce((x,y)=> x+y);    
    return (promedio/lista.length);
    };
    
    function espar(valor){
        if(valor.length % 2 === 0){
            return true
        }else{return false}
    };
    //load
    
    window.addEventListener('load', ()=>{
        //promedio
    let arreglo = [500,200,100,500];
    let mitad =parseInt(arreglo.length /2);
    let mediana;
        if(espar(arreglo.length)){
            mediana = (arreglo[mitad] + arreglo[(mitad+1)])/2;
            console.log(mediana);
        }else{
            mediana = arreglo[mitad];
            console.log(mediana);
        };
    });
    
    
    //mediana
    /*
    si es inpar el array la mediana es la mitad del array
    array.length / 2 = si es faccion se aproxima al siguiente y ese es la mitad
    si da un entero la mediana es el numero resultado y numero +1
    
    
    //moda
    
    el valor que mas se repite
    
    */