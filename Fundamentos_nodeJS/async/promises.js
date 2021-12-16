function hola(nombre){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log('hola '+nombre);
            res(nombre);
        },1000);
    });
    
}
function adios(nombre){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log('Adios '+ nombre)
            res();
        },2000);
    })
    
}

function talk(nombre){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log('blabla bla bla bla ');
            //res(nombre);
            rej('hay un error')
        },1000);
    })
   
}
console.log('iniciando el proceso..');
hola('Daniel')
    .then(talk)
    .then(adios)
    .then(nombre=>{
        console.log('terminado el proceso');
    })
    .catch(err=>{
        console.error('ha habido un error')
        console.error(err)
    })