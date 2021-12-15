function hola(nombre, mycallback){
    setTimeout(()=>{
        console.log('hola '+nombre);
        mycallback(nombre);
    },1000);
}
function adios(nombre, callback){
    setTimeout(()=>{
        console.log('Adios '+nombre)
        callback();
    },2000);
}


console.log('iniciando proceso');
hola('Daniel',(nombre)=>{
    adios(nombre, ()=>{
        console.log('terminando proceso')
    });
    });
