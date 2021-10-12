//funciones
function espar(valor){
    return (valor % 2 === 0);
}

function mediana(array){
    let mitad =parseInt(array.length/2);
    array.sort();
    let mediana;
        if(espar(array.length)){
            mediana = (array[mitad-1] + array[mitad])/2;
            return mediana;
        }else{
            mediana = array[mitad];
            return  mediana;
        };
}


const salariosSal= elSalvador.map((e)=> e.salary);
const salariosSort = salariosSal.sort((x,y)=>{
    return x - y;
});

let spliceStart = (salariosSort.length* 90)/100;
let spliceCount = salariosSort.length - spliceStart;

const topTenSalario = salariosSort.splice(spliceStart,spliceCount);

console.log(mediana(salariosSort));
console.log(salariosSort, topTenSalario);