//funciones
function espar(valor){
    return (valor % 2 === 0);
}


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


const salariosSal= elSalvador.map((e)=> e.salary);
const salariosSort = salariosSal.sort((x,y)=>{
    return x - y;
});
