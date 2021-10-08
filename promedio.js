//funciones 
function mediaAritmetica (lista){
    let promedio = lista.reduce((x,y)=> x+y);    
    return (promedio/lista.length);
    };
    
    function espar(valor){
        if(valor % 2 === 0){
            return true
        }else{return false}
    };
    
    
    function mediana(array){
        let mitad =parseInt(array.length/2);
        array.sort();
        let mediana;
            if(espar(array.length)){
                mediana = (array[mitad-1] + array[mitad])/2
                return alert(mediana);
            }else{
                mediana = array[mitad];
                return alert (mediana);
            };
        
    }

    //load
    let arreglo = [500,200,100,500,100];
    let lista = [1,1,1,1,5,7,8,9,9,9,9,4,1,2,2,6,6,9];

    let listaCount ={};
    lista.map(
        function (e){
            if(listaCount[e]){
                listaCount[e] +=1;
            } else{
                listaCount[e]=1;
            }
            
        }
    )



    
    //mediana
    /*
    si es inpar el array la mediana es la mitad del array
    array.length / 2 = si es faccion se aproxima al siguiente y ese es la mitad
    si da un entero la mediana es el numero resultado y numero +1
    
    
    //moda
    
    el valor que mas se repite
    
    */