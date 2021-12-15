function hola(nombre, mycallback){
    setTimeout(()=>{
        console.log('hola '+nombre);
        mycallback();
    },1000);
}
function adios(nombre, callback){
    setTimeout(()=>{
        console.log('Adios '+nombre)
        callback();
    },2000);
}


console.log('iniciando proceso');
hola('Daniel',()=>{
    adios('daniel', ()=>{
        console.log('terminando proceso')
    });
    });
